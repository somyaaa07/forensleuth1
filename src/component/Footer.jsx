'use client'

import { motion } from 'framer-motion'
import { RiLinkedinBoxLine, RiGithubLine, RiMailLine, RiMapPinLine, RiArrowRightLine, RiFlashlightLine } from 'react-icons/ri'

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}
const rise = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
      className="bg-white relative overflow-hidden"
      style={{ fontFamily: "'Georgia', serif", borderTop: '1px solid rgba(32,126,255,0.1)' }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(32,126,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(32,126,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Newsletter banner */}
        <motion.div
          variants={rise}
          className="py-16 border-b"
          style={{ borderColor: 'rgba(32,126,255,0.1)' }}
        >
          <div className="rounded-2xl p-8 lg:p-12 grid md:grid-cols-2 gap-8 items-center" style={{ background: 'rgba(32,126,255,0.04)', border: '1px solid rgba(32,126,255,0.12)' }}>
            <div>
              <h3 className="text-3xl font-normal text-gray-900 mb-3">Stay <em style={{ color: '#207eff' }}>Updated</em></h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Subscribe for the latest forensic research, case studies, and industry insights — delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-sm bg-white outline-none transition-colors"
                style={{ border: '1px solid rgba(32,126,255,0.2)', fontFamily: "'Georgia', serif", color: '#1a1a1a' }}
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(32,126,255,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-lg text-white flex items-center gap-2"
                style={{ background: '#207eff', fontFamily: "'Courier New', monospace", fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}
              >
                Subscribe <RiArrowRightLine size={14} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Links grid */}
        <div className="py-16 grid md:grid-cols-4 gap-10 border-b" style={{ borderColor: 'rgba(32,126,255,0.1)' }}>

          {/* Brand */}
          <motion.div variants={rise}>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#207eff' }}>
                <RiFlashlightLine size={18} className="text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900" style={{ fontFamily: "'Courier New', monospace", letterSpacing: '-0.02em' }}>ForensIQ</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              Advanced digital forensics and investigation services — built for accuracy, designed for court.
            </p>
            <div className="flex gap-3">
              {[RiLinkedinBoxLine, RiGithubLine, RiMailLine].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                  style={{ border: '1px solid rgba(32,126,255,0.2)', color: '#207eff' }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={rise}>
            <h4 className="text-xs uppercase tracking-widest text-gray-900 mb-5" style={{ fontFamily: "'Courier New', monospace" }}>Services</h4>
            <ul className="space-y-3">
              {['Data Recovery', 'Mobile Forensics', 'Malware Analysis', 'Encryption Analysis', 'Expert Reports'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-[#207eff] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={rise}>
            <h4 className="text-xs uppercase tracking-widest text-gray-900 mb-5" style={{ fontFamily: "'Courier New', monospace" }}>Company</h4>
            <ul className="space-y-3">
              {['About', 'Case Studies', 'Gallery', 'Careers', 'Blog', 'Contact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-[#207eff] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={rise}>
            <h4 className="text-xs uppercase tracking-widest text-gray-900 mb-5" style={{ fontFamily: "'Courier New', monospace" }}>Contact</h4>
            <div className="space-y-4">
              {[
                { icon: RiMailLine, text: 'hello@forensiclab.io' },
                { icon: RiFlashlightLine, text: '+1 (555) 123-4567' },
                { icon: RiMapPinLine, text: '123 Tech Valley, SF CA 94105' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3 text-sm text-gray-500 hover:text-[#207eff] transition-colors cursor-pointer">
                  <Icon size={15} style={{ color: '#207eff', flexShrink: 0, marginTop: 2 }} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={rise}
          className="py-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-gray-400" style={{ fontFamily: "'Courier New', monospace" }}>
            © 2025 ForensIQ. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
              <a key={l} href="#" className="text-xs text-gray-400 hover:text-[#207eff] transition-colors" style={{ fontFamily: "'Courier New', monospace" }}>
                {l}
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.footer>
  )
}