'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Calculator } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-primary/80 to-blue-600/90"></div>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl"
          >
            <span className="block mb-2">Your Trusted</span>
            <span className="bg-gradient-to-r from-white via-blue-50 to-white bg-clip-text text-transparent">
              Moving Partners in Canada
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto font-medium"
          >
            Professional moving services you can trust. Experience the difference with A One Movers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group glass-card text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-3xl hover:scale-110 transition-all shadow-2xl flex items-center gap-2"
            >
              Book Your Move
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </a>

            <a
              href="#contact"
              className="group glass text-white border border-white/40 px-10 py-5 rounded-2xl font-bold text-lg hover:border-white/60 hover:scale-110 transition-all shadow-2xl hover:shadow-3xl flex items-center gap-2 backdrop-blur-xl"
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
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="glass rounded-3xl p-8 border border-white/30 shadow-2xl hover:border-white/50 transition-all hover:scale-105">
              <div className="text-5xl font-bold text-white mb-3">500+</div>
              <div className="text-blue-100 font-semibold">Happy Moves</div>
            </div>
            <div className="glass rounded-3xl p-8 border border-white/30 shadow-2xl hover:border-white/50 transition-all hover:scale-105">
              <div className="text-5xl font-bold text-white mb-3">98%</div>
              <div className="text-blue-100 font-semibold">Satisfaction</div>
            </div>
            <div className="glass rounded-3xl p-8 border border-white/30 shadow-2xl hover:border-white/50 transition-all hover:scale-105">
              <div className="text-5xl font-bold text-white mb-3">24/7</div>
              <div className="text-blue-100 font-semibold">Support</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}