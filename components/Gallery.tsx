'use client'

import { motion } from 'framer-motion'

const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    title: 'Moving Trucks',
    description: 'Fully equipped fleet ready for any move',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'Packaging Services',
    description: 'Professional packing for fragile items',
  },
  {
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    title: 'Residential Moves',
    description: 'Moving families across Canada',
  },
  {
    image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80',
    title: 'Commercial Moves',
    description: 'Expert business relocations',
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    title: 'Careful Handling',
    description: 'Your belongings in safe hands',
  },
  {
    image: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=800&q=80',
    title: 'Storage Solutions',
    description: 'Secure storage facilities',
  },
]

export default function Gallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work in <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See why thousands of customers trust us with their moves across Canada
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all cursor-pointer group border-2 border-white/30 backdrop-blur-sm"
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
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.description}</p>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-bold text-xl backdrop-blur-sm bg-white/10 px-6 py-3 rounded-xl">
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
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center glass-card rounded-3xl p-8 shadow-2xl border border-white/40 hover:border-primary/50 transition-all hover:scale-105">
            <div className="text-5xl font-bold bg-gradient-to-br from-primary to-blue-600 bg-clip-text text-transparent mb-2">1000+</div>
            <div className="text-gray-700 font-semibold">Successful Moves</div>
          </div>
          <div className="text-center glass-card rounded-3xl p-8 shadow-2xl border border-white/40 hover:border-primary/50 transition-all hover:scale-105">
            <div className="text-5xl font-bold bg-gradient-to-br from-primary to-blue-600 bg-clip-text text-transparent mb-2">15+</div>
            <div className="text-gray-700 font-semibold">Years Experience</div>
          </div>
          <div className="text-center glass-card rounded-3xl p-8 shadow-2xl border border-white/40 hover:border-primary/50 transition-all hover:scale-105">
            <div className="text-5xl font-bold bg-gradient-to-br from-primary to-blue-600 bg-clip-text text-transparent mb-2">4.9</div>
            <div className="text-gray-700 font-semibold">Average Rating</div>
          </div>
          <div className="text-center glass-card rounded-3xl p-8 shadow-2xl border border-white/40 hover:border-primary/50 transition-all hover:scale-105">
            <div className="text-5xl font-bold bg-gradient-to-br from-primary to-blue-600 bg-clip-text text-transparent mb-2">50+</div>
            <div className="text-gray-600 font-semibold">Team Members</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}