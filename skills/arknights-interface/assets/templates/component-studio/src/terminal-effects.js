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
  let lastTime = 0
  let x = 0
  let y = 0
  let targetX = 0
  let targetY = 0
  let visible = false
  let moving = false
  let rippleActive = false
  let rippleTimer

  function positionRing() {
    ring.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
  }

  function followPointer(time) {
    const deltaX = targetX - x
    const deltaY = targetY - y
    const ease = Math.min(0.025 * (time - lastTime), 1)
    x += deltaX * ease
    y += deltaY * ease
    lastTime = time
    positionRing()
    if (Math.abs(deltaX) > 0.1 || Math.abs(deltaY) > 0.1) {
      frame = requestAnimationFrame(followPointer)
    } else {
      x = targetX
      y = targetY
      moving = false
      frame = 0
      positionRing()
    }
  }

  function hideCursor() {
    visible = false
    layer.classList.remove('is-visible', 'is-interactive')
    cancelAnimationFrame(frame)
    frame = 0
    moving = false
    clearTimeout(rippleTimer)
    rippleActive = false
    ripple.classList.remove('is-active')
  }

  function updateTarget(event) {
    const control = event.target.closest?.('a[href], button, input, select, textarea, summary, label, [role="button"]')
    layer.classList.toggle('is-interactive', Boolean(control && !control.matches(':disabled, [aria-disabled="true"]')))
  }

  function moveCursor(event) {
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
    if (!moving) {
      moving = true
      frame = requestAnimationFrame(followPointer)
    }
  }

  function showRipple(event) {
    if (!visible || rippleActive) return
    rippleActive = true
    ripple.style.left = `${event.clientX}px`
    ripple.style.top = `${event.clientY}px`
    ripple.classList.add('is-active')
    rippleTimer = setTimeout(() => {
      rippleActive = false
      ripple.classList.remove('is-active')
    }, 500)
  }

  window.addEventListener('mousemove', moveCursor, options)
  window.addEventListener('mouseover', updateTarget, options)
  window.addEventListener('click', showRipple, options)
  window.addEventListener('mouseout', event => {
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
