'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="min-h-screen pt-32 pb-24 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#207eff]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#207eff]/5 rounded-full blur-3xl"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-container relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#207eff]/10 border border-[#207eff]/30 rounded-full"
              >
                <Shield size={18} className="text-[#207eff]" />
                <span className="text-sm font-semibold text-[#207eff]">
                  Precision. Integrity. Evidence.
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="block">Digital</span>
                <span className="block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#207eff] via-[#207eff] to-[#0a5cdb]">
                    Investigation
                  </span>
                </span>
                <span className="block">Reimagined</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Advanced forensic analysis and digital investigation services for law enforcement agencies, enterprises, and legal professionals seeking uncompromising accuracy.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(32, 126, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2 text-lg"
              >
                Start Investigation <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline flex items-center justify-center gap-2 text-lg"
              >
                View Documentation
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200"
            >
              {[
                { number: '500+', label: 'Cases Analyzed' },
                { number: '99.9%', label: 'Accuracy Rate' },
                { number: '24/7', label: 'Support' },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="text-2xl font-bold text-[#207eff]">{stat.number}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            variants={floatingVariants}
            className="relative h-96 md:h-full"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#207eff]/20 to-[#207eff]/5 border border-[#207eff]/30 flex items-center justify-center group hover:border-[#207eff]/60 transition-colors"
            >
              <div className="text-center space-y-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, linear: true }}
                  className="w-32 h-32 mx-auto rounded-full border-4 border-[#207eff] border-t-transparent"
                />
                <p className="text-sm font-semibold text-gray-700">
                  Advanced Scanning Engine
                </p>
              </div>
            </motion.div>

            {/* Floating cards */}
            <motion.div
              animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-20 -right-10 w-40 h-32 bg-white rounded-xl shadow-xl border border-[#207eff]/20 p-4 glass-effect"
            >
              <p className="text-xs font-semibold text-[#207eff] mb-2">DATA INTEGRITY</p>
              <p className="text-sm font-bold text-gray-900">100% Chain of Custody</p>
            </motion.div>

            <motion.div
              animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-10 -left-5 w-40 h-32 bg-white rounded-xl shadow-xl border border-[#207eff]/20 p-4 glass-effect"
            >
              <p className="text-xs font-semibold text-[#207eff] mb-2">CERTIFICATION</p>
              <p className="text-sm font-bold text-gray-900">ISO 27001 Approved</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}