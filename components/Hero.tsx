'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight, Calculator } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const { scrollY } = useScroll()
  const truckY = useTransform(scrollY, [0, 500], [0, -200])
  const truckScale = useTransform(scrollY, [0, 500], [1, 1.25])
  
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80')] bg-cover bg-center"></div>
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-32">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl"
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
            className="text-base sm:text-lg md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto font-medium"
          >
            Professional moving services you can trust. Experience the difference with A One Movers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="#contact"
              className="group glass-card text-primary px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold sm:font-bold text-base sm:text-lg hover:shadow-3xl hover:scale-110 transition-all shadow-2xl flex items-center gap-2"
            >
              Book Your Move
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </a>

            <a
              href="#contact"
              className="group glass text-white border border-white/40 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold sm:font-bold text-base sm:text-lg hover:border-white/60 hover:scale-110 transition-all shadow-2xl hover:shadow-3xl flex items-center gap-2 backdrop-blur-xl"
            >
              <Calculator size={24} className="group-hover:scale-125 transition-transform" />
              Free Quote
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 sm:mt-14 md:mt-16 grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-3xl mx-auto"
          >
            <div className="glass rounded-3xl p-4 sm:p-6 md:p-8 border border-white/30 shadow-2xl hover:border-white/50 transition-all sm:hover:scale-105">
              <div className="text-3xl sm:text-5xl font-bold text-white mb-2 sm:mb-3">500+</div>
              <div className="text-blue-100 text-xs sm:text-sm font-semibold leading-snug">Happy Moves</div>
            </div>
            <div className="glass rounded-3xl p-4 sm:p-6 md:p-8 border border-white/30 shadow-2xl hover:border-white/50 transition-all sm:hover:scale-105">
              <div className="text-3xl sm:text-5xl font-bold text-white mb-2 sm:mb-3">98%</div>
              <div className="text-blue-100 text-xs sm:text-sm font-semibold leading-snug">Satisfaction</div>
            </div>
            <div className="glass rounded-3xl p-4 sm:p-6 md:p-8 border border-white/30 shadow-2xl hover:border-white/50 transition-all sm:hover:scale-105">
              <div className="text-3xl sm:text-5xl font-bold text-white mb-2 sm:mb-3">24/7</div>
              <div className="text-blue-100 text-xs sm:text-sm font-semibold leading-snug">Support</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Moving Truck Indicator with Scroll Animation */}
      <motion.div 
        className="absolute bottom-8 inset-x-0 z-30 hidden sm:flex justify-center"
        style={{ y: truckY, scale: truckScale }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative origin-bottom scale-90 sm:scale-100"
        >
          <Image
            src="/truck.webp"
            alt="Moving Truck"
            width={120}
            height={120}
            className="drop-shadow-2xl brightness-110 filter hue-rotate-[190deg] saturate-150 opacity-95"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  )
}