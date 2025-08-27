// // utils/email-service.js

// class EmailService {
//   constructor() {
//     // ✅ EmailJS configuration - replace with your actual values
//     this.config = {
//       serviceId: "service_blcm0f4",   // Your EmailJS Service ID
//       templateId: "template_cfj6rtb", // Your EmailJS Template ID
//       publicKey: "CBqkyD8JUagyXvfEX", // Your EmailJS Public Key
//     };
//   }

//   /**
//    * Send email using EmailJS REST API
//    * @param {Object} formData - Contact form data
//    * @returns {Promise<{success: boolean, message: string}>}
//    */
//   async sendEmail(formData) {
//     // 🔹 Validate before sending
//     const validation = this.validate(formData);
//     if (!validation.isValid) {
//       return { success: false, message: validation.message };
//     }

//     try {
//       const payload = {
//         service_id: this.config.serviceId,
//         template_id: this.config.templateId,
//         user_id: this.config.publicKey,
//         template_params: {
//           from_name: formData.name,
//           from_email: formData.email,
//           phone: formData.phone || "Not provided",
//           service: formData.service || "Not specified",
//           message: formData.message,
//           to_email: "sales@creativeprints.in", // 👈 Your inbox (make sure template uses {{to_email}})
//           reply_to: formData.email,
//         },
//       };

//       const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`EmailJS error: ${response.status} - ${errorText}`);
//       }

//       return {
//         success: true,
//         message: "✅ Your message has been sent successfully!",
//       };
//     } catch (err) {
//       console.error("❌ EmailService Error:", err);
//       return {
//         success: false,
//         message: "Failed to send email. Please try again or contact us directly at +91 7709278247.",
//       };
//     }
//   }

//   /**
//    * Validate form fields
//    */
//   validate(formData) {
//     const { name, email, message } = formData;

//     if (!name || name.trim().length < 2) {
//       return { isValid: false, message: "Please enter a valid name (min 2 characters)." };
//     }

//     if (!email || !this.isValidEmail(email)) {
//       return { isValid: false, message: "Please enter a valid email address." };
//     }

//     if (!message || message.trim().length < 10) {
//       return { isValid: false, message: "Message should be at least 10 characters." };
//     }

//     return { isValid: true, message: "Valid" };
//   }

//   /**
//    * Email regex validation
//    */
//   isValidEmail(email) {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   }

//   /**
//    * Update EmailJS config dynamically if needed
//    */
//   updateConfig(serviceId, templateId, publicKey) {
//     this.config = { serviceId, templateId, publicKey };
//   }
// }

// // Export class + helper function
// export default EmailService;

// export const sendContactEmail = async (formData) => {
//   const emailService = new EmailService();
//   return await emailService.sendEmail(formData);
// };
