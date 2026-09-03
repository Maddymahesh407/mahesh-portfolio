import { Suspense, lazy } from 'react'
import PageTransition from './components/PageTransition'
import Spinner from './components/Spinner'
import Navbar from './components/Navbar'

const Hero           = lazy(() => import('./sections/Hero'))
const About          = lazy(() => import('./sections/About'))
const WhatIBuild     = lazy(() => import('./sections/WhatIBuild'))
const Metrics        = lazy(() => import('./sections/Metrics'))
const Experience     = lazy(() => import('./sections/Experience'))
const Projects       = lazy(() => import('./sections/Projects'))
const Skills         = lazy(() => import('./sections/Skills'))
const Certifications = lazy(() => import('./sections/Certifications'))
const WhyHireMe      = lazy(() => import('./sections/WhyHireMe'))
const Contact        = lazy(() => import('./sections/Contact'))
const Footer         = lazy(() => import('./sections/Footer'))

function Divider() {
  return <div className="section-divider" aria-hidden />
}

function App() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', position: 'relative' }}>
      <div className="ambient-bg" aria-hidden />

      <a href="#main" className="skip-link">Skip to content</a>

      <Navbar />

      <main id="main" tabIndex={-1} style={{ position: 'relative', zIndex: 1 }}>
        <PageTransition>
          <Suspense fallback={<Spinner />}>
            <Hero />
            <Divider />
            <About />
            <Divider />
            <WhatIBuild />
            <Divider />
            <Metrics />
            <Divider />
            <Experience />
            <Divider />
            <Projects />
            <Divider />
            <Skills />
            <Divider />
            <Certifications />
            <Divider />
            <WhyHireMe />
            <Divider />
            <Contact />
            <Footer />
          </Suspense>
        </PageTransition>
      </main>
    </div>
  )
}

export default App
