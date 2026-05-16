import React, { useEffect, useRef, useState, useCallback } from 'react'

export default function ProjectModal({ isOpen, onClose, images = [], startIndex = 0, project }){
  const [index, setIndex] = useState(startIndex)
  const overlayRef = useRef(null)

  useEffect(()=>{ if(isOpen) setIndex(startIndex) },[isOpen, startIndex])

  const onKey = useCallback((e)=>{
    if(!isOpen) return
    if(e.key === 'Escape') onClose()
    if(e.key === 'ArrowLeft') setIndex(i => (i - 1 + images.length) % images.length)
    if(e.key === 'ArrowRight') setIndex(i => (i + 1) % images.length)
  },[isOpen, images.length, onClose])

  useEffect(()=>{
    document.addEventListener('keydown', onKey)
    return ()=> document.removeEventListener('keydown', onKey)
  },[onKey])

  if(!isOpen) return null

  return (
    <div className="project-modal" role="dialog" aria-modal="true" aria-label={`${project?.title} gallery`} ref={overlayRef} onMouseDown={(e)=>{ if(e.target === overlayRef.current) onClose() }}>
      <div className="project-modal__content">
        <button className="modal-close" onClick={onClose} aria-label="Close gallery">×</button>
        <div className="project-modal__header">
          <h3>{project?.title}</h3>
          <p className="muted">{project?.subtitle}</p>
        </div>
        <div className="project-modal__body">
          <div className="carousel">
            <button className="nav prev" onClick={()=>setIndex(i => (i - 1 + images.length) % images.length)} aria-label="Previous image">‹</button>
            <div className="carousel-viewport">
              {images.map((src, i)=> (
                <img key={i} src={src} alt={`${project?.title} screenshot ${i+1}`} className={`carousel-image ${i===index? 'is-active':''}`} loading="lazy" />
              ))}
            </div>
            <button className="nav next" onClick={()=>setIndex(i => (i + 1) % images.length)} aria-label="Next image">›</button>
          </div>
          <div className="carousel-footer">
            <div className="caption">{project?.description}</div>
            <div className="pager">{index + 1} / {images.length}</div>
          </div>
        </div>
        <div className="project-modal__meta">
          <h4>Highlights</h4>
          <ul>
            <li>Real-time monitoring with streaming camera input</li>
            <li>YOLO-based detection with confidence scoring</li>
            <li>Automated alert workflow via WhatsApp & webhooks</li>
            <li>Location sharing integration with Google Maps links</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
