<<<<<<< HEAD
import React from 'react'

// ─── Shared primitives ────────────────────────────────────────────────────────

function Arrow({ x1, x2, y = 55, markerId }) {
  return (
    <g>
      <defs>
        <marker id={markerId} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill="rgba(255,255,255,0.2)" />
        </marker>
      </defs>
      <line x1={x1} y1={y} x2={x2} y2={y}
        stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"
        strokeDasharray="5 4" markerEnd={`url(#${markerId})`} />
    </g>
  )
}

function Node({ cx, cy = 55, w = 88, h = 56, label, sub, color }) {
  return (
    <g>
      <rect x={cx - w / 2} y={cy - h / 2} width={w} height={h} rx={9}
        fill="rgba(255,255,255,0.025)" stroke={`${color}38`} strokeWidth="1" />
      {/* accent top bar */}
      <rect x={cx - w / 2} y={cy - h / 2} width={w} height={3} rx="2" fill={`${color}60`} />
      <text x={cx} y={cy - 5} textAnchor="middle"
        fill="#dde4f0" fontSize="10.5" fontWeight="600"
        fontFamily="Inter, system-ui, sans-serif">{label}</text>
      <text x={cx} y={cy + 12} textAnchor="middle"
        fill="#4a5568" fontSize="8.5"
        fontFamily="Inter, system-ui, sans-serif">{sub}</text>
    </g>
  )
}

function FlowLabel({ text }) {
  return (
    <text x="360" y="105" textAnchor="middle"
      fill="#2d3748" fontSize="8"
      fontFamily="Inter, system-ui, sans-serif">{text}</text>
  )
}

// ─── VKN Real Estate ──────────────────────────────────────────────────────────
// User → Browse Listings → Property Detail → Enquiry Form → Contact

function VKNDiagram() {
  const nodes = [
    { cx: 55,  label: 'User',           sub: 'Browser',           color: '#34d399' },
    { cx: 195, label: 'Listings Page',  sub: 'Filter & Browse',   color: '#34d399' },
    { cx: 360, label: 'Property Card',  sub: 'Detail view',       color: '#60a5fa' },
    { cx: 525, label: 'Enquiry Form',   sub: 'Per listing',       color: '#a78bfa' },
    { cx: 665, label: 'Contact',        sub: 'Email / WhatsApp',  color: '#f59e0b' },
  ]
  const gaps = [[100, 150], [240, 315], [405, 480], [570, 620]]
  return (
    <svg viewBox="0 0 720 115" preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
      {gaps.map(([x1, x2], i) => <Arrow key={i} x1={x1} x2={x2} markerId={`vkn${i}`} />)}
      {nodes.map(n => <Node key={n.label} cx={n.cx} label={n.label} sub={n.sub} color={n.color} />)}
      <FlowLabel text="Frontend flow — component-driven · responsive · inquiry-ready" />
    </svg>
  )
}

// ─── Accident Detection ───────────────────────────────────────────────────────
// Video Feed → OpenCV → YOLOv8 → Flask API → Telegram Alert

function AccidentDiagram() {
  const nodes = [
    { cx: 55,  label: 'Video Feed',     sub: 'Live / recorded',    color: '#f472b6' },
    { cx: 195, label: 'OpenCV',         sub: 'Frame extraction',   color: '#60a5fa' },
    { cx: 360, label: 'YOLOv8 Model',   sub: '87%+ accuracy',      color: '#a78bfa' },
    { cx: 525, label: 'Flask API',      sub: 'Inference endpoint', color: '#34d399' },
    { cx: 665, label: 'Telegram Alert', sub: 'Instant notify',     color: '#f59e0b' },
  ]
  const gaps = [[100, 150], [240, 315], [405, 480], [570, 620]]
  return (
    <svg viewBox="0 0 720 115" preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
      {gaps.map(([x1, x2], i) => <Arrow key={i} x1={x1} x2={x2} markerId={`acc${i}`} />)}
      {nodes.map(n => <Node key={n.label} cx={n.cx} label={n.label} sub={n.sub} color={n.color} />)}
      <FlowLabel text="ML pipeline — real-time detection · confidence filtering · alert system" />
    </svg>
  )
}

// ─── Namba Ooru TN ────────────────────────────────────────────────────────────
// User → Firebase Auth → Firestore → Backend API → Community UI

