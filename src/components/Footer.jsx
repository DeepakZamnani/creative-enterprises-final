import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import image from "../assets/ce_logo.png";
import logo from "../assets/ce_logo.png";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    {
      title: "Services",
      links: [
        "Business Cards",
        "Banners & Signage",
        "Brochures & Flyers",
        "Large Format Printing",
        "Packaging Solutions",
        "Specialty Printing",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Our Team",
        "Careers",
        "News & Events",
        "Testimonials",
        "Blog",
      ],
    },
    {
      title: "Support",
      links: [
        "Contact Us",
        "FAQ",
        "File Preparation",
        "Shipping Info",
        "Returns Policy",
        "Terms of Service",
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info - Spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center mb-6">
              <div>
      <img src={logo} alt="My local file" className="w-12 h-12 rounded-xl" />
    </div>
              <div>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Creative Enterprises
                </h3>
                <p
                  className="text-[#ea580c] text-sm font-semibold"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  TOTAL PRINTING SOLUTION
                </p>
              </div>
            </div>

            <p
              className="text-gray-300 leading-relaxed mb-6 max-w-md"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Your trusted partner for premium printing solutions. We bring
              creativity, quality, and precision to every project, helping your
              business make a lasting impression.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gray-400 flex-shrink-0" />
                <span
                  className="text-gray-300 text-sm"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  +91 7709278247
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gray-400 flex-shrink-0" />
                <span
                  className="text-gray-300 text-sm"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  sales@creativeprints.in
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-gray-400 flex-shrink-0 mt-1"
                />
                <span
                  className="text-gray-300 text-sm leading-relaxed"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Shop No. 18, MHADA Commercial Complex, 
                  <br />
                  Near Fire Brigade, Sant Tukaram Nagar, Pimpri, Pune - 411018
                </span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4
                className="font-bold text-white mb-6"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4
                className="font-bold text-white text-xl mb-2"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Stay Updated
              </h4>
              <p
                className="text-gray-400"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Subscribe to our newsletter for printing tips, special offers,
                and latest updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#1e3a8a] focus:outline-none transition-colors"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#e91e63] to-[#ea580c] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 whitespace-nowrap">
                <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  Subscribe
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p
              className="text-gray-400 text-sm"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              © 2024 Creative Enterprises. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span
                className="text-gray-400 text-sm mr-2"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Follow us:
              </span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-to-r from-[#e91e63] to-[#ea580c] rounded-lg flex items-center justify-center text-white hover:opacity-90 transition-opacity duration-200"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e91e63] via-[#1e3a8a] to-[#fbbf24]"></div>
    </footer>
  );
}
