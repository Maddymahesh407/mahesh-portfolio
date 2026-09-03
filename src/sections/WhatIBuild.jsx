import React from 'react'
import { motion } from 'framer-motion'

const cards = [
  {
    color: '#a78bfa',
    title: 'Backend Systems',
    desc: 'REST APIs, webhooks, integrations, event-driven processing and backend services.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0018 0V5" /><path d="M3 12a9 3 0 0018 0" />
      </svg>
    ),
  },
  {
    color: '#60a5fa',
    title: 'Full-Stack Applications',
    desc: 'Web applications, dashboards, authentication, databases and API-driven applications.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4M2 9h20" />
      </svg>
    ),
  },
  {
    color: '#34d399',
    title: 'AI & Computer Vision',
    desc: 'YOLOv8, OpenCV, real-time video processing, detection systems and automated alerts.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    color: '#f59e0b',
    title: 'IoT & Automation',
    desc: 'Raspberry Pi, device automation, print queues, real-time communication and connected systems.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
      </svg>
    ),
  },
]

function WhatIBuild() {
  return (
    <section id="what-i-build" aria-label="What I build" style={{ padding: '5rem 0' }}>
      <div className="section-container">
        <div className="section-head">
          <div className="section-label">What I build</div>
          <h2 className="section-title">Systems, not just screens</h2>
        </div>

        <div className="feature-grid">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              className="feature-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div className="ic" style={{ background: `${c.color}14`, border: `1px solid ${c.color}30`, color: c.color }}>
                {c.icon}
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default React.memo(WhatIBuild)
