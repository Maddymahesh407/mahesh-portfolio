import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { id: 'home',           label: 'Home',           href: '#home' },
  { id: 'about',          label: 'About',          href: '#about' },
  { id: 'experience',     label: 'Experience',     href: '#experience' },
  { id: 'projects',       label: 'Projects',       href: '#projects' },
  { id: 'skills',         label: 'Skills',         href: '#skills' },
  { id: 'certifications', label: 'Certifications', href: '#certifications' },
  { id: 'contact',        label: 'Contact',        href: '#contact' },
]

const GH = 'https://github.com/Maddymahesh407'

function GitHubMark() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'))
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = useCallback(() => setOpen(false), [])

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="section-container">
          <div className="flex items-center justify-between h-16">

            <a href="#home" className="nav-logo" onClick={close}>
              MK<span style={{ color: 'var(--accent)' }}>.</span>
            </a>

            <nav className="nav-desktop items-center gap-0.5" aria-label="Primary" style={{ display: 'flex' }}>
              {links.map(l => (
                <a key={l.id} href={l.href} className={`nav-link ${active === l.id ? 'active' : ''}`}
                   aria-current={active === l.id ? 'page' : undefined}>
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="nav-desktop items-center gap-3" style={{ display: 'flex' }}>
              <a href={GH} target="_blank" rel="noreferrer" className="nav-cta" aria-label="GitHub profile (opens in new tab)">
                <GitHubMark /> GitHub
              </a>
              <a href="/P-Mahesh-Kumar-Resume.pdf" target="_blank" rel="noreferrer"
                 className="btn-primary" style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}>
                Resume
              </a>
            </div>

            <button
              className="nav-burger"
              style={{
                width: 40, height: 40,
                alignItems: 'center', justifyContent: 'center',
                borderRadius: 8,
                background: open ? 'rgba(124,58,237,0.12)' : 'var(--surface)',
                border: `1px solid ${open ? 'rgba(124,58,237,0.25)' : 'var(--border)'}`,
                cursor: 'pointer', transition: 'background 0.2s, border-color 0.2s',
                flexShrink: 0, zIndex: 110, position: 'relative', display: 'none',
              }}
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {open
                  ? <><path d="M18 6L6 18" /><path d="M6 6l12 12" /></>
                  : <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>
                }
              </svg>
            </button>

          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              style={{ position: 'fixed', inset: 0, background: 'rgba(7,11,18,0.6)', backdropFilter: 'blur(4px)', zIndex: 98 }}
              aria-hidden
            />
            <motion.div
              key="drawer"
              id="mobile-menu"
              role="dialog" aria-modal="true" aria-label="Navigation menu"
              initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99,
                maxHeight: 'calc(100vh - 64px)', overflowY: 'auto',
                background: 'rgba(7,11,18,0.98)', backdropFilter: 'blur(24px) saturate(160%)',
                borderBottom: '1px solid var(--border)', boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
              }}
            >
              <div className="section-container" style={{ paddingTop: '1rem', paddingBottom: '1.25rem' }}>
                <nav aria-label="Mobile navigation">
                  {links.map((l, i) => (
                    <motion.a
                      key={l.id} href={l.href} onClick={close}
                      initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.18, delay: i * 0.03 }}
                      aria-current={active === l.id ? 'page' : undefined}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '0.8rem 0.5rem', borderRadius: 8, textDecoration: 'none',
                        fontSize: '1rem', fontWeight: active === l.id ? 600 : 450,
                        color: active === l.id ? 'var(--text)' : 'var(--muted)',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      <span>{l.label}</span>
                      {active === l.id && (
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 6px var(--accent)', flexShrink: 0 }} aria-hidden />
                      )}
                    </motion.a>
                  ))}
                </nav>
                <div className="flex gap-3" style={{ marginTop: '1rem' }}>
                  <a href={GH} target="_blank" rel="noreferrer" className="btn-ghost" style={{ flex: 1, justifyContent: 'center' }} onClick={close}>
                    <GitHubMark /> GitHub
                  </a>
                  <a href="/P-Mahesh-Kumar-Resume.pdf" target="_blank" rel="noreferrer" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }} onClick={close}>
                    Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
