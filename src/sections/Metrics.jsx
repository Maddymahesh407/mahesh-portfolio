import React, { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const metrics = [
  { value: 500, prefix: '', suffix: '+', cap: 'Daily API requests' },
  { value: 5,   prefix: '', suffix: '+', cap: 'REST APIs built' },
  { value: 60,  prefix: '~', suffix: '%', cap: 'Manual intervention reduced' },
  { value: 87,  prefix: '', suffix: '%+', cap: 'Accident detection accuracy' },
  { value: 35,  prefix: '~', suffix: '%', cap: 'False-positive reduction' },
]

function Counter({ value, prefix, suffix, run, reduce }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    if (reduce || !run) return
    let raf
    const start = performance.now()
    const dur = 1100
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, value, reduce])

  return <span className="val">{prefix}{reduce ? value : n}{suffix}</span>
}

function Metrics() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const [run, setRun] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setRun(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="impact" aria-label="Impact metrics" style={{ padding: '5rem 0' }}>
      <div className="section-container">
        <div className="section-head">
          <div className="section-label">Impact</div>
          <h2 className="section-title">Measured results</h2>
          <p className="lead">Verified from production work during internship and project delivery.</p>
        </div>

        <div className="metric-grid" ref={ref}>
          {metrics.map(m => (
            <div className="metric" key={m.cap}>
              <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} run={run} reduce={reduce} />
              <div className="cap">{m.cap}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default React.memo(Metrics)
