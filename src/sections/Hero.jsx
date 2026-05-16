import React from 'react'
import { motion } from 'framer-motion'
import profileImg from '../assets/profile.jpeg'
// Profile photo — P Mahesh Kumar

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }
})

function Hero() {
  return (
    <section id="home" aria-label="Hero" style={{ paddingTop: '6rem', paddingBottom: '4.5rem' }}>
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: Text ── */}
          <div className="flex-1 min-w-0 w-full">

            {/* Status badge */}
            <motion.div {...fadeUp(0)}>
              <div className="hero-badge">
                <span className="dot" aria-hidden />
                Available for internships &amp; roles
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1 className="hero-title" {...fadeUp(0.07)}>
              Hi, I'm{' '}
              <span className="accent-word">Mahesh</span>
              <br />
              Kumar
            </motion.h1>

            {/* Role line */}
            <motion.p
              className="mono"
              style={{
                color: 'var(--muted)',
                fontSize: '0.85rem',
                marginTop: '0.9rem',
                marginBottom: '1.1rem',
                lineHeight: 1.5,
              }}
              {...fadeUp(0.13)}
            >
              <span style={{ color: 'var(--accent)' }}>const</span>{' '}
              <span style={{ color: '#60a5fa' }}>role</span>{' '}
              <span style={{ color: 'var(--muted-2)' }}>=</span>{' '}
              <span style={{ color: '#86efac' }}>"Full-stack Developer · Team Lead @ Infiposts"</span>
            </motion.p>

            {/* Description */}
            <motion.p className="hero-sub" {...fadeUp(0.17)}>
              MCA student at REVA University and Full Stack Developer with production experience
              in backend systems, AI-based automation, and IoT. Currently leading development
              of MORO — a robotics-based product — at Infiposts.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-3"
              style={{ marginTop: '1.75rem' }}
              {...fadeUp(0.22)}
            >
              <a href="#projects" className="btn-primary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                </svg>
                View Projects
              </a>
              <a href="/resume.pdf" className="btn-outline">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </a>
              <a href="#contact" className="btn-ghost">Let's talk →</a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="flex gap-6 sm:gap-8"
              style={{
                marginTop: '2rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid var(--border)',
              }}
              {...fadeUp(0.28)}
            >
              {[
                { num: '6+',     lbl: 'Projects built' },
                { num: '~6 mo',  lbl: 'Industry internships' },
                { num: 'AI-900', lbl: 'Azure certified' },
              ].map(s => (
                <div key={s.lbl} className="hero-stat">
                  <span className="num">{s.num}</span>
                  <span className="lbl">{s.lbl}</span>
                </div>
              ))}
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              className="hidden sm:flex items-center gap-3"
              style={{ marginTop: '2rem', color: 'var(--muted-2)', fontSize: '0.75rem' }}
              {...fadeUp(0.33)}
            >
              <div className="scroll-mouse" aria-hidden>
                <div className="wheel" />
              </div>
              Scroll to explore
            </motion.div>
          </div>

          {/* ── Right: Profile ── */}
          <motion.div
            className="flex-shrink-0 flex flex-col items-center gap-5"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Avatar with premium ring */}
            <div className="profile-ring">
              <img
                src={profileImg}
                alt="P Mahesh Kumar — professional profile photo"
                style={{ objectPosition: 'top center' }}
              />
            </div>

            {/* Info card */}
            <div
              className="card"
              style={{ width: '210px', padding: '1.1rem 1.25rem', textAlign: 'center' }}
            >
              <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                P Mahesh Kumar
              </div>
              <div style={{ color: 'var(--muted)', fontSize: '0.78rem', marginBottom: '0.9rem' }}>
                MCA · Team Lead @ Infiposts
              </div>
              <div className="flex gap-2">
                <a
                  href="https://github.com/Maddymahesh407"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                  style={{ flex: 1, justifyContent: 'center', fontSize: '0.75rem', padding: '0.38rem 0.4rem' }}
                  aria-label="GitHub profile"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/maheshdevi"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                  style={{ flex: 1, justifyContent: 'center', fontSize: '0.75rem', padding: '0.38rem 0.4rem' }}
                  aria-label="LinkedIn profile"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: 'var(--muted-2)' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Bangalore, India
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default React.memo(Hero)
