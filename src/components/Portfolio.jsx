import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const portfolioItems = [
    {
      category: "Business Materials",
      title: "Corporate Identity Package",
      description:
        "Complete branding solution including business cards, letterheads, and folders for a tech startup.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&auto=format&q=80",
      color: "from-[#1e3a8a] to-[#0ea5e9]",
    },
    {
      category: "Large Format",
      title: "Trade Show Banners",
      description:
        "Eye-catching banners and displays for international trade show exhibitions.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&auto=format&q=80",
      color: "from-[#e91e63] to-[#ec4899]",
    },
    {
      category: "Marketing Materials",
      title: "Product Catalogs",
      description:
        "High-quality product catalogs and brochures for retail and wholesale clients.",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&auto=format&q=80",
      color: "from-[#fbbf24] to-[#f59e0b]",
    },
    {
      category: "Specialty Printing",
      title: "Custom Packaging",
      description:
        "Creative packaging solutions with premium finishes and custom designs.",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop&auto=format&q=80",
      color: "from-[#ea580c] to-[#dc2626]",
    },
    {
      category: "Promotional Items",
      title: "Event Materials",
      description:
        "Comprehensive event printing including programs, tickets, and signage.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop&auto=format&q=80",
      color: "from-[#06b6d4] to-[#0891b2]",
    },
    {
      category: "Digital Solutions",
      title: "LED Displays & Signage",
      description:
        "Modern digital displays and LED solutions for retail and corporate environments.",
      image:
        "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop&auto=format&q=80",
      color: "from-[#8b5cf6] to-[#7c3aed]",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-6"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#e91e63] via-[#1e3a8a] to-[#fbbf24] bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Explore our diverse range of printing projects and creative
            solutions. From small business cards to large-scale advertising
            campaigns, we deliver exceptional results across all mediums.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-4"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-block px-3 py-1 bg-gradient-to-r ${item.color} text-white text-sm font-medium rounded-full`}
                  >
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-[#1e3a8a] mb-3 group-hover:text-[#e91e63] transition-colors"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Other Creations Section */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3
              className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-4"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Other Creative Solutions
            </h3>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Beyond traditional printing, we also offer digital solutions and
              specialized services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "LED Displays", icon: "💡", color: "bg-[#fbbf24]" },
              { title: "Digital Signage", icon: "📺", color: "bg-[#1e3a8a]" },
              { title: "Vehicle Wraps", icon: "🚗", color: "bg-[#e91e63]" },
              { title: "Window Graphics", icon: "🪟", color: "bg-[#ea580c]" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4`}
                >
                  {item.icon}
                </div>
                <h4
                  className="font-semibold text-[#1e3a8a]"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            
            <a href="/contact">
            <button className="px-8 py-4 border-2 border-[#1e3a8a] text-[#1e3a8a] font-semibold rounded-lg hover:bg-[#1e3a8a] hover:text-white transition-colors duration-200">
              <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Start Your Project
              </span>
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
