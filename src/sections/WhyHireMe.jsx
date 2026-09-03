import React from 'react'
import { motion } from 'framer-motion'

const points = [
  {
    color: '#a78bfa',
    title: 'Engineering Mindset',
    desc: 'Practical experience building and integrating software systems.',
  },
  {
    color: '#60a5fa',
    title: 'Backend Experience',
    desc: 'Hands-on API development, webhooks, integrations and real-time event processing.',
  },
  {
    color: '#34d399',
    title: 'Cross-Domain Engineering',
    desc: 'Experience across backend, full-stack, AI/ML, computer vision and IoT.',
  },
  {
    color: '#f59e0b',
    title: 'Team Collaboration',
    desc: 'Code reviews, QA and testing, Agile/Scrum, and cross-functional coordination with product, design and engineering.',
  },
]

function WhyHireMe() {
  return (
    <section id="why" aria-label="Why hire me" style={{ padding: '5rem 0' }}>
      <div className="section-container">
        <div className="section-head">
          <div className="section-label">Why hire me</div>
          <h2 className="section-title">What I bring</h2>
        </div>

        <div className="feature-grid">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              className="feature-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: p.color, marginBottom: '0.9rem', boxShadow: `0 0 10px ${p.color}` }} aria-hidden />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default React.memo(WhyHireMe)
