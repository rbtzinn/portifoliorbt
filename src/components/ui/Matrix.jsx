import { useRef, useEffect } from 'react'

const Matrix = ({ active, onEnd }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!active) return
    const canvas = canvasRef.current; const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth; canvas.height = window.innerHeight; canvas.style.opacity = '1'
    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~'.split('')
    const fontSize = 16; const columns = canvas.width / fontSize
    const drops = new Array(Math.floor(columns)).fill(1)

    const interval = setInterval(() => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.08)'; ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#0F0'; ctx.font = fontSize + 'px monospace'
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
    }, 33)
    const timeout = setTimeout(() => { canvas.style.opacity = '0'; setTimeout(() => { clearInterval(interval); onEnd() }, 1000) }, 4000)
    return () => { clearInterval(interval); clearTimeout(timeout) }
  }, [active, onEnd])

  return <canvas ref={canvasRef} id="matrix-canvas" style={{ display: active ? 'block' : 'none' }}></canvas>
}

export default Matrix
