'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Calculator } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95"></div>
        {/* Premium Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-space font-bold text-white mb-6 drop-shadow-2xl tracking-tight"
          >
            <span className="block mb-3 text-slate-200">Your Trusted</span>
            <span className="bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
              Moving Partners in Canada
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Professional moving services you can trust. Experience the difference with A One Movers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#contact"
              className="group glass-card-dark text-white px-12 py-6 rounded-2xl font-semibold text-lg hover:shadow-premium-lg hover:scale-105 transition-all shadow-premium border border-white/20 hover:border-white/30 flex items-center gap-3 backdrop-blur-2xl"
            >
              Book Your Move
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </a>

            <a
              href="#contact"
              className="group glass text-white border border-white/30 px-12 py-6 rounded-2xl font-semibold text-lg hover:border-white/50 hover:scale-105 transition-all shadow-premium hover:shadow-premium-lg flex items-center gap-3 backdrop-blur-2xl"
            >
              <Calculator size={24} className="group-hover:scale-125 transition-transform" />
              Free Quote
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="glass-card-dark rounded-3xl p-8 border border-white/20 shadow-premium hover:border-white/40 transition-all hover:scale-105 group">
              <div className="text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-slate-300 font-medium">Happy Moves</div>
            </div>
            <div className="glass-card-dark rounded-3xl p-8 border border-white/20 shadow-premium hover:border-white/40 transition-all hover:scale-105 group">
              <div className="text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">98%</div>
              <div className="text-slate-300 font-medium">Satisfaction</div>
            </div>
            <div className="glass-card-dark rounded-3xl p-8 border border-white/20 shadow-premium hover:border-white/40 transition-all hover:scale-105 group">
              <div className="text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-slate-300 font-medium">Support</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="glass-light w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-xl shadow-premium">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}