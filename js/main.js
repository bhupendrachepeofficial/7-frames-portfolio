/* ============================================================
   7 FRAMES — MAIN JS
   Gallery data, hero slideshow, modal, lightbox, cursor, particles
   ============================================================ */

'use strict';

/* ── Gallery Data ───────────────────────────────────────────── */
const GALLERIES = {
  wildlife: {
    cat:    'Wildlife',
    title:  'Into the Wild',
    intro:  'Raw, untamed moments captured in their natural habitat. A visual journey through the wilderness — from the forests of Maharashtra to the wild heartland of India.',
    images: [
      { src: 'assets/images/wildlife/wildlife-1.jpg',  alt: 'Wildlife 01' },
      { src: 'assets/images/wildlife/wildlife-2.jpg',  alt: 'Wildlife 02' },
      { src: 'assets/images/wildlife/wildlife-3.jpg',  alt: 'Wildlife 03' },
      { src: 'assets/images/wildlife/wildlife-4.jpg',  alt: 'Wildlife 04' },
      { src: 'assets/images/wildlife/wildlife-5.jpg',  alt: 'Wildlife 05' },
      { src: 'assets/images/wildlife/wildlife-6.jpg',  alt: 'Wildlife 06' },
      { src: 'assets/images/wildlife/wildlife-7.jpg',  alt: 'Wildlife 07' },
      { src: 'assets/images/wildlife/wildlife-8.jpg',  alt: 'Wildlife 08' },
      { src: 'assets/images/wildlife/wildlife-9.jpg',  alt: 'Wildlife 09' },
      { src: 'assets/images/wildlife/wildlife-10.jpg', alt: 'Wildlife 10' },
      { src: 'assets/images/wildlife/wildlife-11.jpg', alt: 'Wildlife 11' },
      { src: 'assets/images/wildlife/wildlife-12.jpg', alt: 'Wildlife 12' },
      { src: 'assets/images/wildlife/wildlife-13.jpg', alt: 'Wildlife 13' },
      { src: 'assets/images/wildlife/wildlife-14.jpg', alt: 'Wildlife 14' },
      { src: 'assets/images/wildlife/wildlife-15.jpg', alt: 'Wildlife 15' },
    ]
  },
  product: {
    cat:    'Product',
    title:  'Object Perfection',
    intro:  'Commercial-grade product photography that transforms everyday objects into objects of desire. Studio precision meets creative storytelling — crafted for brands that demand excellence.',
    images: [
      { src: 'assets/images/product/product-1.jpg',  alt: 'Product 01' },
      { src: 'assets/images/product/product-2.jpg',  alt: 'Product 02' },
      { src: 'assets/images/product/product-3.jpg',  alt: 'Product 03' },
      { src: 'assets/images/product/product-4.jpg',  alt: 'Product 04' },
      { src: 'assets/images/product/product-5.jpg',  alt: 'Product 05' },
      { src: 'assets/images/product/product-6.jpg',  alt: 'Product 06' },
      { src: 'assets/images/product/product-7.jpg',  alt: 'Product 07' },
      { src: 'assets/images/product/product-8.jpg',  alt: 'Product 08' },
      { src: 'assets/images/product/product-9.jpg',  alt: 'Product 09' },
      { src: 'assets/images/product/product-10.jpg', alt: 'Product 10' },
      { src: 'assets/images/product/product-11.jpg', alt: 'Product 11' },
      { src: 'assets/images/product/product-12.jpg', alt: 'Product 12' },
      { src: 'assets/images/product/product-13.jpg', alt: 'Product 13' },
      { src: 'assets/images/product/product-14.jpg', alt: 'Product 14' },
      { src: 'assets/images/product/product-15.jpg', alt: 'Product 15' },
    ]
  },
  fashion: {
    cat:    'Fashion',
    title:  'Form & Elegance',
    intro:  'Where light meets fabric and expression becomes art. High-fashion editorial and campaign photography that celebrates the human form, identity, and the beauty of couture.',
    images: [
      { src: 'assets/images/fashion/fashion-1.jpg',  alt: 'Fashion 01' },
      { src: 'assets/images/fashion/fashion-2.jpg',  alt: 'Fashion 02' },
      { src: 'assets/images/fashion/fashion-3.jpg',  alt: 'Fashion 03' },
      { src: 'assets/images/fashion/fashion-4.jpg',  alt: 'Fashion 04' },
      { src: 'assets/images/fashion/fashion-5.jpg',  alt: 'Fashion 05' },
      { src: 'assets/images/fashion/fashion-6.jpg',  alt: 'Fashion 06' },
      { src: 'assets/images/fashion/fashion-7.jpg',  alt: 'Fashion 07' },
      { src: 'assets/images/fashion/fashion-8.jpg',  alt: 'Fashion 08' },
      { src: 'assets/images/fashion/fashion-9.jpg',  alt: 'Fashion 09' },
      { src: 'assets/images/fashion/fashion-10.jpg', alt: 'Fashion 10' },
      { src: 'assets/images/fashion/fashion-11.jpg', alt: 'Fashion 11' },
      { src: 'assets/images/fashion/fashion-12.jpg', alt: 'Fashion 12' },
      { src: 'assets/images/fashion/fashion-13.jpg', alt: 'Fashion 13' },
      { src: 'assets/images/fashion/fashion-14.jpg', alt: 'Fashion 14' },
      { src: 'assets/images/fashion/fashion-15.jpg', alt: 'Fashion 15' },
      { src: 'assets/images/fashion/fashion-16.jpg', alt: 'Fashion 16' },
      { src: 'assets/images/fashion/fashion-17.jpg', alt: 'Fashion 17' },
      { src: 'assets/images/fashion/fashion-18.jpg', alt: 'Fashion 18' },
    ]
  },
  automobile: {
    cat:    'Automobile',
    title:  'Speed & Steel',
    intro:  'Automotive photography that captures the soul of the machine — its lines, power, and precision. Where engineering excellence meets visual storytelling.',
    images: [
      { src: 'assets/images/automobile/automobile-1.jpg', alt: 'Automobile 01' },
      { src: 'assets/images/automobile/automobile-2.jpg', alt: 'Automobile 02' },
      { src: 'assets/images/automobile/automobile-3.jpg', alt: 'Automobile 03' },
      { src: 'assets/images/automobile/automobile-4.jpg', alt: 'Automobile 04' },
      { src: 'assets/images/automobile/automobile-5.jpg', alt: 'Automobile 05' },
    ]
  }
};

