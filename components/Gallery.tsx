'use client'

import { motion } from 'framer-motion'

const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=800&q=80',
    title: 'Moving Trucks',
    description: 'Fully equipped fleet ready for any move',
  },
  {
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80',
    title: 'Packaging Services',
    description: 'Professional packing for fragile items',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    title: 'Residential Moves',
    description: 'Moving families across Canada',
  },
  {
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    title: 'Commercial Moves',
    description: 'Expert business relocations',
  },
  {
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    title: 'Careful Handling',
    description: 'Your belongings in safe hands',
  },
  {
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    title: 'Storage Solutions',
    description: 'Secure storage facilities',
  },
]

export default function Gallery() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Work in <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            See why thousands of customers trust us with their moves across Canada
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative h-48 sm:h-56 md:h-72 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all cursor-pointer group border-2 border-white/30 backdrop-blur-sm"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${item.image}')`
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-200 text-xs sm:text-sm">{item.description}</p>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-bold text-lg sm:text-xl backdrop-blur-sm bg-white/10 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl">
                    View Details
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          <div className="text-center glass-card rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl border border-white/40 hover:border-primary/50 transition-all hover:scale-105">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-blue-600 bg-clip-text text-transparent mb-1 sm:mb-2">1000+</div>
            <div className="text-gray-700 font-semibold text-sm sm:text-base">Successful Moves</div>
          </div>
          <div className="text-center glass-card rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl border border-white/40 hover:border-primary/50 transition-all hover:scale-105">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-blue-600 bg-clip-text text-transparent mb-1 sm:mb-2">2+</div>
            <div className="text-gray-700 font-semibold text-sm sm:text-base">Years Experience</div>
          </div>
          <div className="text-center glass-card rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl border border-white/40 hover:border-primary/50 transition-all hover:scale-105">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-blue-600 bg-clip-text text-transparent mb-1 sm:mb-2">4.9</div>
            <div className="text-gray-700 font-semibold text-sm sm:text-base">Average Rating</div>
          </div>
          <div className="text-center glass-card rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl border border-white/40 hover:border-primary/50 transition-all hover:scale-105">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-blue-600 bg-clip-text text-transparent mb-1 sm:mb-2">50+</div>
            <div className="text-gray-600 font-semibold text-sm sm:text-base">Team Members</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}