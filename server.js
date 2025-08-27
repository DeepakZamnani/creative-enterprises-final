// server.js
// Backend server for handling email sending with Nodemailer

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Rate limiting to prevent spam
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many contact form submissions, please try again later.'
  }
});

app.use('/api/contact', limiter);

// Email transporter configuration
const createTransporter = () => {
  // Option 1: Gmail (most common)
  if (process.env.EMAIL_SERVICE === 'gmail') {
    return nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your gmail address
        pass: process.env.EMAIL_PASS  // your gmail app password
      }
    });
  }
  
  // Option 2: Custom SMTP (for business email)
  else if (process.env.EMAIL_SERVICE === 'smtp') {
    return nodemailer.createTransporter({
      host: process.env.SMTP_HOST, // e.g., 'smtp.your-domain.com'
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }
  
  // Option 3: SendGrid
  else if (process.env.EMAIL_SERVICE === 'sendgrid') {
    return nodemailer.createTransporter({
      service: 'SendGrid',
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY
      }
    });
  }
  
  // Default to Gmail
  else {
    return nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }
};

// Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Sanitize input to prevent XSS
const sanitizeInput = (str) => {
  if (typeof str !== 'string') return '';
  return str.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/<[^>]+>/g, '')
            .trim();
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields.'
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone || ''),
      service: sanitizeInput(service || ''),
      message: sanitizeInput(message)
    };

    // Create transporter
    const transporter = createTransporter();

    // Verify transporter configuration
    await transporter.verify();

    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata'
    });

    // Email to business (you)
    const businessEmailOptions = {
      from: `"Creative Prints Website" <${process.env.EMAIL_USER}>`,
      to: process.env.BUSINESS_EMAIL || 'sales@creativeprints.in',
      subject: `New Contact Form Submission - ${sanitizedData.service || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1e3a8a; margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${sanitizedData.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></p>
              <p><strong>Phone:</strong> ${sanitizedData.phone || 'Not provided'}</p>
              <p><strong>Service Interest:</strong> ${sanitizedData.service || 'Not specified'}</p>
              <p><strong>Submitted:</strong> ${timestamp}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #1e3a8a; margin-top: 0;">Message</h3>
              <p style="line-height: 1.6; white-space: pre-wrap;">${sanitizedData.message}</p>
            </div>
          </div>
          
          <div style="background: #e5e7eb; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            This message was sent from the Creative Prints website contact form.
          </div>
        </div>
      `,
      text: `
New Contact Form Submission
==========================

Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Phone: ${sanitizedData.phone || 'Not provided'}
Service: ${sanitizedData.service || 'Not specified'}
Submitted: ${timestamp}

Message:
${sanitizedData.message}

--
This message was sent from the Creative Prints website contact form.
      `
    };

    // Auto-reply email to customer
    const autoReplyOptions = {
      from: `"Creative Prints" <${process.env.EMAIL_USER}>`,
      to: sanitizedData.email,
      subject: 'Thank you for contacting Creative Prints!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #e91e63, #ea580c); color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">Thank You for Your Inquiry!</h2>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <p>Dear ${sanitizedData.name},</p>
              
              <p>Thank you for reaching out to Creative Prints! We have received your inquiry and will get back to you within 2 hours during business hours.</p>
              
              <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; margin: 20px 0;">
                <h4 style="margin-top: 0; color: #1e3a8a;">Your Submission Details:</h4>
                <p><strong>Service:</strong> ${sanitizedData.service || 'General Inquiry'}</p>
                <p><strong>Message:</strong> ${sanitizedData.message.substring(0, 100)}${sanitizedData.message.length > 100 ? '...' : ''}</p>
              </div>
              
              <p><strong>Contact Information:</strong></p>
              <ul style="list-style: none; padding: 0;">
                <li>📍 Shop No. 18, Sant Tukaram Nagar, Pimpri, Pune - 411018</li>
                <li>📞 +91 7709278247 | +91 860030808</li>
                <li>📧 sales@creativeprints.in</li>
              </ul>
              
              <p>For urgent matters, please feel free to call us directly.</p>
              
              <p>Best regards,<br>
              <strong>Creative Prints Team</strong></p>
            </div>
          </div>
          
          <div style="background: #e5e7eb; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            This is an automated response. Please do not reply to this email.
          </div>
        </div>
      `,
      text: `
Dear ${sanitizedData.name},

Thank you for reaching out to Creative Prints! We have received your inquiry and will get back to you within 2 hours during business hours.

Your Submission Details:
Service: ${sanitizedData.service || 'General Inquiry'}
Message: ${sanitizedData.message.substring(0, 100)}${sanitizedData.message.length > 100 ? '...' : ''}

Contact Information:
📍 Shop No. 18, Sant Tukaram Nagar, Pimpri, Pune - 411018
📞 +91 7709278247 | +91 860030808
📧 sales@creativeprints.in

For urgent matters, please feel free to call us directly.

Best regards,
Creative Prints Team

--
This is an automated response. Please do not reply to this email.
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(businessEmailOptions),
      transporter.sendMail(autoReplyOptions)
    ]);

    // Log successful submission (optional)
    console.log(`Contact form submission from ${sanitizedData.email} at ${timestamp}`);

    res.status(200).json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    res.status(500).json({
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again or contact us directly.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully...');
  process.exit(0);
});