/* ── Active Gallery State ───────────────────────────────────── */
let activeGalleryImages = [];
let lightboxIndex       = 0;

/* ── DOM References ─────────────────────────────────────────── */
const loader         = document.getElementById('loader');
const galleryModal   = document.getElementById('galleryModal');
const galleryBackdrop= document.getElementById('galleryModalBackdrop');
const galleryGrid    = document.getElementById('galleryGrid');
const galleryClose   = document.getElementById('galleryModalClose');
const galleryModalCat= document.getElementById('galleryModalCat');
const galleryTitle   = document.getElementById('galleryModalTitle');
const galleryIntro   = document.getElementById('galleryModalIntro');
const lightbox       = document.getElementById('lightbox');
const lightboxImg    = document.getElementById('lightboxImg');
const lightboxClose  = document.getElementById('lightboxClose');
const lightboxPrev   = document.getElementById('lightboxPrev');
const lightboxNext   = document.getElementById('lightboxNext');
const lightboxCounter= document.getElementById('lightboxCounter');
const cursorDot      = document.getElementById('cursorDot');
const cursorRing     = document.getElementById('cursorRing');

/* ── Loading Screen ─────────────────────────────────────────── */
function initLoader() {
  const logo    = loader.querySelector('.loader-logo');
  const barFill = loader.querySelector('.loader-bar-fill');

  gsap.to(logo, { opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out', delay: 0.2 });
  gsap.to(barFill, { width: '100%', duration: 1.6, ease: 'power2.inOut', delay: 0.4,
    onComplete: () => {
      gsap.to(loader, {
        yPercent: -100,
        duration: 0.9,
        ease: 'power3.inOut',
        delay: 0.2,
        onComplete: () => { loader.style.display = 'none'; }
      });
    }
  });
}

/* ── Hero Slideshow ─────────────────────────────────────────── */
function initHeroSlideshow() {
  const slides     = document.querySelectorAll('.hero-slide');
  const indicators = document.getElementById('slideIndicators');
  let current      = 0;
  let timer;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    indicators.appendChild(dot);
  });

  function goTo(idx) {
    slides[current].classList.remove('active');
    indicators.querySelectorAll('.slide-dot')[current].classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    indicators.querySelectorAll('.slide-dot')[current].classList.add('active');
    clearInterval(timer);
    timer = setInterval(advance, 5000);
  }

  function advance() { goTo(current + 1); }
  timer = setInterval(advance, 5000);
}

