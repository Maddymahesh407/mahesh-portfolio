import React from 'react'
import { motion } from 'framer-motion'

const highlights = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Software & AI Developer — Infiposts',
    desc: 'Worked on backend systems, AI-powered automation workflows, and integration features for MORO, a robotics-based internal product.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Backend Intern — Vision Printt',
    desc: 'Built production-level backend systems handling 500+ daily API requests. Integrated WhatsApp Cloud API, payment gateways, and IoT print automation.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: 'MCA Student — REVA University',
    desc: 'Pursuing MCA at REVA University, Bangalore. CGPA 8.40. Microsoft Azure AI-900 certified. Filed patent on biometric identity verification.',
  },
]

const values = [
  { label: 'Clean code',          color: '#a78bfa' },
  { label: 'Reliable APIs',       color: '#60a5fa' },
  { label: 'Observability',       color: '#34d399' },
  { label: 'Incremental delivery',color: '#f59e0b' },
  { label: 'Practical ML',        color: '#f472b6' },
  { label: 'Automation',          color: '#a78bfa' },
]

function About() {
  return (
    <section id="about" aria-label="About" style={{ padding: '5rem 0' }}>
      <div className="section-container">

        {/* Header */}
        <div style={{ marginBottom: '2.75rem' }}>
          <div className="section-label">About me</div>
          <h2 className="section-title">
            Building things that actually work
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left: bio */}
          <div>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.975rem', marginBottom: '1.1rem' }}>
              MCA student at REVA University and Full Stack Developer with production experience
              in backend systems, AI-based automation, and IoT. Currently working as a
              Software &amp; AI Developer at Infiposts on MORO — a robotics-based product.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.975rem', marginBottom: '1.75rem' }}>
              Skilled in Python, Java, Node.js, REST APIs, and SQL. Microsoft Azure AI-900
              certified. Holds a filed patent on biometric identity verification. Experienced
              in Agile/Scrum workflows.
            </p>

            {/* Values */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{
                fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: '0.65rem',
              }}>
                What I care about
              </div>
              <div className="flex flex-wrap gap-2">
                {values.map(v => (
                  <span key={v.label} style={{
                    padding: '0.25rem 0.7rem',
                    borderRadius: '999px',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    background: `${v.color}10`,
                    border: `1px solid ${v.color}28`,
                    color: v.color,
                  }}>
                    {v.label}
                  </span>
                ))}
              </div>
            </div>

            <a href="#contact" className="btn-primary" style={{ display: 'inline-flex' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              Get in touch
            </a>
          </div>

          {/* Right: highlight cards */}
          <div className="flex flex-col gap-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                className="card"
                style={{ padding: '1.1rem 1.25rem', display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 9,
                  background: 'rgba(124,58,237,0.09)',
                  border: '1px solid rgba(124,58,237,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#a78bfa', flexShrink: 0,
                }}>
                  {h.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem' }}>{h.title}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.83rem', lineHeight: 1.6 }}>{h.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default React.memo(About)
