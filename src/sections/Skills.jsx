import React from 'react'
import { motion } from 'framer-motion'

const groups = [
  { name: 'Programming', color: '#a78bfa', items: ['Python', 'Java', 'JavaScript', 'SQL'] },
  { name: 'Backend', color: '#60a5fa', items: ['Node.js', 'Flask', 'REST APIs', 'Webhooks', 'API Integration'] },
  { name: 'AI / Computer Vision', color: '#34d399', items: ['YOLOv8', 'OpenCV'] },
  { name: 'Databases', color: '#f59e0b', items: ['MySQL', 'Firebase'] },
  { name: 'Cloud / Tools', color: '#f472b6', items: ['Microsoft Azure', 'GitHub', 'Postman'] },
  { name: 'Systems / IoT', color: '#38bdf8', items: ['Raspberry Pi', 'Unix/Linux', 'IoT Automation', 'Real-Time Systems'] },
  { name: 'Engineering', color: '#a78bfa', items: ['Agile/Scrum', 'Testing', 'Debugging', 'Code Review', 'Cross-Functional Collaboration', 'Research & Development'] },
]

function Skills() {
  return (
    <section id="skills" aria-label="Skills" style={{ padding: '5rem 0' }}>
      <div className="section-container">
        <div className="section-head">
          <div className="section-label">Skills</div>
          <h2 className="section-title">Tools &amp; practices</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.name}
              className="skill-group"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3 style={{ color: g.color }}>{g.name}</h3>
              <div className="chips">
                {g.items.map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default React.memo(Skills)
