import React, { useState } from 'react'
import { motion } from 'framer-motion'
import CaseStudyModal from '../components/CaseStudyModal'
import { CASE_STUDIES } from '../data/caseStudies'
import visionPrinttCert from '../assets/vision-printt-internship-certificate.pdf'
import infipostsCert from '../assets/infiposts-internship-letter.pdf'

const timeline = [
  {
    period: 'Mar 2026 – Jul 2026',
    role: 'Software Development Intern',
    company: 'Infiposts Private Limited',
    project: 'MORO Project',
    type: 'Internship',
    typeColor: '#a78bfa',
    bullets: [
      'Contributed to computer vision and AI model development for the MORO project, a robotics product.',
      'Assisted in vision model development and image/video data processing.',
      'Ran model testing and evaluation, and supported AI-based object detection tasks.',
      'Assisted with backend development, routing, and API handling for platform modules.',
      'Participated in research, testing, and optimisation of system workflows.',
      'Worked in a collaborative startup team — technical discussions, weekly updates and internal reviews.',
    ],
    tags: ['Computer Vision', 'Object Detection', 'Python', 'OpenCV', 'Model Evaluation', 'Backend', 'R&D'],
    caseStudy: 'moro',
    certificate: infipostsCert,
  },
  {
    period: 'Dec 2025 – Mar 2026',
    role: 'Backend Developer & API Integration Intern',
    company: 'Vision Printt Technologies (MIMO)',
    type: 'Internship',
    typeColor: '#60a5fa',
    bullets: [
      'Built production-level backend systems using Python and Node.js.',
      'Handled 500+ daily API requests across integrated services.',
      'Designed and deployed 5+ secure REST APIs.',
      'Implemented webhook-based real-time event processing.',
      'Integrated the WhatsApp Cloud API for customer interactions.',
      'Integrated two payment gateways.',
      'Built printer automation services.',
      'Developed Raspberry Pi-based IoT print queue automation.',
      'Troubleshot device-level connectivity issues.',
      'Reduced manual intervention by approximately 60%.',
    ],
    tags: ['Python', 'Node.js', 'REST API', 'Webhooks', 'WhatsApp Cloud API', 'Raspberry Pi', 'IoT', 'API Integration'],
    caseStudy: 'iot-print',
    certificate: visionPrinttCert,
  },
]

const education = [
  {
    degree: 'MCA — Master of Computer Applications',
    school: 'REVA University, Bangalore',
    detail: '2024 – 2026 · CGPA: 8.63',
    color: '#34d399',
  },
  {
    degree: 'BCA — Bachelor of Computer Applications',
    school: 'Nazareth College of Arts and Science, Tiruvallur',
    detail: '2021 – 2024 · CGPA: 7.26',
    color: '#60a5fa',
  },
]

function Experience() {
  const [study, setStudy] = useState(null)

  return (
    <section id="experience" aria-label="Experience" style={{ padding: '5rem 0' }}>
      <div className="section-container">
        <div className="section-head">
          <div className="section-label">Experience</div>
          <h2 className="section-title">Where I've worked</h2>
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
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <div className="timeline-dot" style={{ background: t.typeColor, boxShadow: `0 0 10px ${t.typeColor}55` }} />
                <div className="card" style={{ padding: '1.5rem' }}>
                  <div className="flex flex-wrap items-start justify-between gap-3" style={{ marginBottom: '0.65rem' }}>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap" style={{ marginBottom: '0.2rem' }}>
                        <h3 style={{ fontWeight: 700, fontSize: '1.02rem', margin: 0 }}>{t.role}</h3>
                        <span style={{ fontSize: '0.68rem', fontWeight: 600, padding: '0.15rem 0.55rem', borderRadius: '999px', background: `${t.typeColor}12`, border: `1px solid ${t.typeColor}28`, color: t.typeColor }}>
                          {t.type}
                        </span>
                      </div>
                      <div style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
                        {t.company}{t.project && <span style={{ color: 'var(--muted-2)' }}> · {t.project}</span>}
                      </div>
                    </div>
                    <div className="exp-year">{t.period}</div>
                  </div>

                  <ul style={{ margin: '0 0 1rem 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {t.bullets.map(b => (
                      <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                        <span style={{ color: t.typeColor, marginTop: '0.4rem', flexShrink: 0, fontSize: '0.4rem' }} aria-hidden>●</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2" style={{ marginBottom: t.caseStudy ? '1.1rem' : 0 }}>
                    {t.tags.map(tag => <span key={tag} className="tech-pill">{tag}</span>)}
                  </div>

                  {(t.caseStudy || t.certificate) && (
                    <div className="flex flex-wrap gap-2" style={{ marginTop: '0.25rem' }}>
                      {t.caseStudy && (
                        <button className="btn-ghost" onClick={() => setStudy(CASE_STUDIES[t.caseStudy])}>
                          View case study
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </button>
                      )}
                      {t.certificate && (
                        <a className="btn-ghost" href={t.certificate} target="_blank" rel="noreferrer">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          Completion certificate
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div style={{ marginTop: '2rem' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: '0.85rem' }}>
            Education
          </div>
          <div className="flex flex-col gap-3">
            {education.map((e, i) => (
              <motion.div
                key={e.degree}
                className="card"
                style={{ padding: '1.1rem 1.4rem', display: 'flex', gap: '0.9rem', alignItems: 'center' }}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              >
                <div style={{ width: 38, height: 38, borderRadius: 9, background: `${e.color}18`, border: `1px solid ${e.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={e.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.15rem' }}>{e.degree}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{e.school} · {e.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <CaseStudyModal open={!!study} onClose={() => setStudy(null)} study={study} />
    </section>
  )
}

export default React.memo(Experience)
