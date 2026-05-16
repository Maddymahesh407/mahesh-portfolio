import React, { Suspense, lazy } from 'react'
import PageTransition from './components/PageTransition'
import Spinner from './components/Spinner'
import Navbar from './components/Navbar'

const Hero       = lazy(() => import('./sections/Hero'))
const About      = lazy(() => import('./sections/About'))
const Skills     = lazy(() => import('./sections/Skills'))
const Projects   = lazy(() => import('./sections/Projects'))
const Experience = lazy(() => import('./sections/Experience'))
const Contact    = lazy(() => import('./sections/Contact'))
const Footer     = lazy(() => import('./sections/Footer'))

function App() {

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', position: 'relative' }}>
      {/* Ambient background glow */}
      <div className="ambient-bg" aria-hidden />

      {/* Skip to content */}
      <a href="#main" className="skip-link">Skip to content</a>

      <Navbar />

      <main id="main" tabIndex={-1} style={{ position: 'relative', zIndex: 1 }}>
        <PageTransition>
          <Suspense fallback={<Spinner />}>
            <Hero />

            <div className="section-divider" />
            <About />

            <div className="section-divider" />
            <Skills />

            <div className="section-divider" />
            <Projects />

            <div className="section-divider" />
            <Experience />

            <div className="section-divider" />
            <Contact />

            <Footer />
          </Suspense>
        </PageTransition>
      </main>
    </div>
  )
}

export default App
