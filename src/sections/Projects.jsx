<<<<<<< HEAD
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WorkflowDiagram from '../components/WorkflowDiagram'

// ─── Project Data ─────────────────────────────────────────────────────────────

const featured = [
  {
    title: 'VKN Real Estate — Property Listing Platform',
    subtitle: 'Full-Stack Development · Client Project',
    desc: 'A business-oriented real estate web platform built for VKN Real Estate, Chennai. Covers property listing workflows, inquiry/contact flows, and a structured browsing experience across residential and commercial categories.',
    contributions: [
      'Full frontend implementation — page layouts, navigation, and property listing UI',
      'Property card system — reusable cards with pricing, location, and status badges',
      'Responsive layout — mobile-first design across all screen sizes',
      'Inquiry workflow — contact and enquiry form integration per listing',
      'Project structure — scalable folder layout, naming conventions, and asset management',
    ],
    tech: ['JavaScript', 'Node.js', 'HTML/CSS', 'Firebase'],
    github: 'https://github.com/Maddymahesh407/Realestate',
    img: null,
    workflow: true,
    diagramType: 'vkn',
    accentColor: '#34d399',
    status: 'Local Build',
    statusColor: '#f59e0b',
    type: 'client',
    localBuild: true,
  },
  {
    title: 'Accident Detection System',
    subtitle: 'Computer Vision · ML Prototype',
    desc: 'YOLO-based inference prototype with Flask API for real-time frame inference. Lightweight deployment designed for experimental live feeds — detects accidents and potential threats from video streams using advanced computer vision.',
    contributions: [
      'YOLOv8 model integration — 87%+ accuracy on accident detection',
      'Flask API development — real-time frame processing endpoints',
      'OpenCV frame extraction — optimized video stream handling',
      'Confidence validation system — filtering false positives',
      'Alert trigger mechanism — Telegram integration for notifications',
    ],
    tech: ['Python', 'Flask', 'YOLOv8', 'OpenCV'],
    github: 'https://github.com/Maddymahesh407/Accident-Detection',
    img: null,
    workflow: true,
    diagramType: 'accident',
    accentColor: '#a78bfa',
    status: 'Open Source',
    statusColor: '#34d399',
    type: 'solo',
  },
]

const collaborative = [
  {
    title: 'AI Threat Detection System — MORO',
    subtitle: 'Computer Vision · Company Project',
    desc: 'Real-time threat detection system using YOLOv8 models for security surveillance. Classifies threats including fire, robbery, suspicious gestures, and animal intrusions. Designed for live camera stream processing with instant alert generation.',
    contributions: [
      'Multi-threat classification system — Fire/Robbery/Animal/Gesture detection',
      'Real-time inference pipeline — optimized for live camera feeds',
      'Backend event engine — threat logging and alert generation',
      'Monitoring dashboard — threat history and analytics',
      'Alert system — instant notification workflow to security team',
    ],
    tech: ['Python', 'YOLOv8', 'Node.js', 'Firebase'],
    github: null,
    img: null,
    workflow: true,
    diagramType: 'moro',
    accentColor: '#f472b6',
    status: 'Private',
    statusColor: '#f59e0b',
    type: 'collab',
    teamSize: 2,
  },
  {
    title: 'Namba Ooru TN',
    subtitle: 'Full-Stack Web Application · Team Project',
    desc: 'A collaborative full-stack web application built with a teammate. The platform serves local community information for Tamil Nadu. I contributed to frontend pages, backend integration, Firebase configuration, authentication flow, and overall project structure management.',
    contributions: [
      'Frontend pages — layout, UI components, and responsive design',
      'Backend integration — connecting client to server-side logic',
      'Firebase setup — Firestore database and hosting configuration',
      'Authentication flow — Firebase Auth integration for user sign-in',
      'Project structure — folder organisation and code conventions',
    ],
    tech: ['Node.js', 'JavaScript', 'HTML/CSS', 'Firebase'],
    github: 'https://github.com/Maddymahesh407/namba-ooru-tn',
    img: null,
    workflow: true,
    diagramType: 'namba',
    accentColor: '#60a5fa',
    status: 'Collaborative',
    statusColor: '#60a5fa',
    type: 'collab',
    teamSize: 2,
  },
]

