import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const timeline = [
  {
    period: 'Mar 2026 – Present',
    role: 'Software & AI Developer',
    company: 'Infiposts Private Limited',
    type: 'Current Role',
    typeColor: '#a78bfa',
    desc: 'Worked on backend systems, AI-powered automation workflows, and integration features for MORO, a robotics-based internal product. Contributed to backend APIs, automation logic, and real-time processing workflows.',
    bullets: [
      'Built and maintained backend API endpoints for the MORO platform, supporting robot-control communication.',
      'Developed AI-powered automation workflows and real-time processing logic for internal product features.',
      'Participated in code reviews and QA testing cycles to maintain code quality across sprint iterations.',
    ],
    tags: ['Node.js', 'REST APIs', 'AI Automation', 'Backend', 'Agile'],
  },
  {
    period: 'Dec 2025 – Mar 2026',
    role: 'Backend Developer & API Integration Intern',
    company: 'Vision Printt Technologies (MIMO)',
    type: 'Internship',
    typeColor: '#60a5fa',
    desc: 'Built production-level backend systems handling 500+ daily API requests across integrated services.',
    bullets: [
      'Designed and deployed 5+ secure REST APIs with webhook integrations for real-time event processing.',
      'Integrated WhatsApp Cloud API, 2 payment gateways, and printer automation — reducing manual intervention by ~60%.',
      'Developed IoT-based print queue automation using Raspberry Pi, improving print throughput efficiency.',
    ],
    tags: ['Python', 'Node.js', 'REST APIs', 'WhatsApp API', 'Raspberry Pi', 'Webhooks'],
  },
]

function Experience() {
  const [patentExpanded, setPatentExpanded] = useState(false)

  return (
    <section id="experience" aria-label="Experience" style={{ padding: '5rem 0' }}>
      <div className="section-container">

        <div style={{ marginBottom: '2.75rem' }}>
          <div className="section-label">Career</div>
          <h2 className="section-title">Experience</h2>
        </div>

        <div style={{ position: 'relative', paddingLeft: '1.75rem' }}>
          <div className="timeline-line" />
          <div className="flex flex-col gap-5">
            {timeline.map((t, i) => (
              <motion.div
                key={t.company}
                style={{ position: 'relative' }}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
              >
                <div className="timeline-dot" style={{ background: t.typeColor, boxShadow: `0 0 10px ${t.typeColor}55` }} />
                <div className="card" style={{ padding: '1.5rem' }}>
                  <div className="flex flex-wrap items-start justify-between gap-3" style={{ marginBottom: '0.65rem' }}>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap" style={{ marginBottom: '0.2rem' }}>
                        <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>{t.role}</h3>
                        <span style={{ fontSize: '0.68rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: '999px', background: `${t.typeColor}12`, border: `1px solid ${t.typeColor}28`, color: t.typeColor }}>
                          {t.type}
                        </span>
                      </div>
                      <div style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{t.company}</div>
                    </div>
                    <div className="exp-year">{t.period}</div>
                  </div>
                  <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '0.875rem', marginBottom: '0.75rem' }}>{t.desc}</p>
                  {t.bullets && (
                    <ul style={{ margin: '0 0 0.9rem 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {t.bullets.map(b => (
                        <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                          <span style={{ color: t.typeColor, marginTop: '0.35rem', flexShrink: 0, fontSize: '0.5rem' }}>●</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {t.tags.map(tag => <span key={tag} className="tech-pill">{tag}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div style={{ marginTop: '1.5rem' }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: '0.75rem' }}>
            Education
          </div>
          <div className="flex flex-col gap-3">
            <motion.div className="card" style={{ padding: '1.1rem 1.5rem', display: 'flex', gap: '0.9rem', alignItems: 'center' }} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.25 }}>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: 'rgba(52,211,153,0.09)', border: '1px solid rgba(52,211,153,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.15rem' }}>
                  MCA — Master of Computer Applications
                  <span style={{ fontSize: '0.65rem', fontWeight: 600, padding: '0.12rem 0.5rem', borderRadius: '999px', background: 'rgba(52,211,153,0.09)', border: '1px solid rgba(52,211,153,0.22)', color: '#34d399' }}>Ongoing</span>
                </div>
                <div style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>REVA University, Bangalore · CGPA: 8.40 (Sem 1–3) · 2024 – Present</div>
              </div>
            </motion.div>

            <motion.div className="card" style={{ padding: '1.1rem 1.5rem', display: 'flex', gap: '0.9rem', alignItems: 'center' }} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.32 }}>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: 'rgba(96,165,250,0.09)', border: '1px solid rgba(96,165,250,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.15rem' }}>BCA — Bachelor of Computer Applications</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>Nazareth College of Arts and Science, Tiruvallur · CGPA: 7.26 · 2021 – 2024</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Certifications & Patent */}
        <div style={{ marginTop: '0.75rem' }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: '0.75rem' }}>
            Certifications &amp; Patent
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <motion.div className="card" style={{ padding: '1.1rem 1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.35 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(96,165,250,0.09)', border: '1px solid rgba(96,165,250,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.15rem' }}>Microsoft Azure AI-900</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>Azure AI Fundamentals · Certified 2026</div>
              </div>
            </motion.div>

            <motion.div className="card" style={{ padding: '1.1rem 1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start', flexDirection: 'column' }} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.42 }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', width: '100%' }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(245,158,11,0.09)', border: '1px solid rgba(245,158,11,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.15rem' }}>Patent Filed</div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>Biometric fingerprint auth via Aadhaar · No: 202541065407 · 2025</div>
                </div>
              </div>
              <button
                onClick={() => setPatentExpanded(!patentExpanded)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 600, color: '#f59e0b', background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginTop: '0.5rem' }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.2s', transform: patentExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }} aria-hidden>
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
                {patentExpanded ? 'Hide Details' : 'View Details'}
              </button>
              <AnimatePresence>
                {patentExpanded && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      <div>
                        <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>Technical Innovation</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.5 }}>Biometric identity verification system integrating Aadhaar fingerprint authentication with real-time verification and encryption protocols.</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>Application</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.5 }}>Secure identity verification for examination centers — prevents impersonation using Aadhaar biometric infrastructure.</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default React.memo(Experience)
