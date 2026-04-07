'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiEyeLine, RiArrowRightLine } from 'react-icons/ri'

const galleryItems = [
  { id: 1, category: 'mobile',   title: 'Mobile Device Analysis',    description: 'iOS and Android device deep examination',        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80' },
  { id: 2, category: 'data',     title: 'Data Recovery Project',     description: 'Recovered files from critically damaged storage', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80' },
  { id: 3, category: 'network',  title: 'Network Forensics',         description: 'Traffic analysis and deep packet inspection',    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80' },
  { id: 4, category: 'mobile',   title: 'Application Forensics',     description: 'App data extraction and communication logs',     image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80' },
  { id: 5, category: 'malware',  title: 'Malware Analysis Lab',      description: 'Behaviour mapping and threat attribution',       image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80' },
  { id: 6, category: 'data',     title: 'Encrypted Storage',         description: 'Decryption and court-grade secure analysis',     image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80' },
]

const filters = ['all', 'mobile', 'data', 'network', 'malware']

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.85, transition: { duration: 0.2 } },
}

export default function Gallery() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? galleryItems : galleryItems.filter(i => i.category === active)

  return (
    <section
      id="gallery"
      className="py-28 bg-white relative overflow-hidden"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(32,126,255,0.2), transparent)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(32,126,255,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span
            className="inline-block mb-5 text-xs uppercase tracking-[0.28em] px-4 py-2 rounded-full border"
            style={{ fontFamily: "'Courier New', monospace", color: '#207eff', borderColor: 'rgba(32,126,255,0.3)', background: 'rgba(32,126,255,0.05)' }}
          >
            Portfolio
          </span>
          <h2 className="text-5xl font-normal text-gray-900 leading-tight mb-5">
            Our Work <em style={{ color: '#207eff' }}>In Action</em>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Explore case samples and analysis highlights from our forensic investigations across sectors.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map(f => (
            <motion.button
              key={f}
              onClick={() => setActive(f)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-250"
              style={{
                fontFamily: "'Courier New', monospace",
                background: active === f ? '#207eff' : 'rgba(32,126,255,0.06)',
                color: active === f ? '#fff' : '#207eff',
                border: `1px solid ${active === f ? '#207eff' : 'rgba(32,126,255,0.2)'}`,
                boxShadow: active === f ? '0 4px 20px rgba(32,126,255,0.25)' : 'none',
              }}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={stagger}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map(gi => (
              <motion.div
                key={gi.id}
                variants={item}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ height: '280px', border: '1px solid rgba(32,126,255,0.12)' }}
              >
                <img
                  src={gi.image}
                  alt={gi.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Default overlay */}
                <div className="absolute inset-0 transition-opacity duration-400" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center" style={{ background: 'rgba(32,126,255,0.55)' }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)' }}>
                    <RiEyeLine size={24} className="text-white" />
                  </div>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 transition-transform duration-350">
                  <p
                    className="text-xs uppercase tracking-widest text-white/60 mb-1"
                    style={{ fontFamily: "'Courier New', monospace" }}
                  >{gi.category}</p>
                  <h3 className="text-base font-normal text-white">{gi.title}</h3>
                  <p className="text-xs text-white/70 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {gi.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(32,126,255,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white text-xs uppercase tracking-widest"
            style={{ background: '#207eff', fontFamily: "'Courier New', monospace" }}
          >
            View Complete Gallery <RiArrowRightLine size={16} />
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}