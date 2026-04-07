'use client'

import { useState } from 'react'
import { Menu, X, Microscope } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Cases', href: '#cases' },
    { name: 'Contact', href: '#contact' },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#207eff]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            custom={0}
            variants={itemVariants}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="p-2 rounded-lg bg-[#207eff] text-white group-hover:shadow-lg group-hover:shadow-[#207eff]/50 transition-all">
              <Microscope size={24} />
            </div>
            <span className="font-bold text-xl hidden sm:block bg-gradient-to-r from-[#207eff] to-[#0a5cdb] bg-clip-text text-transparent">
              ForensicLab
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                custom={i + 1}
                variants={itemVariants}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#207eff] transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#207eff] to-transparent group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Button & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <motion.button
              custom={navItems.length + 1}
              variants={itemVariants}
              className="hidden md:block btn-primary text-sm"
            >
              Get Started
            </motion.button>

            {/* Hamburger Menu */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#207eff]/10 transition-colors"
            >
              {isOpen ? (
                <X size={24} className="text-[#207eff]" />
              ) : (
                <Menu size={24} className="text-[#207eff]" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden border-t border-[#207eff]/10 bg-white/98 backdrop-blur-sm"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 8 }}
                  className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-[#207eff] hover:bg-[#207eff]/5 rounded-lg transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 btn-primary"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}