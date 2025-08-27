import { ArrowRight, Printer, Palette, Award, Users, Star, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-rose-50/20 relative flex items-center justify-center px-6 pt-20"
    >
      {/* Enhanced Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated colorful geometric shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-rose-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-blue-600 rotate-45 opacity-20 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-amber-400 rounded-full opacity-15 animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-16 w-14 h-14 bg-orange-500 rotate-12 opacity-20 animate-bounce delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-purple-500 rounded-full opacity-10 animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-green-500 rotate-45 opacity-15 animate-pulse delay-700"></div>

        {/* Abstract curved lines */}
        <svg
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10"
          viewBox="0 0 1000 1000"
          fill="none"
        >
          <path
            d="M100,300 Q300,100 500,300 T900,300 Q700,500 500,400 T100,500"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M200,200 Q400,400 600,200 T1000,400"
            stroke="url(#gradient2)"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="50%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Enhanced Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-rose-100 text-blue-700 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-shadow duration-300">
                <Award size={18} className="mr-2" />
                TOTAL PRINTING SOLUTION
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight mb-8">
              Creative{" "}
              <span className="bg-gradient-to-r from-rose-600 via-blue-600 to-amber-500 bg-clip-text text-transparent">
                Printing
              </span>{" "}
              Solutions for Your Business
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              From business cards to large format banners, we deliver premium
              quality printing services with creative design solutions that make
              your brand stand out in the marketplace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="/contact">
              <button className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-600 to-orange-500 text-white font-bold rounded-xl hover:from-rose-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span>Get Quote</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              </a>
              <a href="/portfolio">
              <button className="group inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span>View Portfolio</span>
              </button>
              </a>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center lg:text-left group">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-300">
                    <Users size={20} className="text-blue-600" />
                  </div>
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    500+
                  </span>
                </div>
                <p className="text-slate-600 font-medium">Happy Clients</p>
              </div>

              <div className="text-center lg:text-left group">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-rose-200 transition-colors duration-300">
                    <Printer size={20} className="text-rose-600" />
                  </div>
                  <span className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent">
                    10K+
                  </span>
                </div>
                <p className="text-slate-600 font-medium">Projects Done</p>
              </div>

              <div className="text-center lg:text-left group">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-amber-200 transition-colors duration-300">
                    <Palette size={20} className="text-amber-600" />
                  </div>
                  <span className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                    50+
                  </span>
                </div>
                <p className="text-slate-600 font-medium">Services</p>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Visual with Real Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main printer image with enhanced styling */}
              <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Professional printing equipment and workspace"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
                
                {/* Professional badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-amber-500" />
                    <span className="text-sm font-bold text-slate-800">Professional Grade</span>
                  </div>
                </div>
              </div>

              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full animate-pulse"></div>
                  <div>
                    <span className="text-sm font-bold text-slate-800 block">Premium Quality</span>
                    <span className="text-xs text-slate-500">ISO Certified</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse delay-300"></div>
                  <div>
                    <span className="text-sm font-bold text-slate-800 block">Fast Delivery</span>
                    <span className="text-xs text-slate-500">24-48 Hours</span>
                  </div>
                </div>
              </div>

              {/* Additional floating quality indicator */}
              <div className="absolute top-1/2 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full shadow-xl hover:scale-110 transition-transform duration-300">
                <CheckCircle size={20} className="text-white" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-8 right-8 w-24 h-24 bg-gradient-to-br from-rose-200 to-rose-300 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -z-10 bottom-8 left-8 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-40 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}