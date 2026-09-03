import { useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

const ORDER = ['problem', 'solution', 'architecture', 'role', 'stack', 'implementation', 'challenges', 'results', 'screenshots', 'links']
const LABELS = {
  problem: 'Problem',
  solution: 'Solution',
  architecture: 'Architecture',
  role: 'My Role',
  stack: 'Technology Stack',
  implementation: 'Implementation',
  challenges: 'Challenges',
  results: 'Results',
  screenshots: 'Screenshots',
  links: 'Links',
}

function Shots({ items }) {
  return (
    <div className="cs-shots">
      {items.map((s, i) => (
        <figure className="cs-shot" key={i}>
          <img src={s.src} alt={s.alt} loading="lazy" />
          {s.caption && <figcaption>{s.caption}</figcaption>}
        </figure>
      ))}
    </div>
  )
}

function Value({ k, v }) {
  if (k === 'screenshots') return <Shots items={v} />
  if (Array.isArray(v)) {
    return <ul>{v.map(item => <li key={item}>{item}</li>)}</ul>
  }
  return <p>{v}</p>
}

export default function CaseStudyModal({ open, onClose, study }) {
  const overlayRef = useRef(null)
  const closeRef = useRef(null)

  const onKey = useCallback((e) => { if (e.key === 'Escape') onClose() }, [onClose])

  useEffect(() => {
    if (!open) return
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onKey])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open && study && (
        <motion.div
          className="cs-overlay"
          ref={overlayRef}
          onMouseDown={(e) => { if (e.target === overlayRef.current) onClose() }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="cs-modal"
            role="dialog" aria-modal="true" aria-labelledby="cs-title"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cs-modal-head">
              <button className="cs-close" onClick={onClose} aria-label="Close case study" ref={closeRef}>×</button>
              <div className="section-label" style={{ marginBottom: '0.4rem' }}>{study.kicker || 'Case study'}</div>
              <h3 id="cs-title" style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0, paddingRight: '2rem' }}>{study.title}</h3>
              {study.summary && (
                <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginTop: '0.5rem', lineHeight: 1.6 }}>{study.summary}</p>
              )}
            </div>

            <div className="cs-modal-body">
              {ORDER.filter(k => study[k]).map(k => (
                <div className="cs-block" key={k}>
                  <h4>{LABELS[k]}</h4>
                  <Value k={k} v={study[k]} />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
