import { Star, Users, Award } from "lucide-react";

export default function Clients() {
  // Sample client logos/names - in real implementation these would be actual client logos
  const clients = [
    { name: "TechCorp", logo: "TC" },
    { name: "Global Solutions", logo: "GS" },
    { name: "Creative Agency", logo: "CA" },
    { name: "Business Plus", logo: "BP" },
    { name: "Modern Retail", logo: "MR" },
    { name: "Digital Systems", logo: "DS" },
    { name: "Smart Industries", logo: "SI" },
    { name: "Future Brands", logo: "FB" }
  ];

  const stats = [
    {
      icon: <Users size={32} />,
      number: "500+",
      label: "Happy Clients",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Star size={32} />,
      number: "10K+",
      label: "Projects Completed",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Award size={32} />,
      number: "15+",
      label: "Years Experience",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="clients" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Trusted by{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Leading Brands
            </span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            We've had the privilege of working with amazing companies across various industries, 
            helping them bring their visions to life through exceptional printing solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 text-white`}>
                {stat.icon}
              </div>
              <div
                className="text-4xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {stat.number}
              </div>
              <p
                className="text-gray-600 font-medium"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Client Logos Grid */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <h3
            className="text-2xl font-bold text-gray-900 text-center mb-8"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Our Relations
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group flex items-center justify-center"
              >
                {/* Logo placeholder - in real implementation, these would be actual client logos */}
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:from-pink-100 group-hover:to-purple-100 transition-all duration-300 shadow-md group-hover:shadow-lg">
                  <span
                    className="text-gray-600 font-bold text-lg group-hover:text-gray-800 transition-colors"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {client.logo}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
              <span
                className="ml-2 text-gray-700 font-medium"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                4.9/5 Client Satisfaction
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span
                className="text-gray-700 font-medium"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                99% On-Time Delivery
              </span>
            </div>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            "Creative Enterprises has been our trusted printing partner for over 5 years. Their attention to detail, 
            quality, and customer service is unmatched. They consistently deliver exceptional results on time and within budget."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>JD</span>
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                John Doe
              </div>
              <div className="text-gray-600" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                CEO, TechCorp Solutions
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200">
            <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Join Our Happy Clients</span>
          </button>
        </div>
      </div>
    </section>
  );
}