function NambaDiagram() {
  const nodes = [
    { cx: 55,  label: 'User',           sub: 'Sign in / Browse',  color: '#60a5fa' },
    { cx: 195, label: 'Firebase Auth',  sub: 'Authentication',    color: '#f59e0b' },
    { cx: 360, label: 'Firestore DB',   sub: 'Data layer',        color: '#f59e0b' },
    { cx: 525, label: 'Backend API',    sub: 'Node.js server',    color: '#a78bfa' },
    { cx: 665, label: 'Community UI',   sub: 'TN local info',     color: '#34d399' },
  ]
  const gaps = [[100, 150], [240, 315], [405, 480], [570, 620]]
  return (
    <svg viewBox="0 0 720 115" preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
      {gaps.map(([x1, x2], i) => <Arrow key={i} x1={x1} x2={x2} markerId={`nmb${i}`} />)}
      {nodes.map(n => <Node key={n.label} cx={n.cx} label={n.label} sub={n.sub} color={n.color} />)}
      <FlowLabel text="Full-stack flow — auth · database · backend · responsive frontend" />
    </svg>
  )
}

// ─── WhatsApp Printing ────────────────────────────────────────────────────────
// WhatsApp → Backend API → Payment → Job Queue → Raspberry Pi → Printer

function WhatsAppDiagram() {
  const nodes = [
    { cx: 55,  label: 'WhatsApp',      sub: 'Cloud API',           color: '#25d366' },
    { cx: 195, label: 'Backend API',   sub: 'Node.js + Webhooks',  color: '#60a5fa' },
    { cx: 360, label: 'Payment',       sub: 'Gateway (optional)',  color: '#a78bfa' },
    { cx: 525, label: 'Job Queue',     sub: 'Firebase',            color: '#f59e0b' },
    { cx: 665, label: 'Raspberry Pi',  sub: 'IoT → Printer',       color: '#34d399' },
  ]
  const gaps = [[100, 150], [240, 315], [405, 480], [570, 620]]
  return (
    <svg viewBox="0 0 720 115" preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
      {gaps.map(([x1, x2], i) => <Arrow key={i} x1={x1} x2={x2} markerId={`wap${i}`} />)}
      {nodes.map(n => <Node key={n.label} cx={n.cx} label={n.label} sub={n.sub} color={n.color} />)}
      <FlowLabel text="IoT automation — webhook-driven · queue-based · physical output" />
    </svg>
  )
}

// ─── MORO Threat Detection ────────────────────────────────────────────────────
// Camera Feed → YOLOv8 → Threat Classifier → Backend → Alert System

function MoroDiagram() {
  const nodes = [
    { cx: 55,  label: 'Camera Feed',   sub: 'Live stream',         color: '#f472b6' },
    { cx: 195, label: 'YOLOv8',        sub: 'Object detection',    color: '#a78bfa' },
    { cx: 360, label: 'Classifier',    sub: 'Fire/Robbery/Animal', color: '#f59e0b' },
    { cx: 525, label: 'Backend',       sub: 'Node.js + Firebase',  color: '#60a5fa' },
    { cx: 665, label: 'Alert System',  sub: 'Security notify',     color: '#34d399' },
  ]
  const gaps = [[100, 150], [240, 315], [405, 480], [570, 620]]
  return (
    <svg viewBox="0 0 720 115" preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
      {gaps.map(([x1, x2], i) => <Arrow key={i} x1={x1} x2={x2} markerId={`mro${i}`} />)}
      {nodes.map(n => <Node key={n.label} cx={n.cx} label={n.label} sub={n.sub} color={n.color} />)}
      <FlowLabel text="Real-time threat detection — multi-class · live inference · instant alerts" />
    </svg>
  )
}

// ─── Registry ─────────────────────────────────────────────────────────────────