const prototypes = [
  {
    title: 'WhatsApp Printing Automation System',
    subtitle: 'Backend Automation · Company Project',
    desc: 'Prototype concept integrating WhatsApp Business API with a backend queue and IoT agent to process print jobs. Webhook-driven architecture with Firebase for state management and a Raspberry Pi agent for physical printing.',
    contributions: [
      'WhatsApp Business API integration — file upload workflow',
      'Backend server implementation — Node.js webhook processing',
      'File validation & queue handling — robust job scheduling',
      'Payment gateway integration — transaction processing',
      'Raspberry Pi print agent — IoT device communication',
      'Status notification system — user confirmation workflow',
    ],
    tech: ['Node.js', 'Firebase', 'Webhooks', 'Raspberry Pi'],
    github: null,
    img: null,
    workflow: true,
    diagramType: 'whatsapp',
    accentColor: '#f59e0b',
    status: 'Private',
    statusColor: '#f59e0b',
    type: 'solo',
  },
]

// ─── Icons ────────────────────────────────────────────────────────────────────

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0110 0v4"/>
    </svg>
  )
}

// ─── Shared sub-components ────────────────────────────────────────────────────

function StatusBadge({ status, statusColor }) {
  return (
    <div style={{
      position: 'absolute', top: '0.75rem', right: '0.75rem',
      fontSize: '0.68rem', fontWeight: 600, padding: '0.2rem 0.6rem',
      borderRadius: '999px',
      background: `${statusColor}20`,
      border: `1px solid ${statusColor}40`,
      color: statusColor,
      backdropFilter: 'blur(8px)',
      zIndex: 2,
    }}>
      {status}
    </div>
  )
}

function LeftBadge({ children }) {
  return (
    <div style={{
      position: 'absolute', top: '0.75rem', left: '0.75rem',
      fontSize: '0.68rem', fontWeight: 600, padding: '0.2rem 0.6rem',
      borderRadius: '999px',
      background: 'rgba(6,9,16,0.8)',
      border: '1px solid rgba(255,255,255,0.12)',
      color: 'var(--muted)',
      backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', gap: '0.3rem',
      zIndex: 2,
    }}>
      {children}
    </div>
  )
}

function PlaceholderThumb({ accentColor, initials }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: `linear-gradient(135deg, ${accentColor}10 0%, rgba(6,9,16,0.95) 100%)`,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* grid lines */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(${accentColor}08 1px, transparent 1px),
                          linear-gradient(90deg, ${accentColor}08 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
      }} />
      {/* monogram */}
      <div style={{
        position: 'relative', zIndex: 1,
        width: 52, height: 52, borderRadius: 12,
        background: `${accentColor}18`,
        border: `1px solid ${accentColor}35`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 800, fontSize: '1rem', color: accentColor,
        letterSpacing: '-0.02em',
      }}>
        {initials}
      </div>
      <div style={{ position: 'relative', zIndex: 1, fontSize: '0.7rem', color: 'var(--muted-2)', fontWeight: 500 }}>
        Screenshot coming soon
      </div>
    </div>
  )
}

