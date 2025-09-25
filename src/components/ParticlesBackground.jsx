import React, { useCallback, useMemo, useEffect } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'

const ParticlesBackground = ({ density = 300 }) => {
  const init = useCallback(async (engine) => {
    try {
      // Use slim engine (compatible with react-tsparticles v2.x)
      await loadSlim(engine)
    } catch (e) {
      console.error('Particles init failed:', e)
    }
  }, [])

  const loaded = useCallback((container) => {
    // Ensure correct sizing & start on first paint
    requestAnimationFrame(() => {
      container?.canvas?.size?.()
      container?.play?.()
      window.dispatchEvent(new Event('resize'))
    })
  }, [])

  const options = useMemo(() => ({
    fullScreen: { enable: true, zIndex: 0 }, // attach to <body> as background
    background: { color: 'transparent' },
    fpsLimit: 60,
    detectRetina: true,
    interactivity: {
      detectsOn: 'window',
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        repulse: { distance: 160, duration: 0.6, speed: 1.4, factor: 140 },
      },
    },
    particles: {
      number: { value: density, density: { enable: true, area: 900 } },
      color: { value: '#3b82f6' },
      links: { enable: true, color: '#3b82f6', distance: 140, opacity: 0.35, width: 1 },
      move: { enable: true, speed: 0.8, direction: 'none', outModes: { default: 'bounce' } },
      opacity: { value: 0.55 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3.6 } },
    },
  }), [density])

  // Fallback: trigger a resize once after mount to avoid zero-height first paint
  useEffect(() => {
    const id = requestAnimationFrame(() => window.dispatchEvent(new Event('resize')))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <Particles id="tsparticles" init={init} loaded={loaded} options={options} />
  )
}

export default ParticlesBackground