const DIAGRAMS = {
  vkn:      VKNDiagram,
  accident: AccidentDiagram,
  namba:    NambaDiagram,
  whatsapp: WhatsAppDiagram,
  moro:     MoroDiagram,
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function WorkflowDiagram({ type = 'whatsapp', accentColor = '#60a5fa', className = '' }) {
  const Diagram = DIAGRAMS[type] || WhatsAppDiagram
  return (
    <div
      className={className}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem',
        background: `linear-gradient(135deg, ${accentColor}06 0%, rgba(7,11,18,0.95) 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
      role="img"
      aria-label="System architecture diagram"
    >
      {/* subtle grid background */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(${accentColor}06 1px, transparent 1px),
                          linear-gradient(90deg, ${accentColor}06 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
      }} />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
        <Diagram />
      </div>
    </div>
  )
}
=======
import React from 'react'

// ─── Shared primitives ────────────────────────────────────────────────────────

function Arrow({ x1, x2, y = 55, markerId }) {
  return (
    <g>
      <defs>
        <marker id={markerId} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill="rgba(255,255,255,0.2)" />
        </marker>
      </defs>
      <line x1={x1} y1={y} x2={x2} y2={y}
        stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"
        strokeDasharray="5 4" markerEnd={`url(#${markerId})`} />
    </g>
  )
}

function Node({ cx, cy = 55, w = 88, h = 56, label, sub, color }) {
  return (
    <g>
      <rect x={cx - w / 2} y={cy - h / 2} width={w} height={h} rx={9}
        fill="rgba(255,255,255,0.025)" stroke={`${color}38`} strokeWidth="1" />
      {/* accent top bar */}
      <rect x={cx - w / 2} y={cy - h / 2} width={w} height={3} rx="2" fill={`${color}60`} />
      <text x={cx} y={cy - 5} textAnchor="middle"
        fill="#dde4f0" fontSize="10.5" fontWeight="600"
        fontFamily="Inter, system-ui, sans-serif">{label}</text>
      <text x={cx} y={cy + 12} textAnchor="middle"
        fill="#4a5568" fontSize="8.5"
        fontFamily="Inter, system-ui, sans-serif">{sub}</text>
    </g>
  )
}

function FlowLabel({ text }) {
  return (
    <text x="360" y="105" textAnchor="middle"
      fill="#2d3748" fontSize="8"
      fontFamily="Inter, system-ui, sans-serif">{text}</text>
  )
}

// ─── VKN Real Estate ──────────────────────────────────────────────────────────
// User → Browse Listings → Property Detail → Enquiry Form → Contact

function VKNDiagram() {
  const nodes = [
    { cx: 55,  label: 'User',           sub: 'Browser',           color: '#34d399' },
    { cx: 195, label: 'Listings Page',  sub: 'Filter & Browse',   color: '#34d399' },
    { cx: 360, label: 'Property Card',  sub: 'Detail view',       color: '#60a5fa' },
    { cx: 525, label: 'Enquiry Form',   sub: 'Per listing',       color: '#a78bfa' },
    { cx: 665, label: 'Contact',        sub: 'Email / WhatsApp',  color: '#f59e0b' },
  ]
  const gaps = [[100, 150], [240, 315], [405, 480], [570, 620]]
  return (
    <svg viewBox="0 0 720 115" preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
      {gaps.map(([x1, x2], i) => <Arrow key={i} x1={x1} x2={x2} markerId={`vkn${i}`} />)}
      {nodes.map(n => <Node key={n.label} cx={n.cx} label={n.label} sub={n.sub} color={n.color} />)}
      <FlowLabel text="Frontend flow — component-driven · responsive · inquiry-ready" />
    </svg>
  )
}

// ─── Accident Detection ───────────────────────────────────────────────────────
// Video Feed → OpenCV → YOLOv8 → Flask API → Telegram Alert

function AccidentDiagram() {
  const nodes = [
    { cx: 55,  label: 'Video Feed',     sub: 'Live / recorded',    color: '#f472b6' },
    { cx: 195, label: 'OpenCV',         sub: 'Frame extraction',   color: '#60a5fa' },
    { cx: 360, label: 'YOLOv8 Model',   sub: '87%+ accuracy',      color: '#a78bfa' },
    { cx: 525, label: 'Flask API',      sub: 'Inference endpoint', color: '#34d399' },
    { cx: 665, label: 'Telegram Alert', sub: 'Instant notify',     color: '#f59e0b' },
  ]
  const gaps = [[100, 150], [240, 315], [405, 480], [570, 620]]
  return (
    <svg viewBox="0 0 720 115" preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
      {gaps.map(([x1, x2], i) => <Arrow key={i} x1={x1} x2={x2} markerId={`acc${i}`} />)}
      {nodes.map(n => <Node key={n.label} cx={n.cx} label={n.label} sub={n.sub} color={n.color} />)}
      <FlowLabel text="ML pipeline — real-time detection · confidence filtering · alert system" />
    </svg>
  )
}

// ─── Namba Ooru TN ────────────────────────────────────────────────────────────
// User → Firebase Auth → Firestore → Backend API → Community UI

function NambaDiagram() {
  const nodes = [
    { cx: 55,  label: 'User',           sub: 'Sign in / Browse',  color: '#60a5fa' },
    { cx: 195, label: 'Firebase Auth',  sub: 'Authentication',    color: '#f59e0b' },
    { cx: 360, label: 'Firestore DB',   sub: 'Data layer',        color: '#f59e0b' },
    { cx: 525, label: 'Backend API',    sub: 'Node.js server',    color: '#a78bfa' },
    { cx: 665, label: 'Community UI',   sub: 'TN local info',     color: '#34d399' },
  ]
  const gaps = [[100, 150], [240, 315], [405, 480], [570, 620]]
  return (
    <svg viewBox="0 0 720 115" preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
      {gaps.map(([x1, x2], i) => <Arrow key={i} x1={x1} x2={x2} markerId={`nmb${i}`} />)}
      {nodes.map(n => <Node key={n.label} cx={n.cx} label={n.label} sub={n.sub} color={n.color} />)}
      <FlowLabel text="Full-stack flow — auth · database · backend · responsive frontend" />
    </svg>
  )
}

// ─── WhatsApp Printing ────────────────────────────────────────────────────────
// WhatsApp → Backend API → Payment → Job Queue → Raspberry Pi → Printer

function WhatsAppDiagram() {
  const nodes = [
    { cx: 55,  label: 'WhatsApp',      sub: 'Cloud API',           color: '#25d366' },
    { cx: 195, label: 'Backend API',   sub: 'Node.js + Webhooks',  color: '#60a5fa' },
    { cx: 360, label: 'Payment',       sub: 'Gateway (optional)',  color: '#a78bfa' },
    { cx: 525, label: 'Job Queue',     sub: 'Firebase',            color: '#f59e0b' },
    { cx: 665, label: 'Raspberry Pi',  sub: 'IoT → Printer',       color: '#34d399' },
  ]
  const gaps = [[100, 150], [240, 315], [405, 480], [570, 620]]
  return (
    <svg viewBox="0 0 720 115" preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
      {gaps.map(([x1, x2], i) => <Arrow key={i} x1={x1} x2={x2} markerId={`wap${i}`} />)}
      {nodes.map(n => <Node key={n.label} cx={n.cx} label={n.label} sub={n.sub} color={n.color} />)}
      <FlowLabel text="IoT automation — webhook-driven · queue-based · physical output" />
    </svg>
  )
}

// ─── MORO Threat Detection ────────────────────────────────────────────────────
// Camera Feed → YOLOv8 → Threat Classifier → Backend → Alert System

function MoroDiagram() {
  const nodes = [
    { cx: 55,  label: 'Camera Feed',   sub: 'Live stream',         color: '#f472b6' },
    { cx: 195, label: 'YOLOv8',        sub: 'Object detection',    color: '#a78bfa' },
    { cx: 360, label: 'Classifier',    sub: 'Fire/Robbery/Animal', color: '#f59e0b' },
    { cx: 525, label: 'Backend',       sub: 'Node.js + Firebase',  color: '#60a5fa' },
    { cx: 665, label: 'Alert System',  sub: 'Security notify',     color: '#34d399' },
  ]
  const gaps = [[100, 150], [240, 315], [405, 480], [570, 620]]
  return (
    <svg viewBox="0 0 720 115" preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
      {gaps.map(([x1, x2], i) => <Arrow key={i} x1={x1} x2={x2} markerId={`mro${i}`} />)}
      {nodes.map(n => <Node key={n.label} cx={n.cx} label={n.label} sub={n.sub} color={n.color} />)}
      <FlowLabel text="Real-time threat detection — multi-class · live inference · instant alerts" />
    </svg>
  )
}

// ─── Registry ─────────────────────────────────────────────────────────────────

const DIAGRAMS = {
  vkn:      VKNDiagram,
  accident: AccidentDiagram,
  namba:    NambaDiagram,
  whatsapp: WhatsAppDiagram,
  moro:     MoroDiagram,
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function WorkflowDiagram({ type = 'whatsapp', accentColor = '#60a5fa', className = '' }) {
  const Diagram = DIAGRAMS[type] || WhatsAppDiagram
  return (
    <div
      className={className}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem',
        background: `linear-gradient(135deg, ${accentColor}06 0%, rgba(7,11,18,0.95) 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
      role="img"
      aria-label="System architecture diagram"
    >
      {/* subtle grid background */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(${accentColor}06 1px, transparent 1px),
                          linear-gradient(90deg, ${accentColor}06 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
      }} />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
        <Diagram />
      </div>
    </div>
  )
}
>>>>>>> e530600cdb5d7da99edfd6fca2cfbda5d92830bb
