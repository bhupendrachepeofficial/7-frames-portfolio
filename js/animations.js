/* ============================================================
   7 FRAMES — GSAP ANIMATIONS & LENIS SMOOTH SCROLL
   ============================================================ */

'use strict';

/* ── Wait for GSAP + Lenis to load ─────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  /* ── Lenis Smooth Scroll ──────────────────────────────────── */
  let lenis;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.3,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    lenis.on('scroll', ScrollTrigger.update);
  }

  /* ── Hero content reveal (after loader) ──────────────────── */
  const heroTl = gsap.timeline({ delay: 2.0 });

  heroTl
    .to('.hero-eyebrow', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
    .from('.hero-title-line', {
      y: 90,
      opacity: 0,
      duration: 1.2,
      stagger: 0.18,
      ease: 'power4.out',
    }, '-=0.5')
    .to('.hero-subtitle', { opacity: 1, duration: 0.9, ease: 'power2.out' }, '-=0.6')
    .to('.hero-ctas',     { opacity: 1, duration: 0.9, ease: 'power2.out' }, '-=0.5');

  /* ── Scroll Reveal — generic .reveal-up elements ─────────── */
  ScrollTrigger.batch('.reveal-up', {
    start:  'top 88%',
    once:   true,
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity:  1,
        y:        0,
        duration: 0.85,
        stagger:  0.12,
        ease:     'power3.out',
      });
    },
  });

  ScrollTrigger.batch('.reveal-fade', {
    start:  'top 90%',
    once:   true,
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity:  1,
        duration: 0.9,
        stagger:  0.1,
        ease:     'power2.out',
      });
    },
  });

  /* ── Navigation background on scroll ─────────────────────── */
  ScrollTrigger.create({
    start:      'top -80',
    onEnter:    () => document.getElementById('mainNav').classList.add('scrolled'),
    onLeaveBack:() => document.getElementById('mainNav').classList.remove('scrolled'),
  });

  /* ── About portrait parallax ──────────────────────────────── */
  gsap.to('.portrait-frame', {
    yPercent: -12,
    ease:     'none',
    scrollTrigger: {
      trigger: '.about-section',
      start:   'top bottom',
      end:     'bottom top',
      scrub:   1.5,
    },
  });

  /* ── Portfolio cards stagger ──────────────────────────────── */
  gsap.from('.portfolio-card', {
    opacity:  0,
    y:        60,
    duration: 0.9,
    stagger:  0.15,
    ease:     'power3.out',
    scrollTrigger: {
      trigger: '.portfolio-grid',
      start:   'top 80%',
      once:    true,
    },
  });

  /* ── Service cards stagger ────────────────────────────────── */
  gsap.from('.service-card', {
    opacity:  0,
    y:        50,
    duration: 0.8,
    stagger:  0.1,
    ease:     'power3.out',
    scrollTrigger: {
      trigger: '.services-grid',
      start:   'top 82%',
      once:    true,
    },
  });

  /* ── Featured section heading parallax ───────────────────── */
  gsap.from('.featured-section .section-heading', {
    x:       -60,
    opacity: 0,
    duration: 1,
    ease:     'power3.out',
    scrollTrigger: {
      trigger: '.featured-section',
      start:   'top 80%',
      once:    true,
    },
  });

  /* ── Brands marquee pause-on-hover already in CSS ────────── */

  /* ── Contact form reveal ──────────────────────────────────── */
  gsap.from('.contact-form', {
    x:       -50,
    opacity: 0,
    duration: 1,
    ease:     'power3.out',
    scrollTrigger: {
      trigger: '.contact-grid',
      start:   'top 82%',
      once:    true,
    },
  });
  gsap.from('.contact-details', {
    x:       50,
    opacity: 0,
    duration: 1,
    ease:     'power3.out',
    scrollTrigger: {
      trigger: '.contact-grid',
      start:   'top 82%',
      once:    true,
    },
  });

  /* ── Section heading clip reveal ─────────────────────────── */
  document.querySelectorAll('.section-heading').forEach(el => {
    gsap.from(el, {
      clipPath: 'inset(0 100% 0 0)',
      opacity:  0,
      duration: 1.1,
      ease:     'power4.out',
      scrollTrigger: {
        trigger: el,
        start:   'top 88%',
        once:    true,
      },
    });
  });

  /* ── Counter section entrance ─────────────────────────────── */
  gsap.from('.counters-grid', {
    opacity:  0,
    y:        40,
    duration: 0.9,
    ease:     'power3.out',
    scrollTrigger: {
      trigger: '.counters-grid',
      start:   'top 85%',
      once:    true,
    },
  });

  /* ── Testimonial section entrance ────────────────────────── */
  gsap.from('.testimonials-carousel', {
    opacity:  0,
    y:        50,
    duration: 1,
    ease:     'power3.out',
    scrollTrigger: {
      trigger: '.testimonials-section',
      start:   'top 80%',
      once:    true,
    },
  });

  /* ── Hero scroll indicator fade on scroll ────────────────── */
  ScrollTrigger.create({
    start: 'top -20%',
    onEnter:     () => gsap.to('.hero-scroll-indicator', { opacity: 0, duration: 0.5 }),
    onLeaveBack: () => gsap.to('.hero-scroll-indicator', { opacity: 1, duration: 0.5 }),
  });

  /* ── Gold lines entrance ──────────────────────────────────── */
  gsap.to('.gold-line-top',    { opacity: 0.45, scaleX: 1, duration: 1.2, delay: 2.4, ease: 'power2.out', transformOrigin: 'left center' });
  gsap.to('.gold-line-bottom', { opacity: 0.45, scaleX: 1, duration: 1.2, delay: 2.7, ease: 'power2.out', transformOrigin: 'right center' });
  gsap.to('.gold-line-left',   { opacity: 0.45, scaleY: 1, duration: 1.2, delay: 3.0, ease: 'power2.out', transformOrigin: 'center top' });
  gsap.to('.gold-line-right',  { opacity: 0.45, scaleY: 1, duration: 1.2, delay: 3.3, ease: 'power2.out', transformOrigin: 'center bottom' });

  /* ── Footer brand reveal ──────────────────────────────────── */
  gsap.from('.footer-brand, .footer-col', {
    opacity:  0,
    y:        30,
    duration: 0.8,
    stagger:  0.1,
    ease:     'power2.out',
    scrollTrigger: {
      trigger: '.footer-top',
      start:   'top 90%',
      once:    true,
    },
  });

  /* ── Refresh ScrollTrigger after fonts load ───────────────── */
  document.fonts.ready.then(() => ScrollTrigger.refresh());
});
