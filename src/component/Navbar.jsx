'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Microscope, ChevronDown, LayoutGrid, Users, FileText, FlaskConical, Dna, MoreHorizontal } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const moreItems = [
  { name: 'Gallery', href: '#gallery', icon: LayoutGrid, sub: 'Browse evidence media', color: 'bg-blue-50 text-blue-600', badge: null },
  { name: 'Collaborators', href: '#collab', icon: Users, sub: 'Team & partners', color: 'bg-purple-50 text-purple-600', badge: 'New' },
  null,
  { name: 'Reports', href: '#reports', icon: FileText, sub: 'Case documentation', color: 'bg-teal-50 text-teal-700', badge: null },
  { name: 'Labs', href: '#labs', icon: FlaskConical, sub: 'Analysis workspaces', color: 'bg-orange-50 text-orange-700', badge: null },
  { name: 'DNA Analysis', href: '#dna', icon: Dna, sub: 'Sequence tools', color: 'bg-amber-50 text-amber-700', badge: null },
]

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Cases', href: '#cases' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [moreOpen, setMoreOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const moreRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-16">

          {/* Logo — far left */}
          <a href="#home" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-9 h-9 rounded-[10px] bg-[#207eff] flex items-center justify-content-center flex items-center justify-center group-hover:opacity-90 transition-opacity">
              <Microscope size={19} className="text-white" />
            </div>
            <span className="text-[17px] font-medium text-[#207eff] tracking-tight hidden sm:block">
              ForensicLab
            </span>
          </a>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Nav links — right aligned */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.name)}
                className={`px-3.5 py-2 text-sm rounded-lg transition-all duration-150 ${
                  active === item.name
                    ? 'bg-[#207eff]/8 text-[#207eff]'
                    : 'text-gray-500 hover:bg-[#207eff]/8 hover:text-[#207eff]'
                }`}
              >
                {item.name}
              </a>
            ))}

            {/* More dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm rounded-lg border transition-all duration-150 ${
                  moreOpen
                    ? 'border-[#207eff]/40 bg-[#207eff]/8 text-[#207eff]'
                    : 'border-gray-200 text-gray-500 hover:border-[#207eff]/40 hover:bg-[#207eff]/8 hover:text-[#207eff]'
                }`}
              >
                <MoreHorizontal size={14} />
                More
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-[calc(100%+10px)] right-0 bg-white border border-gray-100 rounded-xl shadow-lg shadow-black/5 p-1.5 min-w-[210px] z-50"
                  >
                    {moreItems.map((item, i) =>
                      item === null ? (
                        <div key={i} className="h-px bg-gray-100 my-1.5 mx-1.5" />
                      ) : (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => setMoreOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                            <item.icon size={14} />
                          </div>
                          <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                            <span className="text-[13.5px] text-gray-800">{item.name}</span>
                            <span className="text-[11.5px] text-gray-400">{item.sub}</span>
                          </div>
                          {item.badge && (
                            <span className="text-[11px] font-medium px-1.5 py-0.5 rounded bg-[#207eff]/12 text-[#207eff]">
                              {item.badge}
                            </span>
                          )}
                        </a>
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <div className="w-px h-5 bg-gray-200 mx-1" />
         
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden ml-auto p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileOpen ? <X size={22} className="text-[#207eff]" /> : <Menu size={22} className="text-[#207eff]" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100 overflow-hidden"
            >
              <div className="py-3 space-y-0.5">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#207eff] hover:bg-[#207eff]/6 rounded-lg transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-1 border-t border-gray-100 mt-1">
                  {moreItems.filter(Boolean).map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-600 hover:text-[#207eff] hover:bg-[#207eff]/6 rounded-lg transition-colors"
                    >
                      <item.icon size={15} />
                      {item.name}
                      {item.badge && (
                        <span className="text-[11px] px-1.5 py-0.5 rounded bg-[#207eff]/12 text-[#207eff] ml-auto">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
                <button className="w-full mt-2 py-2.5 text-sm font-medium text-white bg-[#207eff] rounded-lg">
                  Get started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}