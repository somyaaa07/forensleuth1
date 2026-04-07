'use client';

import { useState } from 'react';

const contactDetails = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2a6 6 0 0 0-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 0 0-6-6z" stroke="#207eff" strokeWidth="1.5" />
        <circle cx="10" cy="8" r="2" stroke="#207eff" strokeWidth="1.5" />
      </svg>
    ),
    label: 'Headquarters',
    value: '1200 Science Blvd, Suite 400\nNew York, NY 10019',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 5h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" stroke="#207eff" strokeWidth="1.5" />
        <path d="M2 6l8 6 8-6" stroke="#207eff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Secure Email',
    value: 'cases@forensicore.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 3h3l1.5 3.5L8 8s1 2 4 4l1.5-1.5L17 12v3c0 1-3 3-6 1S4 8 3 6s1-3 2-3z" stroke="#207eff" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    label: '24/7 Emergency Line',
    value: '+1 (800) 555-FSCI',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="#207eff" strokeWidth="1.5" />
        <path d="M10 6v4l3 2" stroke="#207eff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Lab Hours',
    value: '24 / 7 / 365\nEmergency services always available',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', org: '', email: '', type: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-xs text-primary uppercase tracking-[0.2em] bg-primary/8 border border-primary/20 rounded-full px-4 py-2 mb-5">
            Work With Us
          </span>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-gray-900 mb-5 leading-tight">
            Submit a{' '}
            <span className="text-primary italic">Case</span>
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            All submissions are confidential and encrypted. Our intake team responds within 2 business hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: contact info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactDetails.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-white border border-primary/10 rounded-2xl p-5 hover:border-primary/25 hover:shadow-md hover:shadow-primary/8 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-mono text-xs text-primary uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="font-body text-sm text-gray-700 whitespace-pre-line leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Accreditation badges */}
            <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5">
              <p className="font-mono text-xs text-primary uppercase tracking-wider mb-3">Accreditations</p>
              <div className="flex flex-wrap gap-2">
                {['ISO 17025', 'ASCLD', 'FBI CODIS', 'SWGMAT', 'ILAC'].map((badge) => (
                  <span key={badge} className="font-mono text-xs bg-white border border-primary/25 text-primary rounded-full px-3 py-1.5">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 bg-white border border-primary/12 rounded-3xl p-8 shadow-sm">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center mb-5">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="10" stroke="#207eff" strokeWidth="1.8" />
                    <path d="M9 14l3.5 3.5L19 10" stroke="#207eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Submission Received</h3>
                <p className="font-body text-gray-500 leading-relaxed max-w-sm">
                  Your case has been securely submitted. Our intake team will contact you within 2 business hours.
                </p>
                <p className="font-mono text-xs text-primary mt-4">
                  Reference: FC-{Math.floor(Math.random() * 9000) + 1000}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Dr. Jane Smith"
                      required
                      className="w-full font-body text-sm border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all duration-200 placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">Organization</label>
                    <input
                      name="org"
                      value={form.org}
                      onChange={handleChange}
                      placeholder="Law firm / Agency"
                      className="w-full font-body text-sm border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all duration-200 placeholder:text-gray-300"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full font-body text-sm border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all duration-200 placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">Analysis Type</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full font-body text-sm border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all duration-200 text-gray-500"
                    >
                      <option value="">Select service...</option>
                      <option>DNA Profiling</option>
                      <option>Digital Forensics</option>
                      <option>Toxicology</option>
                      <option>Trace Evidence</option>
                      <option>Fingerprint Analysis</option>
                      <option>Ballistics</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-gray-400 uppercase tracking-wider mb-2">Case Details *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Briefly describe the nature of your case, evidence available, and urgency level..."
                    className="w-full font-body text-sm border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all duration-200 resize-none placeholder:text-gray-300"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded border border-primary/30 bg-primary/5 mt-0.5 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#207eff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="font-body text-xs text-gray-400 leading-relaxed">
                    All submissions are protected under attorney-client and laboratory confidentiality protocols. Your information will never be shared.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl font-body font-semibold text-base flex items-center justify-center gap-2 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] transition-all duration-300"
                >
                  Submit Case for Review
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}