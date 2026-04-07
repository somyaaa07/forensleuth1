'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiStarFill, RiDoubleQuotesL, RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'

const testimonials = [
  {
    id: 1,
    name: 'Special Agent Marcus Webb',
    role: 'FBI Cyber Division',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&q=80',
    rating: 5,
    text: 'The forensic team delivered a complete attack chain reconstruction in under three weeks. Their court-ready documentation held up under rigorous cross-examination. An invaluable partner for federal investigations.',
    case: 'Enterprise Data Breach',
  },
  {
    id: 2,
    name: 'Priya Nair',
    role: 'General Counsel, MedTrust Health',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&q=80',
    rating: 5,
    text: 'When ransomware crippled our systems, ForensIQ responded within the hour. They recovered 92% of encrypted patient records and identified the threat actors — all while maintaining strict HIPAA compliance.',
    case: 'Ransomware Response',
  },
  {
    id: 3,
    name: 'James Okafor',
    role: 'CISO, Meridian Financial Group',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    rating: 5,
    text: 'The depth of their mobile forensics capability is unmatched. Fifty-two devices, 18,000 recovered messages, and a fully preserved chain of custody. The evidence was decisive.',
    case: 'Insider Threat Investigation',
  },
  {
    id: 4,
    name: 'Solicitor Claire Hennessey',
    role: 'Partner, Hennessey & Birch LLP',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
    rating: 5,
    text: 'I have worked with forensic experts for 18 years. ForensIQ stands apart — their expert reports are thorough, their methodology is bulletproof, and their witnesses are exceptionally effective in court.',
    case: 'Civil Litigation Support',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)
  const intervalRef = useRef(null)

  const go = (idx) => {
    setDir(idx > current ? 1 : -1)
    setCurrent(idx)
  }
  const next = () => { setDir(1); setCurrent(p => (p + 1) % testimonials.length) }
  const prev = () => { setDir(-1); setCurrent(p => (p - 1 + testimonials.length) % testimonials.length) }

  useEffect(() => {
    intervalRef.current = setInterval(next, 5500)
    return () => clearInterval(intervalRef.current)
  }, [current])

  const t = testimonials[current]

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60, transition: { duration: 0.35, ease: 'easeIn' } }),
  }

  return (
    <section
      id="testimonials"
      className="py-28 relative overflow-hidden"
      style={{ fontFamily: "'Georgia', serif", background: '#fff' }}
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(32,126,255,0.2), transparent)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(32,126,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(32,126,255,0.025) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <span
            className="inline-block mb-5 text-xs uppercase tracking-[0.28em] px-4 py-2 rounded-full border"
            style={{ fontFamily: "'Courier New', monospace", color: '#207eff', borderColor: 'rgba(32,126,255,0.3)', background: 'rgba(32,126,255,0.05)' }}
          >
            Client Voices
          </span>
          <h2 className="text-5xl font-normal text-gray-900 leading-tight">
            Trusted by <em style={{ color: '#207eff' }}>Investigators</em>
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            From federal agencies to law firms — what our clients say about our work.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">

          {/* ── Sidebar avatars ── */}
          <div className="hidden lg:flex lg:col-span-1 flex-col gap-4">
            {testimonials.map((t2, i) => (
              <motion.button
                key={t2.id}
                onClick={() => go(i)}
                whileHover={{ scale: 1.06 }}
                className="relative flex items-center gap-3 rounded-xl p-3 transition-all duration-300 text-left"
                style={{
                  border: `1px solid ${i === current ? 'rgba(32,126,255,0.4)' : 'rgba(32,126,255,0.1)'}`,
                  background: i === current ? 'rgba(32,126,255,0.06)' : 'transparent',
                }}
              >
                <img
                  src={t2.avatar}
                  alt={t2.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  style={{ border: i === current ? '2px solid #207eff' : '2px solid transparent' }}
                />
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-gray-800 truncate" style={{ fontFamily: "'Courier New', monospace" }}>{t2.name.split(' ').slice(-1)[0]}</p>
                  <p className="text-xs text-gray-400 truncate" style={{ fontFamily: "'Courier New', monospace" }}>{t2.role.split(',')[0]}</p>
                </div>
                {i === current && (
                  <div className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full" style={{ background: '#207eff' }} />
                )}
              </motion.button>
            ))}
          </div>

          {/* ── Main card ── */}
          <div className="lg:col-span-4 relative">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(32,126,255,0.15)', minHeight: '340px' }}
            >
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={current}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="p-10 lg:p-12"
                >
                  {/* Quote icon */}
                  <RiDoubleQuotesL size={40} style={{ color: 'rgba(32,126,255,0.2)' }} className="mb-6" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <RiStarFill key={i} size={16} style={{ color: '#207eff' }} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-10 font-normal italic">
                    "{t.text}"
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between flex-wrap gap-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-14 h-14 rounded-full object-cover"
                        style={{ border: '2px solid rgba(32,126,255,0.3)' }}
                      />
                      <div>
                        <p className="font-semibold text-gray-900" style={{ fontFamily: "'Courier New', monospace", fontSize: '13px' }}>{t.name}</p>
                        <p className="text-sm text-gray-500">{t.role}</p>
                      </div>
                    </div>
                    <span
                      className="text-xs uppercase tracking-widest px-4 py-2 rounded-full"
                      style={{ fontFamily: "'Courier New', monospace", color: '#207eff', background: 'rgba(32,126,255,0.08)', border: '1px solid rgba(32,126,255,0.2)' }}
                    >
                      {t.case}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Gradient accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #207eff, rgba(32,126,255,0.1), transparent)' }} />
            </div>

            {/* Nav buttons + dots */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={prev}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                  style={{ border: '1px solid rgba(32,126,255,0.25)', color: '#207eff' }}
                >
                  <RiArrowLeftLine size={18} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={next}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                  style={{ background: '#207eff', color: '#fff' }}
                >
                  <RiArrowRightLine size={18} />
                </motion.button>
              </div>

              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? '24px' : '8px',
                      height: '8px',
                      background: i === current ? '#207eff' : 'rgba(32,126,255,0.2)',
                    }}
                  />
                ))}
              </div>

              <span
                className="text-xs text-gray-400"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}