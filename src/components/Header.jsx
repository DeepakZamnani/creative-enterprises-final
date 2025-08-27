import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "../assets/ce_logo.png";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-100 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
             <div>
      <img src={logo} alt="My local file" className="w-8 h-8 rounded-xl" />
    </div>
            <div className="ml-3">
              <h1
                className="text-xl font-bold text-[#1e3a8a]"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Creative Enterprises
              </h1>
              <p
                className="text-sm text-[#ea580c] font-semibold"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                TOTAL PRINTING SOLUTION
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-[#1e3a8a] font-medium text-sm transition-colors duration-200"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone size={16} />
              <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                +91 7709278247
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail size={16} />
              <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                sales@creativeprints.in
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-[#1e3a8a] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-[#1e3a8a] font-medium transition-colors"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-6 pt-4 border-t border-gray-100 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone size={16} />
                <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  +91 7709278247
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail size={16} />
                <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  sales@creativeprints.in
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