/* ── Mouse Glow & Custom Cursor ─────────────────────────────── */
function initCursor() {
  const mouseGlow = document.getElementById('mouseGlow');
  let dotX = 0, dotY = 0, ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    dotX = e.clientX;
    dotY = e.clientY;
    gsap.set(cursorDot, { x: dotX, y: dotY });

    if (mouseGlow) {
      mouseGlow.style.opacity = '0.8';
      mouseGlow.style.left = e.clientX + 'px';
      mouseGlow.style.top  = e.clientY + 'px';
    }
  });

  gsap.ticker.add(() => {
    ringX += (dotX - ringX) * 0.12;
    ringY += (dotY - ringY) * 0.12;
    gsap.set(cursorRing, { x: ringX, y: ringY });
  });

  document.querySelectorAll('a, button, .portfolio-card, .gallery-item, .featured-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
  });

  document.addEventListener('mouseleave', () => {
    if (mouseGlow) mouseGlow.style.opacity = '0';
  });
}

/* ── Particle Canvas ────────────────────────────────────────── */
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const GOLD_COLORS = ['rgba(201,168,76,', 'rgba(232,201,110,', 'rgba(139,105,20,'];
  const count = window.innerWidth < 600 ? 30 : 60;

  const particles = Array.from({ length: count }, () => ({
    x:     Math.random() * canvas.width,
    y:     Math.random() * canvas.height,
    size:  Math.random() * 2.2 + 0.4,
    vx:    (Math.random() - 0.5) * 0.4,
    vy:    (Math.random() - 0.5) * 0.4 - 0.2,
    alpha: Math.random() * 0.5 + 0.1,
    color: GOLD_COLORS[Math.floor(Math.random() * GOLD_COLORS.length)],
  }));

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha += (Math.random() - 0.5) * 0.01;
      p.alpha = Math.max(0.05, Math.min(0.65, p.alpha));

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.fill();
    });
    requestAnimationFrame(tick);
  }
  tick();
}

/* ── Navigation ─────────────────────────────────────────────── */
function initNav() {
  const nav        = document.getElementById('mainNav');
  const hamburger  = document.getElementById('hamburger');
  const drawer     = document.getElementById('navDrawer');
  const overlay    = document.getElementById('drawerOverlay');
  const drawerClose= document.getElementById('drawerClose');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openDrawer);
  drawerClose.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  drawer.querySelectorAll('.drawer-link').forEach(l => l.addEventListener('click', closeDrawer));

  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

/* ── Animated Counters ──────────────────────────────────────── */
function initCounters() {
  const counters = document.querySelectorAll('.counter-number');
  let done = false;

  const observer = new IntersectionObserver((entries) => {
    if (done || !entries[0].isIntersecting) return;
    done = true;
    counters.forEach(el => {
      const target = +el.dataset.target;
      gsap.to({ val: 0 }, {
        val: target,
        duration: 2.2,
        ease: 'power2.out',
        onUpdate: function() {
          el.textContent = Math.ceil(this.targets()[0].val);
        },
        onComplete: () => {
          el.closest('.counter-item').classList.add('counted');
        }
      });
    });
  }, { threshold: 0.6 });

  const grid = document.querySelector('.counters-grid');
  if (grid) observer.observe(grid);
}

/* ── Testimonial Carousel ───────────────────────────────────── */
function initTestimonials() {
  const track  = document.getElementById('testimonialTrack');
  const cards  = track.querySelectorAll('.testimonial-card');
  const dots   = document.querySelectorAll('.t-dot');
  let current  = 0;
  let autoTimer;

  function goTo(idx) {
    current = (idx + cards.length) % cards.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goTo(+dot.dataset.index);
      resetTimer();
    });
  });

  function resetTimer() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 4500);
  }
  resetTimer();
}

/* ── Featured Carousel Drag ─────────────────────────────────── */
function initFeaturedCarousel() {
  const carousel = document.getElementById('featuredCarousel');
  const bar      = document.getElementById('featuredProgressBar');
  if (!carousel) return;

  let isDown = false, startX, scrollLeft;

  carousel.addEventListener('mousedown', e => {
    isDown = true;
    carousel.style.userSelect = 'none';
    startX     = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });
  document.addEventListener('mouseup',   () => { isDown = false; carousel.style.userSelect = ''; });
  document.addEventListener('mousemove', e => {
    if (!isDown) return;
    const x    = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5;
    carousel.scrollLeft = scrollLeft - walk;
  });

  carousel.addEventListener('scroll', () => {
    if (!bar) return;
    const max = carousel.scrollWidth - carousel.clientWidth;
    bar.style.width = max > 0 ? ((carousel.scrollLeft / max) * 100) + '%' : '0%';
  }, { passive: true });
}

