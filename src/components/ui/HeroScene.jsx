import { useEffect, useRef } from 'react'

export default function HeroScene() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (window.matchMedia('(max-width: 1080px)').matches) return undefined

    let cancelled = false
    let destroyScene = () => {}

    const initScene = async () => {
      const THREE = await import('three')
      if (cancelled) return

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const isMobile = window.matchMedia('(max-width: 760px)').matches
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
      camera.position.set(0, 0, 8)

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile, powerPreference: 'high-performance' })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.35 : 1.75))
      renderer.outputColorSpace = THREE.SRGBColorSpace
      container.appendChild(renderer.domElement)

      const group = new THREE.Group()
      scene.add(group)

      const coreGeometry = new THREE.IcosahedronGeometry(2.15, 2)
      const coreMaterial = new THREE.MeshBasicMaterial({ color: 0x90f0d0, wireframe: true, transparent: true, opacity: 0.28 })
      const core = new THREE.Mesh(coreGeometry, coreMaterial)
      core.rotation.set(-0.25, 0.4, 0.08)
      group.add(core)

      const innerGeometry = new THREE.IcosahedronGeometry(1.62, 1)
      const innerMaterial = new THREE.MeshBasicMaterial({ color: 0xff8e6e, transparent: true, opacity: 0.065 })
      const inner = new THREE.Mesh(innerGeometry, innerMaterial)
      group.add(inner)

      const ringGeometry = new THREE.TorusGeometry(2.75, 0.018, 8, 160)
      const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xf2f0e9, transparent: true, opacity: 0.3 })
      const ring = new THREE.Mesh(ringGeometry, ringMaterial)
      ring.rotation.set(1.15, 0.2, 0.1)
      group.add(ring)

      const particleCount = isMobile ? 240 : 520
      const particlePositions = new Float32Array(particleCount * 3)
      for (let i = 0; i < particleCount; i += 1) {
        const radius = 3.1 + Math.random() * 2.5
        const angle = Math.random() * Math.PI * 2
        particlePositions[i * 3] = Math.cos(angle) * radius
        particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 5.8
        particlePositions[i * 3 + 2] = Math.sin(angle) * radius * 0.38
      }
      const particleGeometry = new THREE.BufferGeometry()
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
      const particleMaterial = new THREE.PointsMaterial({ color: 0x90f0d0, size: isMobile ? 0.022 : 0.028, transparent: true, opacity: 0.52 })
      const particles = new THREE.Points(particleGeometry, particleMaterial)
      group.add(particles)

      let pointerX = 0
      let pointerY = 0
      let frameId
      const clock = new THREE.Clock()

      const resize = () => {
        const { width, height } = container.getBoundingClientRect()
        renderer.setSize(width, height, false)
        camera.aspect = width / Math.max(height, 1)
        camera.updateProjectionMatrix()
      }

      const handlePointer = (event) => {
        pointerX = (event.clientX / window.innerWidth - 0.5) * 0.45
        pointerY = (event.clientY / window.innerHeight - 0.5) * 0.3
      }

      const render = () => {
        const elapsed = clock.getElapsedTime()
        if (!reducedMotion) {
          group.rotation.y += (pointerX - group.rotation.y) * 0.025
          group.rotation.x += (-pointerY - group.rotation.x) * 0.025
          core.rotation.y = elapsed * 0.095
          core.rotation.z = elapsed * 0.04
          inner.rotation.y = -elapsed * 0.075
          particles.rotation.y = elapsed * 0.018
          ring.rotation.z = elapsed * 0.025
        }
        renderer.render(scene, camera)
        frameId = window.requestAnimationFrame(render)
      }

      resize()
      render()
      window.addEventListener('resize', resize)
      if (!isMobile && !reducedMotion) window.addEventListener('pointermove', handlePointer, { passive: true })

      destroyScene = () => {
        window.cancelAnimationFrame(frameId)
        window.removeEventListener('resize', resize)
        window.removeEventListener('pointermove', handlePointer)
        coreGeometry.dispose()
        coreMaterial.dispose()
        innerGeometry.dispose()
        innerMaterial.dispose()
        ringGeometry.dispose()
        ringMaterial.dispose()
        particleGeometry.dispose()
        particleMaterial.dispose()
        renderer.dispose()
        renderer.domElement.remove()
      }
    }

    initScene()
    return () => {
      cancelled = true
      destroyScene()
    }
  }, [])

  return <div ref={containerRef} className="hero-scene" aria-hidden="true" />
}
