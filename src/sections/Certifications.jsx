import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CERT_PDF from '../assets/ai_accident_research.pdf'
import AZURE_PDF from '../assets/azure-ai-900-certificate.pdf'

function CertLink({ href, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ marginTop: '0.6rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 600, color, textDecoration: 'none' }}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
      </svg>
      View certificate
    </a>
  )
}

function Certifications() {
  const [open, setOpen] = useState(false)

  return (
    <section id="certifications" aria-label="Certifications, patent and research" style={{ padding: '5rem 0' }}>
      <div className="section-container">
        <div className="section-head">
          <div className="section-label">Credentials</div>
          <h2 className="section-title">Certifications, patent &amp; research</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Azure AI-900 */}
          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="ic" style={{ background: 'rgba(96,165,250,0.14)', border: '1px solid rgba(96,165,250,0.3)', color: '#60a5fa' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>
            <h3>Microsoft Certified: Azure AI Fundamentals (AI-900)</h3>
            <p>Foundational certification covering AI workloads, machine learning, computer vision and natural language on Azure. Issued February 2026.</p>
            <CertLink href={AZURE_PDF} color="#60a5fa" />
          </motion.div>

          {/* Research paper */}
          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            <div className="ic" style={{ background: 'rgba(52,211,153,0.14)', border: '1px solid rgba(52,211,153,0.3)', color: '#34d399' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
              </svg>
            </div>
            <h3>Research Paper — "AI-Based Accident Detection"</h3>
            <p>
              Presented at ICICTA-2026 — International Conference on Innovative Computing Technologies
              and Applications, REVA University, Bangalore. April 2026.
            </p>
            <CertLink href={CERT_PDF} color="#34d399" />
          </motion.div>

          {/* Patent (full width) */}
          <motion.div
            className="feature-card md:col-span-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
          >
            <div className="ic" style={{ background: 'rgba(245,158,11,0.14)', border: '1px solid rgba(245,158,11,0.3)', color: '#f59e0b' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 20.5 7.6 22.9l.9-5.5-4-3.9L10 7z" />
              </svg>
            </div>
            <h3>Patent Application — Biometric Verification using Aadhaar Fingerprint Authentication</h3>
            <p>Application filed in 2025 for a biometric identity-verification method using Aadhaar fingerprint authentication.</p>
            <button
              onClick={() => setOpen(v => !v)}
              aria-expanded={open}
              style={{ marginTop: '0.6rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 600, color: '#f59e0b', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.2s', transform: open ? 'rotate(90deg)' : 'none' }} aria-hidden>
                <polyline points="9 18 15 12 9 6" />
              </svg>
              {open ? 'Hide details' : 'View details'}
            </button>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)', fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                    <p style={{ margin: 0 }}>
                      Application number: 202541065407. Focus: secure identity verification for
                      examination and enrolment scenarios, using Aadhaar biometric infrastructure to
                      prevent impersonation.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Certifications)
