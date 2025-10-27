'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-space font-bold text-slate-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to make your move? Contact us today for a free quote
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-3xl p-8 shadow-premium-lg border border-slate-200/50">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-8 bg-gradient-to-b from-slate-700 to-slate-900 rounded-full"></div>
                <h3 className="text-2xl font-space font-bold text-slate-900">
                  Request a Free Quote
                </h3>
              </div>
              <p className="text-slate-600 mb-6 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-700 focus:border-slate-700 transition-all bg-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-700 focus:border-slate-700 transition-all bg-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-700 focus:border-slate-700 transition-all bg-white"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-700 focus:border-slate-700 transition-all bg-white"
                    placeholder="Tell us about your moving needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full glass-card-dark text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all shadow-premium hover:shadow-premium-lg hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Send Message
                  <ChevronRight size={22} />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Business Info */}
            <div className="glass-card rounded-3xl p-8 shadow-premium-lg border border-slate-200/50">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-8 bg-gradient-to-b from-slate-700 to-slate-900 rounded-full"></div>
                <h3 className="text-2xl font-space font-bold text-slate-900">
                  Contact Information
                </h3>
              </div>
              <p className="text-slate-600 mb-6 text-sm">Reach out to us through any of these channels.</p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <Phone className="text-slate-700" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                    <a href="tel:+16475124570" className="text-slate-600 hover:text-slate-900 transition-colors">
                      (647) 512-4570
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <Mail className="text-slate-700" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <a href="mailto:info@aonemovers.ca" className="text-slate-600 hover:text-slate-900 transition-colors">
                      info@aonemovers.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <MapPin className="text-slate-700" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Address</h4>
                    <p className="text-slate-600">
                      9455 Mississauga Rd<br />
                      Brampton, ON L6X 0Z8<br />
                      Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <Clock className="text-slate-700" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600">
                      Monday - Friday: 8:00 AM - 8:00 PM<br />
                      Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="glass-card rounded-3xl overflow-hidden shadow-premium-lg border border-slate-200/50">
              <iframe
                src="https://www.google.com/maps?q=9455+Mississauga+Rd,+Brampton,+ON+L6X+0Z8,+Canada&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
