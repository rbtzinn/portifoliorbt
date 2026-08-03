import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroScene() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    let cancelled = false
    let teardown = () => {}

    const createScene = () => {
      if (cancelled || !container) return

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const compact = window.matchMedia('(max-width: 720px)').matches

      try {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 50)
        camera.position.set(0, 0, compact ? 6.6 : 6.2)

        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: !compact,
          powerPreference: compact ? 'low-power' : 'high-performance',
        })
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, compact ? 1.2 : 1.65))
        renderer.outputColorSpace = THREE.SRGBColorSpace
        renderer.toneMapping = THREE.ACESFilmicToneMapping
        renderer.toneMappingExposure = 1.08
        container.appendChild(renderer.domElement)

        const group = new THREE.Group()
        group.rotation.set(-0.26, -0.38, 0.18)
        scene.add(group)

        const knotGeometry = new THREE.TorusKnotGeometry(
          1.55,
          .43,
          compact ? 96 : 176,
          compact ? 14 : 24,
          2,
          3,
        )
        const knotMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xff6b4a,
          emissive: 0x35100c,
          emissiveIntensity: .35,
          metalness: .14,
          roughness: .28,
          clearcoat: 1,
          clearcoatRoughness: .18,
        })
        const knot = new THREE.Mesh(knotGeometry, knotMaterial)
        group.add(knot)

        const wireMaterial = new THREE.MeshBasicMaterial({
          color: 0xf5f0e6,
          wireframe: true,
          transparent: true,
          opacity: .12,
        })
        const wire = new THREE.Mesh(knotGeometry, wireMaterial)
        wire.scale.setScalar(1.035)
        group.add(wire)

        const ringGeometry = new THREE.TorusGeometry(2.55, .014, 8, compact ? 96 : 180)
        const ringMaterial = new THREE.MeshBasicMaterial({ color: 0x9df0d0, transparent: true, opacity: .72 })
        const ring = new THREE.Mesh(ringGeometry, ringMaterial)
        ring.rotation.set(1.22, .2, -.08)
        group.add(ring)

        const secondRing = new THREE.Mesh(ringGeometry, ringMaterial)
        secondRing.scale.setScalar(.84)
        secondRing.rotation.set(.22, 1.08, .38)
        group.add(secondRing)

        const pointCount = compact ? 90 : 180
        const positions = new Float32Array(pointCount * 3)
        for (let index = 0; index < pointCount; index += 1) {
          const radius = 2.8 + Math.random() * 2.1
          const angle = Math.random() * Math.PI * 2
          positions[index * 3] = Math.cos(angle) * radius
          positions[index * 3 + 1] = (Math.random() - .5) * 5
          positions[index * 3 + 2] = Math.sin(angle) * radius * .35
        }
        const particleGeometry = new THREE.BufferGeometry()
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        const particleMaterial = new THREE.PointsMaterial({
          color: 0xb7a7ff,
          size: compact ? .025 : .032,
          transparent: true,
          opacity: .72,
          sizeAttenuation: true,
        })
        const particles = new THREE.Points(particleGeometry, particleMaterial)
        group.add(particles)

        const ambient = new THREE.AmbientLight(0xb7a7ff, 2.1)
        const keyLight = new THREE.DirectionalLight(0xf5f0e6, 4.4)
        const rimLight = new THREE.PointLight(0x9df0d0, 25, 12)
        keyLight.position.set(3.5, 3.8, 5)
        rimLight.position.set(-3.2, -2, 3)
        scene.add(ambient, keyLight, rimLight)

        let frameId = 0
        let pointerX = 0
        let pointerY = 0
        let visible = true
        const clock = new THREE.Clock()

        const resize = () => {
          const { width, height } = container.getBoundingClientRect()
          if (width === 0 || height === 0) return
          renderer.setSize(width, height, false)
          camera.aspect = width / height
          camera.updateProjectionMatrix()
        }

        const renderFrame = () => {
          const elapsed = clock.getElapsedTime()
          group.rotation.y += (pointerX - group.rotation.y) * .025
          group.rotation.x += (-.26 - pointerY - group.rotation.x) * .025
          knot.rotation.z = elapsed * .13
          wire.rotation.z = elapsed * .13
          wire.rotation.y = Math.sin(elapsed * .38) * .08
          ring.rotation.z = elapsed * .11
          secondRing.rotation.x = .22 + Math.sin(elapsed * .5) * .14
          particles.rotation.y = elapsed * .035
          renderer.render(scene, camera)
        }

        const loop = () => {
          if (!visible || document.hidden) {
            frameId = 0
            return
          }
          renderFrame()
          frameId = window.requestAnimationFrame(loop)
        }

        const start = () => {
          if (!reducedMotion && !frameId && visible && !document.hidden) {
            clock.getDelta()
            frameId = window.requestAnimationFrame(loop)
          }
        }

        const handlePointer = (event) => {
          pointerX = (event.clientX / window.innerWidth - .5) * .55
          pointerY = (event.clientY / window.innerHeight - .5) * .34
        }

        const handleVisibility = () => {
          if (document.hidden && frameId) {
            window.cancelAnimationFrame(frameId)
            frameId = 0
          } else {
            start()
          }
        }

        const resizeObserver = new ResizeObserver(resize)
        const intersectionObserver = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting
          if (!visible && frameId) {
            window.cancelAnimationFrame(frameId)
            frameId = 0
          } else {
            start()
          }
        }, { rootMargin: '160px' })

        resizeObserver.observe(container)
        intersectionObserver.observe(container)
        document.addEventListener('visibilitychange', handleVisibility)
        if (!compact && !reducedMotion) window.addEventListener('pointermove', handlePointer, { passive: true })

        resize()
        renderer.render(scene, camera)
        start()

        teardown = () => {
          if (frameId) window.cancelAnimationFrame(frameId)
          resizeObserver.disconnect()
          intersectionObserver.disconnect()
          document.removeEventListener('visibilitychange', handleVisibility)
          window.removeEventListener('pointermove', handlePointer)
          knotGeometry.dispose()
          knotMaterial.dispose()
          wireMaterial.dispose()
          ringGeometry.dispose()
          ringMaterial.dispose()
          particleGeometry.dispose()
          particleMaterial.dispose()
          renderer.dispose()
          renderer.domElement.remove()
        }
      } catch {
        container.classList.add('hero-scene--fallback')
      }
    }

    createScene()

    return () => {
      cancelled = true
      teardown()
    }
  }, [])

  return <div ref={containerRef} className="hero-scene" aria-hidden="true" />
}
