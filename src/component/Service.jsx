'use client'

import { motion } from 'framer-motion'
import {
  Database,
  Lock,
  Zap,
  Search,
  FileText,
  BarChart3,
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Database,
      title: 'Data Recovery',
      description: 'Advanced recovery techniques to retrieve deleted or corrupted data from any storage device.',
    },
    {
      icon: Lock,
      title: 'Encryption Analysis',
      description: 'Expert decryption and analysis of encrypted files and communications.',
    },
    {
      icon: Zap,
      title: 'Mobile Forensics',
      description: 'Comprehensive analysis of smartphones, tablets, and IoT devices.',
    },
    {
      icon: Search,
      title: 'Malware Investigation',
      description: 'Identify and analyze malicious code and suspicious file behavior.',
    },
    {
      icon: FileText,
      title: 'Document Analysis',
      description: 'Metadata extraction and document authenticity verification.',
    },
    {
      icon: BarChart3,
      title: 'Expert Reports',
      description: 'Court-admissible forensic reports with detailed findings and conclusions.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#207eff]/5 rounded-full blur-3xl"></div>

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
            Comprehensive Forensic
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#207eff] to-[#0a5cdb]">
              Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We offer a complete suite of digital forensic services tailored to meet the most rigorous investigative standards.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(32, 126, 255, 0.15)' }}
                className="group p-8 rounded-xl border border-[#207eff]/20 bg-white hover:border-[#207eff]/40 transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-lg bg-[#207eff]/10 flex items-center justify-center mb-4 group-hover:bg-[#207eff] group-hover:text-white transition-all duration-300">
                  <Icon size={28} className="text-[#207eff] group-hover:text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#207eff] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className="h-1 bg-gradient-to-r from-[#207eff] to-transparent rounded-full"
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mt-16"
        >
          <button className="btn-primary text-lg">
            Explore All Services
          </button>
        </motion.div>
      </div>
    </section>
  )
}