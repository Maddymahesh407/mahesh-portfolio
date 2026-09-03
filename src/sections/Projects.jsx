import React, { useState } from 'react'
import { motion } from 'framer-motion'
import WorkflowDiagram from '../components/WorkflowDiagram'
import CaseStudyModal from '../components/CaseStudyModal'
import { CASE_STUDIES as STUDIES } from '../data/caseStudies'
import vknImg from '../assets/vkn-realestate.jpg'
import accidentDashboard from '../assets/accident-dashboard.png'

const GH = 'https://github.com/Maddymahesh407'

/* ─── Project data ─────────────────────────────────────────── */
const featured = [
  {
    title: 'MORO — Computer Vision at Infiposts',
    tag: 'Industry internship · Computer Vision',
    accent: '#a78bfa',
    diagram: 'moro',
    desc: 'Computer-vision and AI model development for MORO, a robotics product, during a software development internship at Infiposts.',
    problem: 'MORO needed reliable vision — detecting and classifying objects from camera and video input well enough to act on.',
    solution: 'Prepared image and video data, developed and iterated on object-detection models, and ran structured testing and evaluation to measure and improve accuracy. Also supported backend, routing and API handling for platform modules.',
    contribution: 'Assisted in vision model development and image/video data processing; ran model testing and evaluation; supported object-detection tasks and backend/API work.',
    tech: ['Python', 'Computer Vision', 'OpenCV', 'Object Detection', 'Model Evaluation', 'Backend', 'R&D'],
    study: 'moro',
    github: null,
  },
  {
    title: 'AI-Based Real-Time Accident Detection System',
    tag: 'AI / Computer Vision',
    accent: '#34d399',
    diagram: 'accident',
    desc: 'An AI-powered computer vision system for detecting accidents from live video streams and generating automated alerts.',
    problem: 'Accidents on monitored feeds go unnoticed until reported, delaying response.',
    solution: 'A real-time pipeline: OpenCV frame processing → YOLOv8 detection → confidence validation → Flask monitoring dashboard → Telegram alert.',
    contribution: 'Built the frame-processing layer, integrated YOLOv8, and implemented confidence validation plus the alert trigger.',
    results: ['87%+ detection accuracy', '~35% false-positive reduction'],
    tech: ['YOLOv8', 'OpenCV', 'Python', 'Flask', 'Telegram API'],
    study: 'accident',
    github: `${GH}/Accident-Detection`,
    thumb: accidentDashboard,
    thumbAlt: 'Flask dashboard running detection on an uploaded video, with an "Accident 1.00" label overlaid on the frame',
    pipeline: ['Video Stream', 'OpenCV Frame Processing', 'YOLOv8 Detection', 'Confidence Validation', 'Flask Dashboard', 'Telegram Alert'],
  },
  {
    title: 'IoT Print Automation',
    tag: 'Backend / IoT',
    accent: '#f59e0b',
    diagram: 'iot-print',
    desc: 'Backend and Raspberry Pi pipeline that turns incoming print requests into physical output with minimal manual steps.',
    problem: 'Print jobs required manual validation, payment and printing — slow and error-prone.',
    solution: 'Backend services accept jobs over REST and webhooks, process them through a queue, and hand them to a Raspberry Pi agent driving the printer.',
    contribution: 'Built the REST/webhook backend, the print queue, and the Raspberry Pi agent; troubleshot device connectivity.',
    results: ['~60% manual intervention reduced', 'Improved print-throughput efficiency via queue-based processing'],
    tech: ['Backend', 'REST APIs', 'Webhooks', 'Raspberry Pi', 'IoT', 'Real-Time Processing'],
    study: 'iot-print',
    github: null,
    architecture: ['Backend', 'Print Queue', 'Raspberry Pi', 'Printer'],
  },
]

const others = [
  {
    title: 'E-Book Buying System',
    tag: 'Full Stack',
    accent: '#60a5fa',
    desc: 'Flask + Firebase app with user authentication, a book catalog, cart management and a simulated payment workflow.',
    tech: ['Flask', 'Firebase', 'REST APIs'],
    study: 'ebook',
    github: null,
    img: null,
  },
  {
    title: 'VKN Real Estate — Property Listing Platform',
    tag: 'Full Stack · Client project',
    accent: '#34d399',
    desc: 'Property-listing web platform: browsable residential/commercial listings, reusable property cards, and per-listing inquiry flows.',
    tech: ['JavaScript', 'Node.js', 'HTML/CSS', 'Firebase'],
    study: null,
    github: `${GH}/Realestate`,
    img: vknImg,
  },
  {
    title: 'Namba Ooru TN',
    tag: 'Full Stack · Team project',
    accent: '#a78bfa',
    desc: 'Collaborative full-stack app serving local community information for Tamil Nadu, with Firebase auth and Firestore.',
    tech: ['Node.js', 'JavaScript', 'Firebase'],
    study: null,
    github: `${GH}/namba-ooru-tn`,
    img: null,
  },
]

/* ─── Icons ────────────────────────────────────────────────── */
function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

