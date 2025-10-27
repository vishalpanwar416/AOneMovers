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
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50">
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
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-premium-lg ring-2 ring-slate-200/50 group">
              {/* Professional Moving Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900">
                <div className="absolute inset-0 opacity-90" style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="glass-card rounded-xl p-6 shadow-premium border border-white/40">
                  <Award className="text-slate-700 mx-auto mb-3" size={48} />
                  <h3 className="text-2xl font-semibold text-center text-slate-900">Professional Moving Experts</h3>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-slate-200/50 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-slate-100 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-space font-bold text-slate-900 mb-6">
              Why Choose <span className="text-gradient-primary">A One Movers?</span>
            </h2>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              A One Movers is a trusted Canadian moving company providing exceptional 
              local and long-distance relocation services. We combine years of experience 
              with modern moving techniques to make your move seamless.
            </p>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
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
                  className="glass-card rounded-2xl p-6 border border-slate-200/50 hover:border-slate-300/70 transition-all group shadow-premium hover:shadow-premium-lg"
                >
                  <div className="flex items-start space-x-3">
                    {feature.icon}
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 glass-card-dark text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all shadow-premium hover:shadow-premium-lg hover:scale-105 border border-white/20"
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