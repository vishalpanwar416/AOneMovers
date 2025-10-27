'use client'

import { motion } from 'framer-motion'
import { Home, Building, Box, Truck, Clock, Shield, Star } from 'lucide-react'

const services = [
  {
    icon: <Home size={48} />,
    title: 'Residential Moving',
    description: 'Complete home relocation services with care and precision for families across Canada.',
    color: 'from-blue-500 to-blue-600',
    image: 'bg-[url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80")]',
  },
  {
    icon: <Building size={48} />,
    title: 'Commercial Moving',
    description: 'Efficient office and business relocations with minimal downtime for your operations.',
    color: 'from-purple-500 to-purple-600',
    image: 'bg-[url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80")]',
  },
  {
    icon: <Box size={48} />,
    title: 'Packing Services',
    description: 'Professional packing and unpacking services using high-quality materials.',
    color: 'from-green-500 to-green-600',
    image: 'bg-[url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80")]',
  },
  {
    icon: <Truck size={48} />,
    title: 'Long Distance Moving',
    description: 'Reliable cross-province moving services with secure transportation.',
    color: 'from-orange-500 to-orange-600',
    image: 'bg-[url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80")]',
  },
  {
    icon: <Clock size={48} />,
    title: 'Same-Day Moving',
    description: 'Quick and efficient same-day relocation services when you need them fast.',
    color: 'from-red-500 to-red-600',
    image: 'bg-[url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80")]',
  },
  {
    icon: <Shield size={48} />,
    title: 'Storage Solutions',
    description: 'Secure storage facilities for short or long-term storage needs.',
    color: 'from-indigo-500 to-indigo-600',
    image: 'bg-[url("https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=800&q=80")]',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-4 border border-slate-200/50">
            <Star className="text-slate-700" size={20} />
            <span className="text-slate-700 font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-space font-bold text-slate-900 mb-4">
            Comprehensive Moving <span className="text-gradient-primary">Solutions</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tailored services to meet all your relocation needs across Canada
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all cursor-pointer group border border-slate-200/50 hover:border-slate-300/70"
            >
              {/* Image header */}
              <div 
                className={`h-48 bg-cover bg-center relative ${service.image}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-slate-700 to-slate-900 w-20 h-20 rounded-2xl flex items-center justify-center shadow-premium group-hover:scale-110 group-hover:rotate-3 transition-all text-white">
                  {service.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 pt-12">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-slate-700 font-medium hover:gap-3 transition-all hover:text-slate-900"
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
          className="mt-20 text-center"
        >
          <div className="glass-card-dark rounded-3xl p-12 text-white relative overflow-hidden border border-white/10 shadow-premium-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-space font-bold mb-4">Ready to Make Your Move?</h3>
              <p className="text-lg mb-8 text-slate-300">
                Get a free, no-obligation quote today
              </p>
              <a
                href="#contact"
                className="inline-block glass-card text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all shadow-premium hover:shadow-premium-lg hover:scale-105 border border-white/30"
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