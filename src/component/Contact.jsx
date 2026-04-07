'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { RiMapPin2Line, RiMailSendLine, RiPhoneLine, RiTimeLine, RiArrowRightLine, RiCheckDoubleLine } from 'react-icons/ri'

const CONTACT_IMAGE = 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&q=80'

const contactDetails = [
  { icon: RiMapPin2Line,  label: 'Headquarters',      value: '1200 Science Blvd, Suite 400\nNew York, NY 10019' },
  { icon: RiMailSendLine, label: 'Secure Email',       value: 'cases@forensicore.com' },
  { icon: RiPhoneLine,    label: '24/7 Emergency Line',value: '+1 (800) 555-FSCI' },
  { icon: RiTimeLine,     label: 'Lab Hours',          value: '24 / 7 / 365\nEmergency services always available' },
]

const badges = ['ISO 17025', 'ASCLD', 'FBI CODIS', 'SWGMAT', 'ILAC']

export default function Contact() {
  const [form, setForm] = useState({ name: '', org: '', email: '', type: '', message: '' })
  const [sent, setSent] = useState(false)
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => { e.preventDefault(); if (!form.name || !form.email || !form.message) return; setSent(true) }

  const inputClass = {
    width: '100%',
    border: '1px solid rgba(32,126,255,0.18)',
    borderRadius: '10px',
    padding: '12px 16px',
    outline: 'none',
    fontSize: '14px',
    fontFamily: "'Georgia', serif",
    color: '#1a1a1a',
    background: '#fff',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  }

  return (
    <section
      id="contact"
      className="py-28 bg-white relative overflow-hidden"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(32,126,255,0.2), transparent)' }} />

      {/* BG image strip */}
      <div className="absolute top-0 left-0 w-1/3 h-full overflow-hidden opacity-[0.04]">
        <img src={CONTACT_IMAGE} alt="" className="w-full h-full object-cover" />
      </div>

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
            Work With Us
          </span>
          <h2 className="text-5xl font-normal text-gray-900 leading-tight">
            Submit a <em style={{ color: '#207eff' }}>Case</em>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            All submissions are confidential and encrypted. Our intake team responds within 2 business hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* ── Left info ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactDetails.map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-5 rounded-xl border transition-all duration-300"
                style={{ border: '1px solid rgba(32,126,255,0.12)', background: '#fff' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(32,126,255,0.08)', border: '1px solid rgba(32,126,255,0.15)' }}
                >
                  <Icon size={18} style={{ color: '#207eff' }} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "'Courier New', monospace", color: '#207eff' }}>{label}</p>
                  <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{value}</p>
                </div>
              </motion.div>
            ))}

            {/* Accreditations */}
            <div className="p-5 rounded-xl" style={{ background: 'rgba(32,126,255,0.04)', border: '1px solid rgba(32,126,255,0.12)' }}>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "'Courier New', monospace", color: '#207eff' }}>Accreditations</p>
              <div className="flex flex-wrap gap-2">
                {badges.map(b => (
                  <span
                    key={b}
                    className="text-xs px-3 py-1.5 rounded-full"
                    style={{ fontFamily: "'Courier New', monospace", color: '#207eff', background: '#fff', border: '1px solid rgba(32,126,255,0.25)' }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-2xl p-8 bg-white"
            style={{ border: '1px solid rgba(32,126,255,0.15)', boxShadow: '0 8px 40px rgba(32,126,255,0.07)' }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ background: 'rgba(32,126,255,0.1)', border: '1px solid rgba(32,126,255,0.25)' }}
                >
                  <RiCheckDoubleLine size={28} style={{ color: '#207eff' }} />
                </div>
                <h3 className="text-2xl font-normal text-gray-900 mb-3">Submission Received</h3>
                <p className="text-gray-500 leading-relaxed max-w-sm text-sm">
                  Your case has been securely submitted. Our intake team will contact you within 2 business hours.
                </p>
                <p className="text-xs mt-5" style={{ fontFamily: "'Courier New', monospace", color: '#207eff' }}>
                  Reference: FC-{Math.floor(Math.random() * 9000) + 1000}
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2" style={{ fontFamily: "'Courier New', monospace" }}>Full Name *</label>
                    <input name="name" value={form.name} onChange={handle} placeholder="Dr. Jane Smith" required style={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2" style={{ fontFamily: "'Courier New', monospace" }}>Organisation</label>
                    <input name="org" value={form.org} onChange={handle} placeholder="Law firm / Agency" style={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2" style={{ fontFamily: "'Courier New', monospace" }}>Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handle} placeholder="you@example.com" required style={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2" style={{ fontFamily: "'Courier New', monospace" }}>Analysis Type</label>
                    <select name="type" value={form.type} onChange={handle} style={{ ...inputClass, color: form.type ? '#1a1a1a' : '#9ca3af' }}>
                      <option value="">Select service...</option>
                      {['DNA Profiling', 'Digital Forensics', 'Toxicology', 'Trace Evidence', 'Fingerprint Analysis', 'Ballistics', 'Other'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2" style={{ fontFamily: "'Courier New', monospace" }}>Case Details *</label>
                  <textarea
                    name="message" value={form.message} onChange={handle} required rows={5}
                    placeholder="Briefly describe the nature of your case, evidence available, and urgency level..."
                    style={{ ...inputClass, resize: 'none' }}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: 'rgba(32,126,255,0.08)', border: '1px solid rgba(32,126,255,0.3)' }}>
                    <RiCheckDoubleLine size={11} style={{ color: '#207eff' }} />
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    All submissions are protected under attorney-client and laboratory confidentiality protocols. Your information will never be shared.
                  </p>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 28px rgba(32,126,255,0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 rounded-xl text-white flex items-center justify-center gap-2 font-semibold"
                  style={{ background: '#207eff', fontFamily: "'Courier New', monospace", fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                >
                  Submit Case for Review <RiArrowRightLine size={16} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}