/* ─── Featured card ────────────────────────────────────────── */
function FeaturedCard({ p, index, onStudy }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="wide-card-inner">
        <div className="wide-card-thumb" style={{ background: 'var(--bg-2)' }}>
          {p.thumb
            ? <img src={p.thumb} alt={p.thumbAlt || `${p.title} screenshot`} className="wide-card-img" loading="lazy" style={{ objectPosition: 'center', filter: 'none' }} />
            : <WorkflowDiagram type={p.diagram} accentColor={p.accent} />}
          <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', fontSize: '0.66rem', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: '999px', background: 'rgba(6,9,16,0.82)', border: '1px solid rgba(255,255,255,0.12)', color: 'var(--muted)', backdropFilter: 'blur(8px)' }}>
            {p.tag}
          </div>
        </div>

        <div className="wide-card-content">
          <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem' }}>{p.title}</h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1rem' }}>{p.desc}</p>

          <dl style={{ margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[['Problem', p.problem], ['Solution', p.solution], ['Key contribution', p.contribution]].map(([k, v]) => (
              <div key={k}>
                <dt style={{ fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: p.accent, marginBottom: '0.2rem' }}>{k}</dt>
                <dd style={{ margin: 0, fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.6 }}>{v}</dd>
              </div>
            ))}
          </dl>

          {p.pipeline && (
            <div className="pipeline" style={{ marginBottom: '1rem' }}>
              {p.pipeline.map((s, i) => (
                <div className="pipeline-step" key={s}>
                  <div className="n">{String(i + 1).padStart(2, '0')}</div>
                  <div className="t">{s}</div>
                </div>
              ))}
            </div>
          )}
          {p.architecture && (
            <div className="pipeline" style={{ marginBottom: '1rem' }}>
              {p.architecture.map((s, i) => (
                <div className="pipeline-step" key={s}>
                  <div className="n">{i === 0 ? 'START' : `→ ${i}`}</div>
                  <div className="t">{s}</div>
                </div>
              ))}
            </div>
          )}

          {p.results?.length > 0 && (
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {p.results.map(r => (
                <li key={r} style={{ fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.6rem', borderRadius: '999px', background: `${p.accent}12`, border: `1px solid ${p.accent}2e`, color: p.accent }}>
                  {r}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2" style={{ marginBottom: '1.1rem' }}>
            {p.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
          </div>

          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
            {p.github
              ? <a href={p.github} target="_blank" rel="noreferrer" className="btn-ghost"><GitHubIcon /> Source</a>
              : <span className="btn-ghost" style={{ cursor: 'default', opacity: 0.7 }} aria-disabled="true">Private — company project</span>}
            {p.study && (
              <button className="btn-primary" style={{ fontSize: '0.82rem', padding: '0.5rem 1rem' }} onClick={() => onStudy(STUDIES[p.study])}>
                View case study
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

/* ─── Small card ───────────────────────────────────────────── */
function SmallCard({ p, index, onStudy }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      {p.img && (
        <div className="project-thumb">
          <img src={p.img} alt={`${p.title} — screenshot`} loading="lazy" width="400" height="200" />
          <div className="project-thumb-overlay" aria-hidden />
        </div>
      )}
      <div style={{ padding: '1.35rem' }}>
        <div style={{ fontSize: '0.66rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: p.accent, marginBottom: '0.35rem' }}>{p.tag}</div>
        <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>{p.title}</h3>
        <p style={{ color: 'var(--muted)', fontSize: '0.83rem', lineHeight: 1.65, marginBottom: '0.9rem' }}>{p.desc}</p>
        <div className="flex flex-wrap gap-2" style={{ marginBottom: '1rem' }}>
          {p.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
        </div>
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', paddingTop: '0.9rem', borderTop: '1px solid var(--border)' }}>
          {p.github
            ? <a href={p.github} target="_blank" rel="noreferrer" className="btn-ghost" style={{ fontSize: '0.78rem' }}><GitHubIcon /> Source</a>
            : <span style={{ fontSize: '0.78rem', color: 'var(--muted-2)', alignSelf: 'center' }}>Source on request</span>}
          {p.study && (
            <button className="btn-ghost" style={{ fontSize: '0.78rem' }} onClick={() => onStudy(STUDIES[p.study])}>Case study</button>
          )}
        </div>
      </div>
    </motion.article>
  )
}

function Projects() {
  const [study, setStudy] = useState(null)

  return (
    <section id="projects" aria-label="Projects" style={{ padding: '5rem 0' }}>
      <div className="section-container">
        <div className="flex flex-wrap items-end justify-between gap-4 section-head">
          <div>
            <div className="section-label">Projects</div>
            <h2 className="section-title">Selected work</h2>
            <p className="lead">Backend services, AI/computer vision and IoT systems — with problem, approach and results.</p>
          </div>
          <a href={GH} target="_blank" rel="noreferrer" className="btn-ghost">
            <GitHubIcon /> GitHub profile
          </a>
        </div>

        <div className="flex flex-col gap-5" style={{ marginBottom: '3.5rem' }}>
          {featured.map((p, i) => <FeaturedCard key={p.title} p={p} index={i} onStudy={setStudy} />)}
        </div>

        <div>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: '1.1rem' }}>
            Other projects
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((p, i) => <SmallCard key={p.title} p={p} index={i} onStudy={setStudy} />)}
          </div>
        </div>
      </div>

      <CaseStudyModal open={!!study} onClose={() => setStudy(null)} study={study} />
    </section>
  )
}

export default React.memo(Projects)
