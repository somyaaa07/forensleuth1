'use client'

import { motion } from 'framer-motion'
import { RiShieldCheckLine, RiArrowRightLine, RiSearchEyeLine } from 'react-icons/ri'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=900&q=80'
const CARD_IMAGE  = 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80'

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
}
const rise = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
}
const fadeScale = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-white overflow-hidden relative"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(32,126,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(32,126,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Blue glow blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(32,126,255,0.07) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(32,126,255,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-24 relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT ── */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div variants={rise}>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-[0.25em] border"
                style={{ fontFamily: "'Courier New', monospace", color: '#207eff', borderColor: 'rgba(32,126,255,0.3)', background: 'rgba(32,126,255,0.06)' }}
              >
                <RiShieldCheckLine size={15} />
                Precision · Integrity · Evidence
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={rise} className="space-y-2">
              <h1 className="text-6xl lg:text-7xl font-normal leading-[1.05] text-gray-900">
                Digital
              </h1>
              <h1 className="text-6xl lg:text-7xl font-normal leading-[1.05] italic" style={{ color: '#207eff' }}>
                Investigation
              </h1>
              <h1 className="text-6xl lg:text-7xl font-normal leading-[1.05] text-gray-900">
                Reimagined
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p variants={rise} className="text-lg text-gray-500 leading-relaxed max-w-lg" style={{ fontFamily: "'Georgia', serif" }}>
              Advanced forensic analysis and digital investigation services for law enforcement agencies, enterprises, and legal professionals seeking uncompromising accuracy.
            </motion.p>

            {/* CTA */}
            <motion.div variants={rise} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(32,126,255,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white rounded-lg font-semibold text-base transition-all"
                style={{ background: '#207eff', fontFamily: "'Courier New', monospace", fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                Start Investigation <RiArrowRightLine size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base border transition-all"
                style={{ borderColor: 'rgba(32,126,255,0.35)', color: '#207eff', fontFamily: "'Courier New', monospace", fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                View Documentation
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={rise} className="grid grid-cols-3 gap-6 pt-8" style={{ borderTop: '1px solid rgba(32,126,255,0.15)' }}>
              {[{ n: '500+', l: 'Cases Analyzed' }, { n: '99.9%', l: 'Accuracy Rate' }, { n: '24/7', l: 'Support' }].map(s => (
                <div key={s.l}>
                  <p className="text-3xl font-normal" style={{ color: '#207eff' }}>{s.n}</p>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest" style={{ fontFamily: "'Courier New', monospace" }}>{s.l}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT ── */}
          <motion.div variants={fadeScale} className="relative">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden" style={{ height: '520px', border: '1px solid rgba(32,126,255,0.2)' }}>
              <img src={HERO_IMAGE} alt="Forensic lab" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />

              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl backdrop-blur-md" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <RiSearchEyeLine size={20} className="text-white" />
                  <span className="text-white text-xs uppercase tracking-widest" style={{ fontFamily: "'Courier New', monospace" }}>Advanced Scanning Engine Active</span>
                </div>
              </div>
            </div>

            {/* Floating card – top right */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-8 -right-8 w-48 rounded-xl overflow-hidden shadow-2xl"
              style={{ border: '1px solid rgba(32,126,255,0.2)' }}
            >
              <img src={CARD_IMAGE} alt="Lab analysis" className="w-full h-28 object-cover" />
              <div className="p-3 bg-white">
                <p className="text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "'Courier New', monospace", color: '#207eff' }}>Data Integrity</p>
                <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>100% Chain of Custody</p>
              </div>
            </motion.div>

            {/* Floating card – bottom left */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              className="absolute -bottom-8 -left-8 w-44 rounded-xl bg-white shadow-2xl p-4"
              style={{ border: '1px solid rgba(32,126,255,0.2)' }}
            >
              <p className="text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "'Courier New', monospace", color: '#207eff' }}>Certification</p>
              <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>ISO 27001 Approved</p>
              <div className="mt-2 h-1 rounded-full" style={{ background: 'rgba(32,126,255,0.15)' }}>
                <div className="h-1 rounded-full w-4/5" style={{ background: '#207eff' }} />
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}