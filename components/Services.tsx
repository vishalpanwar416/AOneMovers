'use client'

import { motion } from 'framer-motion'
import { Home, Building, Box, Truck, Clock, Shield, Star } from 'lucide-react'

const services = [
  {
    icon: <Home size={48} />,
    title: 'Residential Moving',
    description: 'Complete home relocation services with care and precision for families across Canada.',
    color: 'from-blue-500 to-blue-600',
    image: 'bg-[url("https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80")]',
  },
  {
    icon: <Building size={48} />,
    title: 'Commercial Moving',
    description: 'Efficient office and business relocations with minimal downtime for your operations.',
    color: 'from-purple-500 to-purple-600',
    image: 'bg-[url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80")]',
  },
  {
    icon: <Box size={48} />,
    title: 'Packing Services',
    description: 'Professional packing and unpacking services using high-quality materials.',
    color: 'from-green-500 to-green-600',
    image: 'bg-[url("https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80")]',
  },
  {
    icon: <Truck size={48} />,
    title: 'Long Distance Moving',
    description: 'Reliable cross-province moving services with secure transportation.',
    color: 'from-orange-500 to-orange-600',
    image: 'bg-[url("https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=800&q=80")]',
  },
  {
    icon: <Clock size={48} />,
    title: 'Same-Day Moving',
    description: 'Quick and efficient same-day relocation services when you need them fast.',
    color: 'from-red-500 to-red-600',
    image: 'bg-[url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80")]',
  },
  {
    icon: <Shield size={48} />,
    title: 'Storage Solutions',
    description: 'Secure storage facilities for short or long-term storage needs.',
    color: 'from-indigo-500 to-indigo-600',
    image: 'bg-[url("https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80")]',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Star className="text-primary" size={20} />
            <span className="text-primary font-semibold">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Comprehensive Moving <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored services to meet all your relocation needs across Canada
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all cursor-pointer group border border-white/40 hover:border-primary/50"
            >
              {/* Image header */}
              <div 
                className={`h-40 md:h-48 bg-cover bg-center relative ${service.image}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-br ${service.color} w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                  {service.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 pt-10 md:pt-12">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm md:text-base hover:gap-3 transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-primary via-blue-600 to-blue-800 rounded-3xl p-8 sm:p-10 md:p-12 text-white relative overflow-hidden ring-4 ring-primary/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Make Your Move?</h3>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-95">
                Get a free, no-obligation quote today
              </p>
              <a
                href="#contact"
                className="inline-block bg-white text-primary px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold sm:font-bold text-base sm:text-lg hover:bg-blue-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
              >
                Get Your Free Quote →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}