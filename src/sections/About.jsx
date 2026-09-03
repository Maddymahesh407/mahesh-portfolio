import React from 'react'
import { motion } from 'framer-motion'

const facts = [
  { k: 'Education', v: 'MCA — REVA University, Bangalore (2024–2026)' },
  { k: 'Experience', v: 'Software development internships — computer vision on a robotics product, backend on a print-automation platform' },
  { k: 'Focus', v: 'Backend services, REST APIs, computer vision, IoT automation' },
  { k: 'Credentials', v: 'Microsoft Azure AI-900 · Patent application filed (2025)' },
]

function About() {
  return (
    <section id="about" aria-label="About" style={{ padding: '5rem 0' }}>
      <div className="section-container">
        <div className="section-head">
          <div className="section-label">About</div>
          <h2 className="section-title">Engineer across the stack</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.975rem', marginBottom: '1.1rem' }}>
              I'm an MCA graduate with hands-on engineering experience across backend
              development, full-stack applications, AI and computer vision, API integration,
              real-time systems, and IoT automation.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.975rem', marginBottom: '1.75rem' }}>
              My work has centred on building and integrating practical software systems —
              designing REST APIs, wiring webhook-driven event processing, connecting
              third-party services, and debugging device-level issues. I work in Agile/Scrum
              teams and value testing, code review, and clear collaboration with product and
              design.
            </p>
            <a href="#experience" className="btn-outline">
              See experience
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col gap-3">
            {facts.map((f, i) => (
              <motion.div
                key={f.k}
                className="card"
                style={{ padding: '1rem 1.25rem' }}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.3rem' }}>
                  {f.k}
                </div>
                <div style={{ color: 'var(--text)', fontSize: '0.88rem', lineHeight: 1.6 }}>{f.v}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(About)
