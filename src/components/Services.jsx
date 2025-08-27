import { ArrowRight, Star, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "PVC Boards & Vinyl Stickers",
      description:
        "High-quality PVC boards and durable vinyl stickers for indoor and outdoor use with weather-resistant materials.",
      color: "from-rose-500 to-pink-500",
      category: "Signage"
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Reflective & Night Glow",
      description:
        "Safety and visibility products with reflective and glow-in-the-dark materials for maximum visibility.",
      color: "from-amber-400 to-yellow-500",
      category: "Safety"
    },
    {
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Banners & Signage",
      description:
        "Large format banners and signage solutions for events, advertising, and promotional campaigns.",
      color: "from-blue-600 to-blue-700",
      category: "Large Format"
    },
    {
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Flyers & Brochures",
      description:
        "Professional marketing materials and promotional flyers to showcase your business effectively.",
      color: "from-orange-500 to-red-500",
      category: "Marketing"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Business Cards",
      description:
        "Premium business cards with various finishes, custom designs, and professional quality materials.",
      color: "from-cyan-500 to-blue-500",
      category: "Corporate"
    },
    {
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Letterheads & Folders",
      description:
        "Corporate letterheads and presentation folders for professional branding and business communication.",
      color: "from-purple-500 to-indigo-500",
      category: "Corporate"
    },
    {
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Packaging Solutions",
      description:
        "Custom packaging design and printing for products, gifts, and retail packaging solutions.",
      color: "from-rose-500 to-blue-600",
      category: "Packaging"
    },
    {
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Notepads & Catalogs",
      description:
        "Custom notepads, catalogs, and printed materials for businesses and promotional purposes.",
      color: "from-amber-400 to-orange-500",
      category: "Publications"
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Calendars",
      description:
        "Wall calendars, desk calendars, and promotional calendar printing with custom designs and layouts.",
      color: "from-orange-500 to-red-500",
      category: "Promotional"
    },
    {
      image: "https://images.unsplash.com/photo-1580169980114-ccd0babfa840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Labels & Tags",
      description: "Product labels, price tags, and custom labeling solutions for inventory and branding.",
      color: "from-cyan-500 to-blue-600",
      category: "Labels"
    },
    {
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Envelopes",
      description: "Custom printed envelopes for corporate communications and personal correspondence.",
      color: "from-amber-400 to-yellow-500",
      category: "Stationery"
    },
    {
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Canvas & Posters",
      description:
        "High-quality canvas prints, posters, and wall art printing for decoration and advertising.",
      color: "from-purple-500 to-pink-500",
      category: "Art Prints"
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles size={16} />
            Our Services
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-rose-600 via-blue-600 to-amber-500 bg-clip-text text-transparent">
              Printing Solutions
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            From small business essentials to large-format displays, we deliver premium quality 
            printing services that bring your vision to life. Discover our complete range of 
            professional printing solutions designed to elevate your brand.
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-transparent hover:-translate-y-3"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 group-hover:from-black/30 group-hover:to-black/50 transition-all duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-lg">
                  <span className="text-xs font-bold text-slate-700">{service.category}</span>
                </div>
                
                {/* Quality Indicator */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Star size={14} className="text-amber-500 fill-current" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4 group-hover:text-slate-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Action Button */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Learn More
                  </span>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <ArrowRight size={14} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-rose-600 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Get a personalized quote for your printing needs. Our experts are ready to help 
                you create stunning printed materials that make an impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span>Request Quote</span>
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                </a>
                <a href="/portfolio">
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  <span>View Portfolio</span>
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}