'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Script from 'next/script'

export default function Reviews() {
  useEffect(() => {
    // Initialize Elfsight widget after component mounts
    if (typeof window !== 'undefined' && (window as any).ElfsightWidget) {
      (window as any).ElfsightWidget.init()
    }
  }, [])

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold text-slate-900 mb-4">
            What Our <span className="text-gradient-primary">Customers</span> Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real feedback from satisfied customers across Canada
          </p>
        </motion.div>

        {/* Reviews Widget Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto glass-card rounded-3xl p-8 shadow-premium-lg border border-slate-200/50 backdrop-blur-2xl"
        >
          {/* Elfsight Google Reviews Widget */}
          <div 
            className="elfsight-app-6b112658-f963-463d-b7ec-b6129642cb91"
            data-elfsight-app-lazy
          ></div>

          {/* Placeholder reviews (shown if widget not configured) */}
          <div className="hidden" id="placeholder-reviews">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah Johnson',
                  location: 'Toronto, ON',
                  rating: 5,
                  text: 'A One Movers made our cross-country move seamless. Professional, courteous, and on-time. Highly recommend!',
                },
                {
                  name: 'Michael Chen',
                  location: 'Vancouver, BC',
                  rating: 5,
                  text: 'Exceptional service from start to finish. The team handled our belongings with care and professionalism.',
                },
                {
                  name: 'Emily Martinez',
                  location: 'Montreal, QC',
                  rating: 5,
                  text: 'Affordable pricing and excellent service. Would definitely use A One Movers again for future moves.',
                },
              ].map((review, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{review.text}</p>
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Elfsight Platform Script */}
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />
    </section>
  )
}
