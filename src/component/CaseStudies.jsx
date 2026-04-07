'use client'

import { motion } from 'framer-motion'
import { RiCheckLine, RiArrowRightUpLine, RiTimeLine } from 'react-icons/ri'

const cases = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    title: 'Enterprise Data Breach Investigation',
    client: 'Fortune 500 Tech Company',
    challenge: 'Identify unauthorized access and data exfiltration methods across a globally distributed infrastructure.',
    outcome: 'Recovered full attack chain across 47 servers; three threat actors identified and arrested.',
    metrics: ['127 TB data analyzed', '45 days duration', '99.8% accuracy'],
    timeline: 'Q3 2023',
    tag: 'Network',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80',
    title: 'Mobile Device Evidence Recovery',
    client: 'Federal Law Enforcement',
    challenge: 'Extract admissible evidence from heavily encrypted smartphones held under legal seal.',
    outcome: 'Recovered deleted communications proving coordination; all evidence admitted in court.',
    metrics: ['52 devices processed', '18,000+ messages recovered', '100% chain maintained'],
    timeline: 'Q1 2024',
    tag: 'Mobile',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80',
    title: 'Ransomware Attack Attribution',
    client: 'Healthcare Organization',
    challenge: 'Trace ransomware origin, assess damage scope, and restore operations with minimal disruption.',
    outcome: 'Identified APT group; 92% of encrypted data recovered within 24 hours.',
    metrics: ['4.2 PB data recovered', '14 CVEs traced', '24-hour response'],
    timeline: 'Q2 2024',
    tag: 'Malware',
  },
]

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
}
const slideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function CaseStudies() {
  return (
    <section
      id="cases"
      className="py-28 bg-white relative overflow-hidden"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(32,126,255,0.2), transparent)' }} />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(32,126,255,0.06) 0%, transparent 70%)' }} />

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
            Proven Track Record
          </span>
          <h2 className="text-5xl font-normal text-gray-900 leading-tight mb-5">
            Notable Cases <br />
            <em style={{ color: '#207eff' }}>&amp; Investigations</em>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Successful investigations across diverse sectors and complexity levels, each with measurable, court-verified outcomes.
          </p>
        </motion.div>

        {/* Cases list */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-8"
        >
          {cases.map((c, idx) => (
            <motion.div
              key={c.id}
              variants={slideIn}
              whileHover={{ x: 6, boxShadow: '0 20px 50px rgba(32,126,255,0.1)' }}
              className="group relative rounded-2xl border bg-white overflow-hidden transition-all duration-300 cursor-pointer"
              style={{ borderColor: 'rgba(32,126,255,0.15)' }}
            >
              {/* Index label */}
              <div
                className="absolute top-6 left-6 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white z-10"
                style={{ background: '#207eff', fontFamily: "'Courier New', monospace" }}
              >
                {String(idx + 1).padStart(2, '0')}
              </div>

              <div className="grid md:grid-cols-3">
                {/* Image */}
                <div className="relative h-56 md:h-auto overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, white)' }} />
                  {/* Tag */}
                  <span
                    className="absolute top-4 right-4 text-xs uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ fontFamily: "'Courier New', monospace", color: '#207eff', background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(32,126,255,0.3)' }}
                  >
                    {c.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-8 pl-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-normal text-gray-900 mb-1 group-hover:text-[#207eff] transition-colors duration-300">
                        {c.title}
                      </h3>
                      <p className="text-xs uppercase tracking-widest" style={{ fontFamily: "'Courier New', monospace", color: '#207eff' }}>
                        {c.client}
                      </p>
                    </div>
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                      style={{ background: 'rgba(32,126,255,0.1)' }}
                    >
                      <RiArrowRightUpLine size={20} style={{ color: '#207eff' }} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1" style={{ fontFamily: "'Courier New', monospace" }}>Challenge</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1" style={{ fontFamily: "'Courier New', monospace" }}>Outcome</p>
                      <p className="text-sm text-gray-800 font-semibold leading-relaxed">{c.outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    {c.metrics.map(m => (
                      <div key={m} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(32,126,255,0.12)' }}>
                          <RiCheckLine size={10} style={{ color: '#207eff' }} />
                        </div>
                        <span className="text-xs text-gray-600" style={{ fontFamily: "'Courier New', monospace" }}>{m}</span>
                      </div>
                    ))}
                    <div className="ml-auto flex items-center gap-1 text-xs text-gray-400" style={{ fontFamily: "'Courier New', monospace" }}>
                      <RiTimeLine size={13} style={{ color: '#207eff' }} />
                      {c.timeline}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom progress bar on hover */}
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-700 rounded-full" style={{ background: 'linear-gradient(to right, #207eff, transparent)' }} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(32,126,255,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white text-xs uppercase tracking-widest"
            style={{ background: '#207eff', fontFamily: "'Courier New', monospace" }}
          >
            Request Case Study Details <RiArrowRightUpLine size={16} />
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}