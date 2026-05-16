import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const skillGroups = {
  Backend: {
    color: '#a78bfa',
    desc: 'Server-side development, APIs, and databases',
    skills: [
      { name: 'Node.js',    abbr: 'NJ', level: 85 },
      { name: 'Python',     abbr: 'PY', level: 82 },
      { name: 'REST APIs',  abbr: 'AP', level: 90 },
      { name: 'Flask',      abbr: 'FL', level: 75 },
      { name: 'MySQL',      abbr: 'MY', level: 78 },
      { name: 'Firebase',   abbr: 'FB', level: 75 },
    ],
  },
  Frontend: {
    color: '#60a5fa',
    desc: 'UI development and user experience',
    skills: [
      { name: 'React',       abbr: 'RE', level: 80 },
      { name: 'JavaScript',  abbr: 'JS', level: 85 },
      { name: 'HTML / CSS',  abbr: 'HC', level: 90 },
      { name: 'Tailwind CSS',abbr: 'TW', level: 82 },
      { name: 'Vite',        abbr: 'VT', level: 75 },
    ],
  },
  'ML & Vision': {
    color: '#34d399',
    desc: 'Machine learning and computer vision prototypes',
    skills: [
      { name: 'Python',    abbr: 'PY', level: 82 },
      { name: 'OpenCV',    abbr: 'CV', level: 72 },
      { name: 'YOLOv8',   abbr: 'YO', level: 68 },
      { name: 'Azure AI',  abbr: 'AZ', level: 70 },
      { name: 'Telegram API', abbr: 'TG', level: 75 },
    ],
  },
  Tools: {
    color: '#f59e0b',
    desc: 'Languages, platforms, and workflow tools',
    skills: [
      { name: 'Java',         abbr: 'JV', level: 75 },
      { name: 'SQL',          abbr: 'SQ', level: 80 },
      { name: 'Git',          abbr: 'GT', level: 85 },
      { name: 'Raspberry Pi', abbr: 'RP', level: 72 },
      { name: 'Postman',      abbr: 'PM', level: 80 },
      { name: 'Webhooks',     abbr: 'WH', level: 82 },
    ],
  },
}

function SkillBar({ level, color }) {
  return (
    <div style={{ height: 2, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden', marginTop: 7 }}>
      <motion.div
        style={{ height: '100%', background: color, borderRadius: 2 }}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
      />
    </div>
  )
}

function Skills() {
  const [active, setActive] = useState('Backend')
  const group = skillGroups[active]

  return (
    <section id="skills" aria-label="Skills" style={{ padding: '5rem 0' }}>
      <div className="section-container">

        {/* Header */}
        <div style={{ marginBottom: '2.75rem' }}>
          <div className="section-label">Tech stack</div>
          <h2 className="section-title">Skills &amp; Tools</h2>
        </div>

        {/* Tabs */}
        <div
          className="flex flex-wrap gap-2"
          style={{ marginBottom: '1.75rem' }}
          role="tablist"
          aria-label="Skill categories"
        >
          {Object.entries(skillGroups).map(([key, val]) => (
            <button
              key={key}
              role="tab"
              aria-selected={active === key}
              onClick={() => setActive(key)}
              className={`skill-tab ${active === key ? 'active' : ''}`}
            >
              {key}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
              {group.desc}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {group.skills.map((s, i) => (
                <motion.div
                  key={s.name}
                  className="skill-chip"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  style={{ flexDirection: 'column', alignItems: 'flex-start' }}
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="icon" style={{ background: `${group.color}15`, color: group.color }}>
                      {s.abbr}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{s.name}</div>
                      <div style={{ color: 'var(--muted-2)', fontSize: '0.72rem' }}>{s.level}% proficiency</div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <SkillBar level={s.level} color={group.color} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}

export default React.memo(Skills)
