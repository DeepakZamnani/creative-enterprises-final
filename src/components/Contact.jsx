import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp business number
    const phoneNumber = "918237835709"; // Using the first phone number from your contact info
    const message = "Hi! I'm interested in your printing services. Could you please provide more information?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Address",
      details: ["Shop No. 18,  Sant Tukaram Nagar, Pimpri, Pune - 411018", "MHADA Commercial Complex, Near Fire Brigade,", " Sant Tukaram Nagar, Pimpri, Pune - 411018"],
      color: "from-[#1e3a8a] to-[#3b82f6]",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: ["+91 7709278247", "+91 860030808"],
      color: "from-[#fbbf24] to-[#f59e0b]",
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: ["sales@creativeprints.in"],
      color: "from-[#8b5cf6] to-[#7c3aed]",
    },
  ];

  const services = [
    "Business Cards & Stationery",
    "Banners & Signage",
    "Brochures & Flyers",
    "Packaging Solutions",
    "Large Format Printing",
    "Specialty Printing",
    "Other",
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-6"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-[#e91e63] via-[#1e3a8a] to-[#fbbf24] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Ready to bring your printing project to life? Contact us today for a
            free quote and consultation. We're here to help turn your vision
            into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3
              className="text-2xl font-bold text-[#1e3a8a] mb-8"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Contact Information
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h4
                      className="font-bold text-[#1e3a8a] mb-2"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {info.title}
                    </h4>
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-gray-600 text-sm"
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-64 bg-gray-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
                <p
                  className="text-gray-500 font-medium"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Interactive Map
                </p>
                <p
                  className="text-gray-400 text-sm"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Find us easily with GPS navigation
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3
              className="text-2xl font-bold text-[#1e3a8a] mb-8"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Request a Quote
            </h3>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
              <h4
                className="font-bold text-[#1e3a8a] mb-2"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Quick Response Guarantee
              </h4>
              <p
                className="text-gray-600 text-sm mb-4"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                We typically respond to all inquiries within 2 hours during
                business hours. For urgent projects, please call us directly.
              </p>
              
              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="group flex items-center gap-3 w-full p-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <MessageCircle size={18} />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm font-medium">Connect on WhatsApp</div>
                  <div className="text-xs opacity-90">Get instant support & quotes</div>
                </div>
                <div className="opacity-75 group-hover:opacity-100 transition-opacity">
                  →
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}