function ContributionsList({ contributions, accentColor, expanded, onToggle }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <button
        onClick={onToggle}
        style={{
          display: 'flex', alignItems: 'center', gap: '0.4rem',
          fontSize: '0.78rem', fontWeight: 600, color: accentColor,
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          marginBottom: expanded ? '0.75rem' : 0,
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ transition: 'transform 0.2s', transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)' }}
          aria-hidden>
          <polyline points="9 18 15 12 9 6"/>
        </svg>
        My contributions ({contributions.length})
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            style={{ listStyle: 'none', padding: 0, margin: 0, overflow: 'hidden',
              display: 'flex', flexDirection: 'column', gap: '0.45rem' }}
          >
            {contributions.map(c => (
              <li key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
                fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                <span style={{
                  marginTop: '0.15rem', width: 18, height: 18, borderRadius: 5, flexShrink: 0,
                  background: `${accentColor}15`, border: `1px solid ${accentColor}25`,
                  color: accentColor, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <CheckIcon />
                </span>
                {c}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

function CardActions({ github, localBuild }) {
  if (github) {
    return (
      <>
        <a href={github} target="_blank" rel="noreferrer" className="btn-ghost"
          style={{ flex: 1, justifyContent: 'center', minWidth: 100 }}>
          <GitHubIcon /> Source
        </a>
        {localBuild ? (
          <div style={{
            flex: 1, minWidth: 100,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
            padding: '0.5rem 0.9rem', borderRadius: 'var(--radius-sm)',
            background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
            color: '#f59e0b', fontSize: '0.82rem', fontWeight: 500,
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
            </svg>
            Local Build
          </div>
        ) : (
          <a href={github} target="_blank" rel="noreferrer" className="btn-primary"
            style={{ flex: 1, justifyContent: 'center', minWidth: 100 }}>
            <ExternalIcon /> View Repo
          </a>
        )}
      </>
    )
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem',
      color: 'var(--muted-2)', fontSize: '0.82rem' }}>
      <LockIcon />
      Private prototype — not publicly available
    </div>
  )
}

// ─── Wide Card (KishorRealty style) ──────────────────────────────────────────
// REMOVED - All cards now use standard layout

// ─── Standard Card ────────────────────────────────────────────────────────────

function ProjectCard({ p, index }) {
  const [expanded, setExpanded] = useState(false)
  const initials = p.title.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Thumbnail */}
      <div className="project-thumb">
        {p.workflow ? (
          <WorkflowDiagram type={p.diagramType} accentColor={p.accentColor} />
        ) : p.img ? (
          <>
            <img src={p.img} alt={`${p.title} preview`} loading="lazy" />
            <div className="project-thumb-overlay" aria-hidden />
          </>
        ) : (
          <PlaceholderThumb accentColor={p.accentColor} initials={initials} />
        )}
        <StatusBadge status={p.status} statusColor={p.statusColor} />
        {p.type === 'collab' && (
          <LeftBadge><UsersIcon /> {p.teamSize}-person team</LeftBadge>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem' }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: p.accentColor, marginBottom: '0.4rem' }}>
          {p.subtitle}
        </div>

        <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.65rem' }}>
          {p.title}
        </h3>

        <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          {p.desc}
        </p>

        {p.contributions && (
          <ContributionsList
            contributions={p.contributions}
            accentColor={p.accentColor}
            expanded={expanded}
            onToggle={() => setExpanded(v => !v)}
          />
        )}

        <div className="flex flex-wrap gap-2" style={{ marginBottom: '1.25rem' }}>
          {p.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '1rem',
          borderTop: '1px solid var(--border)', flexWrap: 'wrap' }}>
          <CardActions github={p.github} localBuild={p.localBuild} />
        </div>
      </div>
    </motion.article>
  )
}

// ─── Category Header ──────────────────────────────────────────────────────────

function CategoryHeader({ label, title, desc, index }) {
  return (
    <motion.div
      style={{ marginBottom: '1.5rem' }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
        <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)', margin: 0, whiteSpace: 'nowrap' }}>
          {title}
        </h3>
        <div style={{ height: 1, flex: 1, background: 'var(--border)' }} />
        <span style={{ fontSize: '0.72rem', color: 'var(--muted-2)', fontWeight: 500, whiteSpace: 'nowrap' }}>
          {label}
        </span>
      </div>
      {desc && (
        <p style={{ color: 'var(--muted-2)', fontSize: '0.82rem', margin: 0 }}>{desc}</p>
      )}
    </motion.div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section id="projects" aria-label="Projects" style={{ padding: '5rem 0' }}>
      <div className="section-container">

        {/* Section header */}
        <div className="flex flex-wrap items-end justify-between gap-4" style={{ marginBottom: '3.5rem' }}>
          <div>
            <div className="section-label">Work</div>
            <h2 className="section-title">Projects</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: '0.5rem', maxWidth: 480 }}>
              Engineering-focused projects with detailed system architecture. Client work, solo builds, team collaborations, and internal prototypes showcasing real-world development workflows.
            </p>
          </div>
          <a href="https://github.com/Maddymahesh407" target="_blank" rel="noreferrer" className="btn-ghost">
            <GitHubIcon /> GitHub profile
          </a>
        </div>

        {/* ── 1. Featured Projects ── */}
        <div style={{ marginBottom: '3.5rem' }}>
          <CategoryHeader
            label={`${featured.length} project${featured.length !== 1 ? 's' : ''}`}
            title="Featured Projects"
            desc="Solo builds and client work — independently developed and maintained."
            index={0}
          />
          <div className="grid md:grid-cols-2 gap-5">
            {featured.map((p, i) => <ProjectCard key={p.title} p={p} index={i} />)}
          </div>
        </div>

        {/* ── 2. Collaborative Projects ── */}
        <div style={{ marginBottom: '3.5rem' }}>
          <CategoryHeader
            label={`${collaborative.length} project${collaborative.length !== 1 ? 's' : ''}`}
            title="Collaborative & Company Projects"
            desc="Team work and internal projects — built with others or within the company. My specific contributions are listed on each card."
            index={1}
          />
          <div className="grid md:grid-cols-2 gap-5">
            {collaborative.map((p, i) => <ProjectCard key={p.title} p={p} index={i} />)}
          </div>
        </div>

        {/* ── 3. Internal / Prototype Projects ── */}
        <div>
          <CategoryHeader
            label={`${prototypes.length} project${prototypes.length !== 1 ? 's' : ''}`}
            title="Internal Prototypes"
            desc="Experimental builds and private automation systems — not publicly available."
            index={2}
          />
          <div className="grid md:grid-cols-2 gap-5">
            {prototypes.map((p, i) => <ProjectCard key={p.title} p={p} index={i} />)}
          </div>
        </div>

      </div>
    </section>
  )
}

export default React.memo(Projects)
=======
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WorkflowDiagram from '../components/WorkflowDiagram'

// ─── Project Data ─────────────────────────────────────────────────────────────

const featured = [
  {
    title: 'VKN Real Estate — Property Listing Platform',
    subtitle: 'Full-Stack Development · Client Project',
    desc: 'A business-oriented real estate web platform built for VKN Real Estate, Chennai. Covers property listing workflows, inquiry/contact flows, and a structured browsing experience across residential and commercial categories.',
    contributions: [
      'Full frontend implementation — page layouts, navigation, and property listing UI',
      'Property card system — reusable cards with pricing, location, and status badges',
      'Responsive layout — mobile-first design across all screen sizes',
      'Inquiry workflow — contact and enquiry form integration per listing',
      'Project structure — scalable folder layout, naming conventions, and asset management',
    ],
    tech: ['JavaScript', 'Node.js', 'HTML/CSS', 'Firebase'],
    github: 'https://github.com/Maddymahesh407/Realestate',
    img: null,
    workflow: true,
    diagramType: 'vkn',
    accentColor: '#34d399',
    status: 'Local Build',
    statusColor: '#f59e0b',
    type: 'client',
    localBuild: true,
  },
  {
    title: 'Accident Detection System',
    subtitle: 'Computer Vision · ML Prototype',
    desc: 'YOLO-based inference prototype with Flask API for real-time frame inference. Lightweight deployment designed for experimental live feeds — detects accidents and potential threats from video streams using advanced computer vision.',
    contributions: [
      'YOLOv8 model integration — 87%+ accuracy on accident detection',
      'Flask API development — real-time frame processing endpoints',
      'OpenCV frame extraction — optimized video stream handling',
      'Confidence validation system — filtering false positives',
      'Alert trigger mechanism — Telegram integration for notifications',
    ],
    tech: ['Python', 'Flask', 'YOLOv8', 'OpenCV'],
    github: 'https://github.com/Maddymahesh407/Accident-Detection',
    img: null,
    workflow: true,
    diagramType: 'accident',
    accentColor: '#a78bfa',
    status: 'Open Source',
    statusColor: '#34d399',
    type: 'solo',
  },
]

const collaborative = [
  {
    title: 'AI Threat Detection System — MORO',
    subtitle: 'Computer Vision · Company Project',
    desc: 'Real-time threat detection system using YOLOv8 models for security surveillance. Classifies threats including fire, robbery, suspicious gestures, and animal intrusions. Designed for live camera stream processing with instant alert generation.',
    contributions: [
      'Multi-threat classification system — Fire/Robbery/Animal/Gesture detection',
      'Real-time inference pipeline — optimized for live camera feeds',
      'Backend event engine — threat logging and alert generation',
      'Monitoring dashboard — threat history and analytics',
      'Alert system — instant notification workflow to security team',
    ],
    tech: ['Python', 'YOLOv8', 'Node.js', 'Firebase'],
    github: null,
    img: null,
    workflow: true,
    diagramType: 'moro',
    accentColor: '#f472b6',
    status: 'Private',
    statusColor: '#f59e0b',
    type: 'collab',
    teamSize: 2,
  },
  {
    title: 'Namba Ooru TN',
    subtitle: 'Full-Stack Web Application · Team Project',
    desc: 'A collaborative full-stack web application built with a teammate. The platform serves local community information for Tamil Nadu. I contributed to frontend pages, backend integration, Firebase configuration, authentication flow, and overall project structure management.',
    contributions: [
      'Frontend pages — layout, UI components, and responsive design',
      'Backend integration — connecting client to server-side logic',
      'Firebase setup — Firestore database and hosting configuration',
      'Authentication flow — Firebase Auth integration for user sign-in',
      'Project structure — folder organisation and code conventions',
    ],
    tech: ['Node.js', 'JavaScript', 'HTML/CSS', 'Firebase'],
    github: 'https://github.com/Maddymahesh407/namba-ooru-tn',
    img: null,
    workflow: true,
    diagramType: 'namba',
    accentColor: '#60a5fa',
    status: 'Collaborative',
    statusColor: '#60a5fa',
    type: 'collab',
    teamSize: 2,
  },
]

const prototypes = [
  {
    title: 'WhatsApp Printing Automation System',
    subtitle: 'Backend Automation · Company Project',
    desc: 'Prototype concept integrating WhatsApp Business API with a backend queue and IoT agent to process print jobs. Webhook-driven architecture with Firebase for state management and a Raspberry Pi agent for physical printing.',
    contributions: [
      'WhatsApp Business API integration — file upload workflow',
      'Backend server implementation — Node.js webhook processing',
      'File validation & queue handling — robust job scheduling',
      'Payment gateway integration — transaction processing',
      'Raspberry Pi print agent — IoT device communication',
      'Status notification system — user confirmation workflow',
    ],
    tech: ['Node.js', 'Firebase', 'Webhooks', 'Raspberry Pi'],
    github: null,
    img: null,
    workflow: true,
    diagramType: 'whatsapp',
    accentColor: '#f59e0b',
    status: 'Private',
    statusColor: '#f59e0b',
    type: 'solo',
  },
]

// ─── Icons ────────────────────────────────────────────────────────────────────

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0110 0v4"/>
    </svg>
  )
}

// ─── Shared sub-components ────────────────────────────────────────────────────

function StatusBadge({ status, statusColor }) {
  return (
    <div style={{
      position: 'absolute', top: '0.75rem', right: '0.75rem',
      fontSize: '0.68rem', fontWeight: 600, padding: '0.2rem 0.6rem',
      borderRadius: '999px',
      background: `${statusColor}20`,
      border: `1px solid ${statusColor}40`,
      color: statusColor,
      backdropFilter: 'blur(8px)',
      zIndex: 2,
    }}>
      {status}
    </div>
  )
}

function LeftBadge({ children }) {
  return (
    <div style={{
      position: 'absolute', top: '0.75rem', left: '0.75rem',
      fontSize: '0.68rem', fontWeight: 600, padding: '0.2rem 0.6rem',
      borderRadius: '999px',
      background: 'rgba(6,9,16,0.8)',
      border: '1px solid rgba(255,255,255,0.12)',
      color: 'var(--muted)',
      backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', gap: '0.3rem',
      zIndex: 2,
    }}>
      {children}
    </div>
  )
}

function PlaceholderThumb({ accentColor, initials }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: `linear-gradient(135deg, ${accentColor}10 0%, rgba(6,9,16,0.95) 100%)`,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* grid lines */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(${accentColor}08 1px, transparent 1px),
                          linear-gradient(90deg, ${accentColor}08 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
      }} />
      {/* monogram */}
      <div style={{
        position: 'relative', zIndex: 1,
        width: 52, height: 52, borderRadius: 12,
        background: `${accentColor}18`,
        border: `1px solid ${accentColor}35`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 800, fontSize: '1rem', color: accentColor,
        letterSpacing: '-0.02em',
      }}>
        {initials}
      </div>
      <div style={{ position: 'relative', zIndex: 1, fontSize: '0.7rem', color: 'var(--muted-2)', fontWeight: 500 }}>
        Screenshot coming soon
      </div>
    </div>
  )
}

