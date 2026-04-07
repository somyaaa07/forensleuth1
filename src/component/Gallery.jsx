'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye } from 'lucide-react'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')

  const galleryItems = [
    {
      id: 1,
      category: 'mobile',
      title: 'Mobile Device Analysis',
      description: 'iOS and Android device examination',
      color: 'from-[#207eff] to-[#5b9dff]',
    },
    {
      id: 2,
      category: 'data',
      title: 'Data Recovery Project',
      description: 'Recovered files from damaged storage',
      color: 'from-[#207eff] to-[#0a5cdb]',
    },
    {
      id: 3,
      category: 'network',
      title: 'Network Forensics',
      description: 'Traffic analysis and packet inspection',
      color: 'from-[#5b9dff] to-[#207eff]',
    },
    {
      id: 4,
      category: 'mobile',
      title: 'Application Forensics',
      description: 'App data and communication analysis',
      color: 'from-[#207eff] to-[#5b9dff]',
    },
    {
      id: 5,
      category: 'malware',
      title: 'Malware Analysis Lab',
      description: 'Behavior analysis and threat mapping',
      color: 'from-[#0a5cdb] to-[#207eff]',
    },
    {
      id: 6,
      category: 'data',
      title: 'Encrypted Storage',
      description: 'Decryption and secure analysis',
      color: 'from-[#207eff] to-[#0a5cdb]',
    },
  ]

  const filters = ['all', 'mobile', 'data', 'network', 'malware']

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  }

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#207eff]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Our Work
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#207eff] to-[#0a5cdb]">
              In Action
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explore case studies and analysis samples from our forensic investigations.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold text-sm capitalize transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#207eff] text-white shadow-lg shadow-[#207eff]/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="relative h-72 rounded-xl overflow-hidden bg-gradient-to-br border border-[#207eff]/20 hover:border-[#207eff]/40 transition-all duration-300"
                  style={{
                    backgroundImage: `linear-gradient(135deg, var(--color-start) 0%, var(--color-end) 100%)`,
                    '--color-start': item.color.split(' ')[1],
                    '--color-end': item.color.split(' ')[3],
                  }}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${item.color} opacity-80 group-hover:opacity-90 transition-opacity flex items-center justify-center`}>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
                    >
                      <Eye size={28} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mt-16"
        >
          <button className="btn-primary text-lg">
            View Complete Gallery
          </button>
        </motion.div>
      </div>
    </section>
  )
}