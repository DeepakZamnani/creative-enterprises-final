import { Eye, Target, Lightbulb, CheckCircle, Star, Award } from "lucide-react";

export default function About() {
  const visionPoints = [
    {
      icon: <Eye size={28} />,
      title: "Vision",
      description:
        "To be the leading printing company that transforms ideas into stunning visual realities, setting new standards in quality and creativity.",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100"
    },
    {
      icon: <Target size={28} />,
      title: "Accurate",
      description:
        "Precision in every detail, from color matching to finishing touches. We ensure your vision is executed exactly as intended.",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      hoverColor: "hover:bg-amber-100"
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Creative",
      description:
        "Innovation drives our approach. We bring fresh perspectives and creative solutions to every printing challenge.",
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100"
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Effective",
      description:
        "Results that matter. Our printing solutions deliver impact, helping your business achieve its marketing and branding goals.",
      color: "from-rose-600 to-rose-700",
      bgColor: "bg-rose-50",
      hoverColor: "hover:bg-rose-100"
    },
  ];

  const qualityFeatures = [
    "High-resolution digital & offset printing",
    "Premium paper and material selection",
    "Color accuracy and consistency guarantee",
    "Professional finishing and binding options",
    "Fast turnaround with quality assurance",
    "Eco-friendly printing solutions"
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Happy Clients" },
    { number: "99.9%", label: "Quality Rate" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star size={16} />
            About Our Company
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-rose-600 via-blue-600 to-amber-500 bg-clip-text text-transparent">
              Creative Enterprises
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Your trusted partner for comprehensive printing solutions. With cutting-edge technology 
            and unmatched expertise, we transform your creative vision into tangible reality. 
            From business essentials to large-format displays, every project receives our 
            signature touch of excellence.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 group-hover:shadow-lg transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {visionPoints.map((item, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:-translate-y-3 ${item.hoverColor}`}
            >
              {/* Icon Container */}
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl mb-6 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-700 transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Premium Quality Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Enhanced Image Section */}
            <div className="relative group">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                {/* Professional Printing Image */}
                <img
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Professional printing equipment and high-quality prints"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40"></div>
                
                {/* Quality Badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <Award size={20} className="text-blue-600" />
                    <span className="text-sm font-bold text-slate-800">Premium Quality</span>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute bottom-6 right-6 bg-gradient-to-r from-rose-500 to-rose-600 rounded-xl px-4 py-2 shadow-lg">
                  <span className="text-white text-sm font-semibold">ISO Certified</span>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 left-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>

            {/* Right Column - Enhanced Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-rose-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Star size={16} />
                  Premium Service
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                  Excellence in{" "}
                  <span className="bg-gradient-to-r from-rose-600 via-blue-600 to-amber-500 bg-clip-text text-transparent">
                    Every Print
                  </span>
                </h3>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  We leverage state-of-the-art printing technology including professional 
                  Epson and HP printers, premium materials, and rigorous quality control 
                  processes. Our commitment to excellence ensures every project exceeds 
                  expectations and delivers lasting impact.
                </p>
              </div>

              {/* Enhanced Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {qualityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 group cursor-pointer">
                    <div className="w-6 h-6 bg-gradient-to-r from-rose-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              
              <div className="pt-4">
                <a href="/services">
                <button className="bg-gradient-to-r from-blue-600 to-rose-600 hover:from-blue-700 hover:to-rose-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Discover Our Services
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