/* ── Gallery Modal ──────────────────────────────────────────── */
window.openGallery = function(category) {
  const data = GALLERIES[category];
  if (!data) return;

  activeGalleryImages = data.images;

  galleryModalCat.textContent   = data.cat;
  galleryTitle.textContent      = data.title;
  galleryIntro.textContent      = data.intro;
  galleryGrid.innerHTML         = '';

  data.images.forEach((img, idx) => {
    const item = document.createElement('div');
    item.className = 'gallery-item reveal-fade';
    item.innerHTML = `
      <img src="${img.src}" alt="${img.alt}" loading="lazy" />
      <div class="gallery-item-overlay"><i class="fas fa-expand"></i></div>
    `;
    item.addEventListener('click', () => openLightbox(idx));
    galleryGrid.appendChild(item);
  });

  galleryModal.classList.add('visible');
  galleryBackdrop.classList.add('visible');
  document.body.style.overflow = 'hidden';
  galleryModal.scrollTop = 0;

  requestAnimationFrame(() => {
    galleryGrid.querySelectorAll('.reveal-fade').forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity   = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition= 'opacity 0.5s ease, transform 0.5s ease';
        requestAnimationFrame(() => {
          el.style.opacity   = '1';
          el.style.transform = 'none';
        });
      }, i * 40);
    });
  });
};

function closeGallery() {
  galleryModal.classList.remove('visible');
  galleryBackdrop.classList.remove('visible');
  document.body.style.overflow = '';
}

galleryClose.addEventListener('click', closeGallery);
galleryBackdrop.addEventListener('click', closeGallery);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (lightbox.classList.contains('visible')) closeLightbox();
    else closeGallery();
  }
});

/* ── Lightbox ───────────────────────────────────────────────── */
function openLightbox(idx) {
  lightboxIndex = idx;
  renderLightbox();
  lightbox.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('visible');
}

function renderLightbox() {
  const img = activeGalleryImages[lightboxIndex];
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCounter.textContent =
    String(lightboxIndex + 1).padStart(2, '0') + ' / ' +
    String(activeGalleryImages.length).padStart(2, '0');
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => {
  lightboxIndex = (lightboxIndex - 1 + activeGalleryImages.length) % activeGalleryImages.length;
  renderLightbox();
});
lightboxNext.addEventListener('click', () => {
  lightboxIndex = (lightboxIndex + 1) % activeGalleryImages.length;
  renderLightbox();
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('visible')) return;
  if (e.key === 'ArrowLeft')  lightboxPrev.click();
  if (e.key === 'ArrowRight') lightboxNext.click();
});

/* ── Touch swipe for lightbox ───────────────────────────────── */
let touchStartX = 0;
lightbox.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
lightbox.addEventListener('touchend',   e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) {
    if (dx < 0) lightboxNext.click();
    else         lightboxPrev.click();
  }
});

/* ── Contact form mailto fallback ───────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    const name    = form.querySelector('#name').value;
    const email   = form.querySelector('#email').value;
    const subject = form.querySelector('#subject').value || 'Enquiry from 7 Frames Website';
    const message = form.querySelector('#message').value;
    const mailto  = `mailto:chepe.salil@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message)}`;
    window.location.href = mailto;
    e.preventDefault();
  });
}

/* ── Smooth anchor scroll ───────────────────────────────────── */
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ── Boot ───────────────────────────────────────────────────── */
/* -- Portfolio Filters ------------------------------------------------ */
function initPortfolioFilters() {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.portfolio-card[data-category]');
  if (!btns.length || !cards.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('pf-hidden');
        } else {
          card.classList.add('pf-hidden');
        }
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initHeroSlideshow();
  initParticles();
  initNav();
  initCounters();
  initTestimonials();
  initFeaturedCarousel();
  initPortfolioFilters();
  initContactForm();
  initSmoothAnchors();

  if (window.matchMedia('(pointer: fine)').matches) {
    initCursor();
  }
});

