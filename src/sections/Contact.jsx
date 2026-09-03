import React from 'react'
import { motion } from 'framer-motion'

const MAIL = 'maheshdevi407@gmail.com'
const SUBJECT = encodeURIComponent('Portfolio inquiry')
const GH = 'https://github.com/Maddymahesh407'
const LI = 'https://linkedin.com/in/maheshdevi'
const RESUME = '/P-Mahesh-Kumar-Resume.pdf'

function Contact() {
  return (
    <section id="contact" aria-label="Contact" style={{ padding: '5rem 0 6rem' }}>
      <div className="section-container">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Contact</div>
          <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>Let's build something useful.</h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 1.75rem', fontSize: '0.95rem' }}>
            I'm currently open to software engineering, backend, full-stack, AI/ML, IoT and
            systems-oriented opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a href={`mailto:${MAIL}?subject=${SUBJECT}`} className="btn-primary">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
              </svg>
              Email Me
            </a>
            <a href={LI} target="_blank" rel="noreferrer" className="btn-outline" aria-label="LinkedIn (opens in new tab)">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <a href={GH} target="_blank" rel="noreferrer" className="btn-outline" aria-label="GitHub (opens in new tab)">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
            <a href={RESUME} target="_blank" rel="noreferrer" className="btn-ghost">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.4rem 1.25rem', color: 'var(--muted-2)', fontSize: '0.8rem' }}>
            <span>{MAIL}</span>
            <span aria-hidden>·</span>
            <span>Bangalore, India · Open to remote</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default React.memo(Contact)
