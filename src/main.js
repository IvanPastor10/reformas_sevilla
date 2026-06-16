import './style.css'

/* ── Mobile menu ─────────────────────────────────────────── */
const menuBtn    = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
const menuIcon   = document.getElementById('menu-icon')

menuBtn?.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open')
  menuIcon.textContent = isOpen ? 'close' : 'menu'
  menuBtn.setAttribute('aria-expanded', String(isOpen))
})

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open')
    menuIcon.textContent = 'menu'
    menuBtn.setAttribute('aria-expanded', 'false')
  })
})

/* ── Header: sombra al hacer scroll ─────────────────────── */
const header = document.getElementById('header')
const onScroll = () => header?.classList.toggle('shadow-md', window.scrollY > 20)
window.addEventListener('scroll', onScroll, { passive: true })

/* ── Scroll suave para anclas internas ───────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'))
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

/* ── Animaciones fade-up al entrar en viewport ───────────── */
const fadeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        fadeObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
)

// Elementos ya en pantalla al cargar no esperan al scroll
document.querySelectorAll('.fade-up').forEach(el => {
  const rect = el.getBoundingClientRect()
  if (rect.top < window.innerHeight) {
    el.classList.add('visible')
  } else {
    fadeObserver.observe(el)
  }
})

/* ── FAQ accordion ───────────────────────────────────────── */
document.querySelectorAll('.faq-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer  = btn.nextElementSibling
    const icon    = btn.querySelector('.faq-icon')
    const isOpen  = answer.classList.contains('open')

    // Cierra todos
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'))
    document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('open'))
    document.querySelectorAll('.faq-btn').forEach(b => b.setAttribute('aria-expanded', 'false'))

    // Abre el pulsado si estaba cerrado
    if (!isOpen) {
      answer.classList.add('open')
      icon.classList.add('open')
      btn.setAttribute('aria-expanded', 'true')
    }
  })
})

/* ── Formulario: feedback visual en submit ───────────────── */
document.querySelector('#contact-form')?.addEventListener('submit', e => {
  e.preventDefault()
  const btn = e.target.querySelector('[type="submit"]')
  const original = btn.textContent
  btn.textContent = 'Enviando…'
  btn.disabled = true
  // Aquí conectarías tu backend o servicio de formularios
  setTimeout(() => {
    btn.textContent = '¡Enviado! Te contactamos pronto.'
    btn.classList.replace('bg-primary', 'bg-green-700')
  }, 1200)
})
