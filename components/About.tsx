'use client'

import { motion } from 'framer-motion'
import { Award, Users, TrendingUp, Shield, ChevronRight } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: <Shield className="text-primary" size={32} />,
      title: 'Fully Insured',
      description: 'Comprehensive coverage for your peace of mind',
    },
    {
      icon: <Award className="text-primary" size={32} />,
      title: '15+ Years Experience',
      description: 'Proven track record in the moving industry',
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: 'Expert Team',
      description: 'Trained professionals handling your belongings',
    },
    {
      icon: <TrendingUp className="text-primary" size={32} />,
      title: 'Affordable Rates',
      description: 'Best prices with no hidden fees',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl ring-2 ring-primary/20 group">
              {/* Professional Moving Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600">
                <div className="absolute inset-0 opacity-90" style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                  <Award className="text-primary mx-auto mb-3" size={48} />
                  <h3 className="text-2xl font-bold text-center text-gray-900">Professional Moving Experts</h3>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-100 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">A One Movers?</span>
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              A One Movers is a trusted Canadian moving company providing exceptional 
              local and long-distance relocation services. We combine years of experience 
              with modern moving techniques to make your move seamless.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our professional team treats every move with care and precision, ensuring 
              your belongings arrive safely at your new destination. We're not just movers—we're 
              your moving partners.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-start space-x-3">
                    {feature.icon}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-xl hover:shadow-2xl"
            >
              View Our Services
              <ChevronRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}