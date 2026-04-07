'use client'

import { motion } from 'framer-motion'
import {
  RiDatabase2Line,
  RiLockPasswordLine,
  RiSmartphoneLine,
  RiVirusLine,
  RiFileTextLine,
  RiBarChartLine,
} from 'react-icons/ri'

const SERVICES_IMAGE = 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&q=80'

const services = [
  { icon: RiDatabase2Line, title: 'Data Recovery', description: 'Advanced recovery techniques to retrieve deleted or corrupted data from any storage device with full integrity preservation.' },
  { icon: RiLockPasswordLine, title: 'Encryption Analysis', description: 'Expert decryption and analysis of encrypted files and communications for legal and investigative purposes.' },
  { icon: RiSmartphoneLine, title: 'Mobile Forensics', description: 'Comprehensive examination of smartphones, tablets, and IoT devices including app data and communication logs.' },
  { icon: RiVirusLine, title: 'Malware Investigation', description: 'Identify, isolate, and analyze malicious code and suspicious behaviour across endpoints and networks.' },
  { icon: RiFileTextLine, title: 'Document Analysis', description: 'Metadata extraction, document authenticity verification, and digital signature validation.' },
  { icon: RiBarChartLine, title: 'Expert Reports', description: 'Court-admissible forensic reports with detailed findings, chain-of-custody documentation, and expert testimony.' },
]

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}
const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 bg-white relative overflow-hidden"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(32,126,255,0.25), transparent)' }} />

      {/* Background image strip */}
      <div className="absolute top-0 right-0 w-1/2 h-72 overflow-hidden opacity-[0.06]">
        <img src={SERVICES_IMAGE} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span
            className="inline-block mb-5 text-xs uppercase tracking-[0.28em] px-4 py-2 rounded-full border"
            style={{ fontFamily: "'Courier New', monospace", color: '#207eff', borderColor: 'rgba(32,126,255,0.3)', background: 'rgba(32,126,255,0.05)' }}
          >
            What We Do
          </span>
          <h2 className="text-5xl font-normal text-gray-900 leading-tight mb-5">
            Comprehensive Forensic <br />
            <em style={{ color: '#207eff' }}>Services</em>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            A complete suite of digital forensic services tailored to meet the most rigorous investigative and judicial standards.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={card}
              whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(32,126,255,0.12)' }}
              className="group relative p-8 rounded-2xl border bg-white cursor-pointer transition-all duration-300 overflow-hidden"
              style={{ borderColor: 'rgba(32,126,255,0.15)' }}
            >
              {/* Hover fill */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(32,126,255,0.03) 0%, transparent 60%)' }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                style={{ background: 'rgba(32,126,255,0.08)', border: '1px solid rgba(32,126,255,0.15)' }}
              >
                <Icon size={26} style={{ color: '#207eff' }} />
              </div>

              <h3 className="text-xl font-normal text-gray-900 mb-3 group-hover:text-[#207eff] transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {description}
              </p>

              {/* Animated underline */}
              <div className="h-px w-0 group-hover:w-full transition-all duration-500 rounded-full" style={{ background: 'linear-gradient(to right, #207eff, transparent)' }} />

              {/* Corner tag */}
              <div
                className="absolute top-4 right-4 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ fontFamily: "'Courier New', monospace", color: '#207eff' }}
              >
                →
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom image banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mt-20 relative rounded-2xl overflow-hidden h-56"
          style={{ border: '1px solid rgba(32,126,255,0.15)' }}
        >
          <img src={SERVICES_IMAGE} alt="Forensic laboratory" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)' }} />
          <div className="absolute inset-0 flex flex-col justify-center px-12">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-3" style={{ fontFamily: "'Courier New', monospace" }}>Ready to begin?</p>
            <h3 className="text-3xl font-normal text-white mb-6">Every case starts with <em>one call.</em></h3>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="self-start px-7 py-3 rounded-lg text-white text-xs uppercase tracking-widest"
              style={{ background: '#207eff', fontFamily: "'Courier New', monospace" }}
            >
              Explore All Services
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}