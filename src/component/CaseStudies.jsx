'use client'

import { motion } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'

export default function CaseStudies() {
  const cases = [
    {
      id: 1,
      title: 'Enterprise Data Breach Investigation',
      client: 'Fortune 500 Tech Company',
      challenge: 'Identify unauthorized access and data exfiltration methods',
      outcome: 'Recovered attack chain across 47 servers; arrested 3 threat actors',
      metrics: ['127 TB data analyzed', '45 days duration', '99.8% accuracy'],
      timeline: 'Q3 2023',
    },
    {
      id: 2,
      title: 'Mobile Device Evidence Recovery',
      client: 'Federal Law Enforcement',
      challenge: 'Extract evidence from encrypted smartphones under legal hold',
      outcome: 'Recovered deleted communications proving coordination of illegal activity',
      metrics: ['52 devices processed', '18,000+ messages recovered', '100% chain maintained'],
      timeline: 'Q1 2024',
    },
    {
      id: 3,
      title: 'Ransomware Attack Attribution',
      client: 'Healthcare Organization',
      challenge: 'Trace ransomware origin and assess damage scope',
      outcome: 'Identified APT group, recovered 92% of encrypted data',
      metrics: ['4.2 PB data recovered', '14 CVEs traced', '24-hour response'],
      timeline: 'Q2 2024',
    },
  ]

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

  const caseVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="cases" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#207eff]/5 rounded-full blur-3xl"></div>

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
            Notable Cases
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#207eff] to-[#0a5cdb]">
              & Investigations
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Proven track record of successful investigations across diverse sectors and complexity levels.
          </p>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6"
        >
          {cases.map((caseItem) => (
            <motion.div
              key={caseItem.id}
              variants={caseVariants}
              whileHover={{ x: 8 }}
              className="group relative p-8 rounded-xl border border-[#207eff]/20 bg-white hover:border-[#207eff]/40 hover:shadow-xl hover:shadow-[#207eff]/10 transition-all duration-300 cursor-pointer"
            >
              {/* Timeline indicator */}
              <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-[#207eff] border-4 border-white flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#207eff] transition-colors">
                        {caseItem.title}
                      </h3>
                      <p className="text-sm font-semibold text-[#207eff] mb-3">
                        {caseItem.client}
                      </p>
                    </div>
                    <motion.div
                      initial={{ rotate: -45, opacity: 0 }}
                      whileHover={{ rotate: 0, opacity: 1 }}
                      className="w-10 h-10 rounded-lg bg-[#207eff]/10 flex items-center justify-center"
                    >
                      <ArrowUpRight size={20} className="text-[#207eff]" />
                    </motion.div>
                  </div>

                  <div className="space-y-3 text-gray-600">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Challenge
                      </p>
                      <p className="text-base">{caseItem.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Outcome
                      </p>
                      <p className="text-base text-gray-700 font-semibold">{caseItem.outcome}</p>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-4">
                  <div className="space-y-3">
                    {caseItem.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#207eff]/20 flex items-center justify-center">
                          <Check size={14} className="text-[#207eff]" />
                        </div>
                        <p className="text-sm font-medium text-gray-700">{metric}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#207eff]/20">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Timeline
                    </p>
                    <p className="text-sm font-bold text-[#207eff]">{caseItem.timeline}</p>
                  </div>
                </div>
              </div>

              {/* Hover line effect */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#207eff] to-transparent rounded-b-xl"
              />
            </motion.div>
          ))}
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
            Request Case Study Details
          </button>
        </motion.div>
      </div>
    </section>
  )
}