function mountCursor() {
  const controller = new AbortController()
  const options = { passive: true, signal: controller.signal }
  const layer = document.createElement('div')
  layer.className = 'terminal-cursor'
  layer.setAttribute('aria-hidden', 'true')
  layer.innerHTML = '<span class="terminal-cursor__ring"></span><span class="terminal-cursor__ripple"></span>'
  document.body.append(layer)
  const ring = layer.firstElementChild
  const ripple = layer.lastElementChild
  let frame = 0
  let previousTime = 0
  let x = 0
  let y = 0
  let targetX = 0
  let targetY = 0
  let visible = false
  let pulse

  function positionRing() {
    ring.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
  }

  function followPointer(time) {
    frame = 0
    const elapsed = previousTime ? Math.min(time - previousTime, 64) : 16
    previousTime = time
    const ease = 1 - Math.exp(-elapsed / 45)
    x += (targetX - x) * ease
    y += (targetY - y) * ease
    if (Math.hypot(targetX - x, targetY - y) < 0.1) {
      x = targetX
      y = targetY
      previousTime = 0
    } else {
      frame = requestAnimationFrame(followPointer)
    }
    positionRing()
  }

  function hideCursor() {
    visible = false
    layer.classList.remove('is-visible', 'is-interactive')
    cancelAnimationFrame(frame)
    frame = 0
    previousTime = 0
    pulse?.cancel()
  }

  function updateTarget(event) {
    const control = event.target.closest?.('a[href], button, input, select, textarea, summary, label, [role="button"]')
    layer.classList.toggle('is-interactive', Boolean(control && !control.matches(':disabled, [aria-disabled="true"]')))
  }

  function moveCursor(event) {
    if (event.pointerType !== 'mouse') return hideCursor()
    targetX = event.clientX
    targetY = event.clientY
    if (!visible) {
      x = targetX
      y = targetY
      visible = true
      positionRing()
      layer.classList.add('is-visible')
    }
    updateTarget(event)
    if (!frame) frame = requestAnimationFrame(followPointer)
  }

  function showRipple(event) {
    if (event.pointerType !== 'mouse' || event.button !== 0 || !visible) return
    ripple.style.left = `${event.clientX}px`
    ripple.style.top = `${event.clientY}px`
    pulse?.cancel()
    pulse = ripple.animate([
      { transform: 'translate(-50%, -50%) scale(.2)', opacity: 0.8 },
      { transform: 'translate(-50%, -50%) scale(1)', opacity: 0 },
    ], { duration: 500, easing: 'cubic-bezier(.22, .61, .21, 1)' })
  }

  window.addEventListener('pointermove', moveCursor, options)
  window.addEventListener('pointerover', updateTarget, options)
  window.addEventListener('pointerdown', showRipple, options)
  window.addEventListener('pointerout', event => {
    if (!event.relatedTarget) hideCursor()
  }, options)
  window.addEventListener('blur', hideCursor, options)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) hideCursor()
  }, options)
  document.addEventListener('keydown', event => {
    if (event.key === 'Tab') hideCursor()
  }, options)

  return () => {
    hideCursor()
    controller.abort()
    layer.remove()
  }
}

function mountParticles(reducedMotion) {
  const canvas = document.createElement('canvas')
  canvas.className = 'terminal-particles'
  canvas.setAttribute('aria-hidden', 'true')
  const context = canvas.getContext('2d')
  if (!context) return () => {}
  document.body.append(canvas)
  const particles = []
  let width = 0
  let height = 0
  let frame = 0

  function drawParticles() {
    context.fillStyle = '#fff'
    context.shadowColor = '#fff'
    for (const particle of particles) {
      context.shadowBlur = particle.shadowBlur
      context.shadowOffsetX = particle.shadowOffsetX
      context.shadowOffsetY = particle.shadowOffsetY
      context.beginPath()
      context.ellipse(particle.x, particle.y, particle.radiusX, particle.radiusY, particle.rotation, 0, Math.PI * 2)
      context.fill()
    }
  }

  function createParticle() {
    const radiusX = Math.random() * 1.5 + 0.5
    return {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
      velocityX: Math.random() + 1,
      velocityY: Math.random() + 0.01,
      radiusX,
      radiusY: radiusX * (Math.random() + 0.3),
      rotation: Math.PI * Math.floor(Math.random() * 2),
      shadowBlur: Math.random() * 3,
      shadowOffsetX: Math.random() * 2 - 1,
      shadowOffsetY: Math.random() * 2 - 1,
    }
  }

  function resizeParticles() {
    width = innerWidth
    height = innerHeight
    canvas.width = width
    canvas.height = height
    if (!particles.length) {
      const count = Math.floor((width + height) / 38)
      while (particles.length < count) particles.push(createParticle())
    }
    drawParticles()
  }

  function animateParticles() {
    frame = requestAnimationFrame(animateParticles)
    for (const particle of particles) {
      context.clearRect(particle.x - 6, particle.y - 6, 12, 12)
      if (particle.x < -5 || particle.y < -5) {
        particle.x = width
        particle.y = Math.floor(Math.random() * height)
      } else {
        particle.x -= particle.velocityX
        particle.y -= particle.velocityY
      }
    }
    drawParticles()
  }

  function syncMotion() {
    cancelAnimationFrame(frame)
    frame = 0
    if (!document.hidden && !reducedMotion.matches) frame = requestAnimationFrame(animateParticles)
  }

  resizeParticles()
  syncMotion()
  window.addEventListener('resize', resizeParticles, { passive: true })
  document.addEventListener('visibilitychange', syncMotion)
  reducedMotion.addEventListener('change', syncMotion)

  return () => {
    cancelAnimationFrame(frame)
    window.removeEventListener('resize', resizeParticles)
    document.removeEventListener('visibilitychange', syncMotion)
    reducedMotion.removeEventListener('change', syncMotion)
    canvas.remove()
  }
}

export function mountTerminalEffects() {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)')
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)')
  const disposeParticles = mountParticles(reducedMotion)
  let disposeCursor

  function syncCursor() {
    disposeCursor?.()
    disposeCursor = !reducedMotion.matches && finePointer.matches ? mountCursor() : undefined
  }

  syncCursor()
  finePointer.addEventListener('change', syncCursor)
  reducedMotion.addEventListener('change', syncCursor)

  return () => {
    finePointer.removeEventListener('change', syncCursor)
    reducedMotion.removeEventListener('change', syncCursor)
    disposeCursor?.()
    disposeParticles()
  }
}