function ContributionsList({ contributions, accentColor, expanded, onToggle }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <button
        onClick={onToggle}
        style={{
          display: 'flex', alignItems: 'center', gap: '0.4rem',
          fontSize: '0.78rem', fontWeight: 600, color: accentColor,
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          marginBottom: expanded ? '0.75rem' : 0,
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ transition: 'transform 0.2s', transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)' }}
          aria-hidden>
          <polyline points="9 18 15 12 9 6"/>
        </svg>
        My contributions ({contributions.length})
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            style={{ listStyle: 'none', padding: 0, margin: 0, overflow: 'hidden',
              display: 'flex', flexDirection: 'column', gap: '0.45rem' }}
          >
            {contributions.map(c => (
              <li key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
                fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                <span style={{
                  marginTop: '0.15rem', width: 18, height: 18, borderRadius: 5, flexShrink: 0,
                  background: `${accentColor}15`, border: `1px solid ${accentColor}25`,
                  color: accentColor, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <CheckIcon />
                </span>
                {c}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

function CardActions({ github, localBuild }) {
  if (github) {
    return (
      <>
        <a href={github} target="_blank" rel="noreferrer" className="btn-ghost"
          style={{ flex: 1, justifyContent: 'center', minWidth: 100 }}>
          <GitHubIcon /> Source
        </a>
        {localBuild ? (
          <div style={{
            flex: 1, minWidth: 100,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
            padding: '0.5rem 0.9rem', borderRadius: 'var(--radius-sm)',
            background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
            color: '#f59e0b', fontSize: '0.82rem', fontWeight: 500,
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
            </svg>
            Local Build
          </div>
        ) : (
          <a href={github} target="_blank" rel="noreferrer" className="btn-primary"
            style={{ flex: 1, justifyContent: 'center', minWidth: 100 }}>
            <ExternalIcon /> View Repo
          </a>
        )}
      </>
    )
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem',
      color: 'var(--muted-2)', fontSize: '0.82rem' }}>
      <LockIcon />
      Private prototype — not publicly available
    </div>
  )
}

// ─── Wide Card (KishorRealty style) ──────────────────────────────────────────
// REMOVED - All cards now use standard layout

// ─── Standard Card ────────────────────────────────────────────────────────────

function ProjectCard({ p, index }) {
  const [expanded, setExpanded] = useState(false)
  const initials = p.title.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Thumbnail */}
      <div className="project-thumb">
        {p.workflow ? (
          <WorkflowDiagram type={p.diagramType} accentColor={p.accentColor} />
        ) : p.img ? (
          <>
            <img src={p.img} alt={`${p.title} preview`} loading="lazy" />
            <div className="project-thumb-overlay" aria-hidden />
          </>
        ) : (
          <PlaceholderThumb accentColor={p.accentColor} initials={initials} />
        )}
        <StatusBadge status={p.status} statusColor={p.statusColor} />
        {p.type === 'collab' && (
          <LeftBadge><UsersIcon /> {p.teamSize}-person team</LeftBadge>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem' }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: p.accentColor, marginBottom: '0.4rem' }}>
          {p.subtitle}
        </div>

        <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.65rem' }}>
          {p.title}
        </h3>

        <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          {p.desc}
        </p>

        {p.contributions && (
          <ContributionsList
            contributions={p.contributions}
            accentColor={p.accentColor}
            expanded={expanded}
            onToggle={() => setExpanded(v => !v)}
          />
        )}

        <div className="flex flex-wrap gap-2" style={{ marginBottom: '1.25rem' }}>
          {p.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '1rem',
          borderTop: '1px solid var(--border)', flexWrap: 'wrap' }}>
          <CardActions github={p.github} localBuild={p.localBuild} />
        </div>
      </div>
    </motion.article>
  )
}

// ─── Category Header ──────────────────────────────────────────────────────────

function CategoryHeader({ label, title, desc, index }) {
  return (
    <motion.div
      style={{ marginBottom: '1.5rem' }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
        <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)', margin: 0, whiteSpace: 'nowrap' }}>
          {title}
        </h3>
        <div style={{ height: 1, flex: 1, background: 'var(--border)' }} />
        <span style={{ fontSize: '0.72rem', color: 'var(--muted-2)', fontWeight: 500, whiteSpace: 'nowrap' }}>
          {label}
        </span>
      </div>
      {desc && (
        <p style={{ color: 'var(--muted-2)', fontSize: '0.82rem', margin: 0 }}>{desc}</p>
      )}
    </motion.div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section id="projects" aria-label="Projects" style={{ padding: '5rem 0' }}>
      <div className="section-container">

        {/* Section header */}
        <div className="flex flex-wrap items-end justify-between gap-4" style={{ marginBottom: '3.5rem' }}>
          <div>
            <div className="section-label">Work</div>
            <h2 className="section-title">Projects</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: '0.5rem', maxWidth: 480 }}>
              Engineering-focused projects with detailed system architecture. Client work, solo builds, team collaborations, and internal prototypes showcasing real-world development workflows.
            </p>
          </div>
          <a href="https://github.com/Maddymahesh407" target="_blank" rel="noreferrer" className="btn-ghost">
            <GitHubIcon /> GitHub profile
          </a>
        </div>

        {/* ── 1. Featured Projects ── */}
        <div style={{ marginBottom: '3.5rem' }}>
          <CategoryHeader
            label={`${featured.length} project${featured.length !== 1 ? 's' : ''}`}
            title="Featured Projects"
            desc="Solo builds and client work — independently developed and maintained."
            index={0}
          />
          <div className="grid md:grid-cols-2 gap-5">
            {featured.map((p, i) => <ProjectCard key={p.title} p={p} index={i} />)}
          </div>
        </div>

        {/* ── 2. Collaborative Projects ── */}
        <div style={{ marginBottom: '3.5rem' }}>
          <CategoryHeader
            label={`${collaborative.length} project${collaborative.length !== 1 ? 's' : ''}`}
            title="Collaborative & Company Projects"
            desc="Team work and internal projects — built with others or within the company. My specific contributions are listed on each card."
            index={1}
          />
          <div className="grid md:grid-cols-2 gap-5">
            {collaborative.map((p, i) => <ProjectCard key={p.title} p={p} index={i} />)}
          </div>
        </div>

        {/* ── 3. Internal / Prototype Projects ── */}
        <div>
          <CategoryHeader
            label={`${prototypes.length} project${prototypes.length !== 1 ? 's' : ''}`}
            title="Internal Prototypes"
            desc="Experimental builds and private automation systems — not publicly available."
            index={2}
          />
          <div className="grid md:grid-cols-2 gap-5">
            {prototypes.map((p, i) => <ProjectCard key={p.title} p={p} index={i} />)}
          </div>
        </div>

      </div>
    </section>
  )
}

export default React.memo(Projects)
>>>>>>> e530600cdb5d7da99edfd6fca2cfbda5d92830bb
