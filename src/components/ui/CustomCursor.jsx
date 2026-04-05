import { useRef, useEffect } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0; let req
    const onMouseMove = (e) => {
      mx = e.clientX; my = e.clientY
      if (cursorRef.current) { cursorRef.current.style.left = mx + 'px'; cursorRef.current.style.top = my + 'px' }
    }
    const animRing = () => {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12
      if (ringRef.current) { ringRef.current.style.left = rx + 'px'; ringRef.current.style.top = ry + 'px' }
      req = requestAnimationFrame(animRing)
    }
    const onMouseDown = () => document.body.classList.add('cur-click')
    const onMouseUp = () => document.body.classList.remove('cur-click')
    const onMouseOver = (e) => { const t = e.target.closest('a, button, .proj-card, .skill-card, .nav-link, .social-link, .social-card, .edu-card, .soft-pill, .tech-pill, .tag, .copy-btn, .mode-pill, .lang-pill, .theme-dot'); if (t) document.body.classList.add('cur-hover') }
    const onMouseOut = (e) => { const t = e.target.closest('a, button, .proj-card, .skill-card, .nav-link, .social-link, .social-card, .edu-card, .soft-pill, .tech-pill, .tag, .copy-btn, .mode-pill, .lang-pill, .theme-dot'); if (t) document.body.classList.remove('cur-hover') }

    window.addEventListener('mousemove', onMouseMove); window.addEventListener('mousedown', onMouseDown); window.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseover', onMouseOver); document.addEventListener('mouseout', onMouseOut)
    req = requestAnimationFrame(animRing)
    return () => {
      window.removeEventListener('mousemove', onMouseMove); window.removeEventListener('mousedown', onMouseDown); window.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseover', onMouseOver); document.removeEventListener('mouseout', onMouseOut); cancelAnimationFrame(req)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  )
}

export default CustomCursor
