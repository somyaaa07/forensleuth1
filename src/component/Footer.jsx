'use client'

import { motion } from 'framer-motion'
// import {
//   Github,
//   Linkedin,
//   Mail,

//   MapPin,
//   Microscope,
//   ArrowRight,
// } from 'lucide-react'

export default function Footer() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const socialLinks = [
    { icon: Linkedin, href: '#' },
    { icon: Github, href: '#' },
    { icon: Mail, href: '#' },
  ]

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className="bg-gray-50 border-t border-[#207eff]/10 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#207eff]/5 to-transparent opacity-50"></div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <motion.div
          variants={itemVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="glass-effect p-8 md:p-12 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Stay Updated
                </h3>
                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter for the latest in forensic research, case studies, and industry insights.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex gap-3"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-[#207eff]/20 focus:border-[#207eff] focus:outline-none transition-colors bg-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  {/* <ArrowRight size={20} /> */}
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#207eff]/10">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-[#207eff] text-white">
                  {/* <Microscope size={24} /> */}
                </div>
                <span className="font-bold text-xl text-gray-900">
                  ForensicLab
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Advanced digital forensics and investigation services.
              </p>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                {['Data Recovery', 'Mobile Forensics', 'Malware Analysis', 'Reports'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#207eff] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                {['About', 'Careers', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#207eff] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-600 hover:text-[#207eff] transition-colors cursor-pointer">
               
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 hover:text-[#207eff] transition-colors cursor-pointer">
              
                  <span>hello@forensiclab.io</span>
                </div>
                <div className="flex items-start gap-2 text-gray-600">
                  <span>123 Tech Valley, SF CA 94105</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links & Copyright */}
          <motion.div
            variants={itemVariants}
            className="border-t border-[#207eff]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
          >
         

            <p className="text-sm text-gray-600">
              © 2024 ForensicLab. All rights reserved. | <a href="#" className="hover:text-[#207eff] transition-colors">Privacy</a> | <a href="#" className="hover:text-[#207eff] transition-colors">Terms</a>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}