function Arrow({ x1, x2, y = 55, markerId }) {
  return (
    <g>
      <defs>
        <marker id={markerId} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill="rgba(255,255,255,0.22)" />
        </marker>
      </defs>
      <line x1={x1} y1={y} x2={x2} y2={y}
        stroke="rgba(255,255,255,0.14)" strokeWidth="1.5"
        strokeDasharray="5 4" markerEnd={`url(#${markerId})`} />
    </g>
  )
}

function Node({ cx, cy = 55, w = 92, h = 56, label, sub, color }) {
  return (
    <g>
      <rect x={cx - w / 2} y={cy - h / 2} width={w} height={h} rx={9}
        fill="rgba(255,255,255,0.028)" stroke={`${color}42`} strokeWidth="1" />
      <rect x={cx - w / 2} y={cy - h / 2} width={w} height={3} rx="2" fill={`${color}66`} />
      <text x={cx} y={cy - 4} textAnchor="middle" fill="#dde4f0" fontSize="10.5" fontWeight="600"
        fontFamily="Inter, system-ui, sans-serif">{label}</text>
      <text x={cx} y={cy + 12} textAnchor="middle" fill="#5a6678" fontSize="8.5"
        fontFamily="Inter, system-ui, sans-serif">{sub}</text>
    </g>
  )
}

function Caption({ text }) {
  return (
    <text x="380" y="106" textAnchor="middle" fill="#3a4658" fontSize="8"
      fontFamily="Inter, system-ui, sans-serif">{text}</text>
  )
}

function Flow({ nodes, caption, idp }) {
  const gaps = [[100, 152], [252, 328], [428, 504], [604, 656]]
  return (
    <svg viewBox="0 0 760 118" preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
      {gaps.slice(0, nodes.length - 1).map(([x1, x2], i) => <Arrow key={i} x1={x1} x2={x2} markerId={`${idp}${i}`} />)}
      {nodes.map(n => <Node key={n.label} {...n} />)}
      <Caption text={caption} />
    </svg>
  )
}

const DIAGRAMS = {
  moro: {
    caption: 'Vision pipeline — data prep · model development · testing & evaluation',
    nodes: [
      { cx: 56,  label: 'Image / Video', sub: 'Data collection',  color: '#f472b6' },
      { cx: 204, label: 'Preprocess',    sub: 'OpenCV',           color: '#60a5fa' },
      { cx: 380, label: 'Detection',     sub: 'Object model',     color: '#a78bfa' },
      { cx: 556, label: 'Evaluation',    sub: 'Accuracy tuning',  color: '#34d399' },
      { cx: 704, label: 'MORO Robot',    sub: 'Integration',      color: '#f59e0b' },
    ],
  },
  accident: {
    caption: 'CV pipeline — real-time detection · confidence validation · alerting',
    nodes: [
      { cx: 56,  label: 'Video Stream', sub: 'Live feed',        color: '#f472b6' },
      { cx: 204, label: 'OpenCV',       sub: 'Frame processing',  color: '#60a5fa' },
      { cx: 380, label: 'YOLOv8',       sub: '87%+ accuracy',     color: '#a78bfa' },
      { cx: 556, label: 'Flask',        sub: 'Dashboard',         color: '#34d399' },
      { cx: 704, label: 'Telegram',     sub: 'Alert',             color: '#f59e0b' },
    ],
  },
  'iot-print': {
    caption: 'IoT automation — REST + webhooks · queue-based · physical output',
    nodes: [
      { cx: 96,  label: 'Backend',      sub: 'REST + webhooks',   color: '#60a5fa' },
      { cx: 300, label: 'Print Queue',  sub: 'Ordered jobs',      color: '#a78bfa' },
      { cx: 504, label: 'Raspberry Pi', sub: 'Device agent',      color: '#34d399' },
      { cx: 704, label: 'Printer',      sub: 'Output',            color: '#f59e0b' },
    ],
  },
  ebook: {
    caption: 'Flask + Firebase — auth · catalog · cart · simulated checkout',
    nodes: [
      { cx: 96,  label: 'User',        sub: 'Sign in',           color: '#60a5fa' },
      { cx: 300, label: 'Flask API',   sub: 'REST endpoints',    color: '#a78bfa' },
      { cx: 504, label: 'Firebase',    sub: 'Auth + data',       color: '#f59e0b' },
      { cx: 704, label: 'Checkout',    sub: 'Simulated',         color: '#34d399' },
    ],
  },
}

export default function WorkflowDiagram({ type = 'moro', accentColor = '#60a5fa', className = '' }) {
  const cfg = DIAGRAMS[type] || DIAGRAMS.moro
  return (
    <div
      className={className}
      style={{
        width: '100%', height: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '0.5rem',
        background: `linear-gradient(135deg, ${accentColor}08 0%, rgba(7,11,18,0.95) 100%)`,
        position: 'relative', overflow: 'hidden',
      }}
      role="img"
      aria-label={`System architecture diagram: ${cfg.nodes.map(n => n.label).join(' → ')}`}
    >
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(${accentColor}06 1px, transparent 1px), linear-gradient(90deg, ${accentColor}06 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
      }} />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
        <Flow nodes={cfg.nodes} caption={cfg.caption} idp={type.replace(/\W/g, '')} />
      </div>
    </div>
  )
}
