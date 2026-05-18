/* ============================================================
   7 FRAMES â€” MAIN JS
   Gallery data, hero slideshow, modal, lightbox, cursor, particles
   ============================================================ */

'use strict';

/* â”€â”€ Gallery Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const GALLERIES = {
  wildlife: {
    cat:    'Wildlife',
    title:  'Into the Wild',
    intro:  'Raw, untamed moments captured in their natural habitat. A visual journey through the wilderness â€” from the forests of Maharashtra to the wild heartland of India.',
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
    intro:  'Commercial-grade product photography that transforms everyday objects into objects of desire. Studio precision meets creative storytelling â€” crafted for brands that demand excellence.',
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
    intro:  'Automotive photography that captures the soul of the machine â€” its lines, power, and precision. Where engineering excellence meets visual storytelling.',
    images: [
      { src: 'assets/images/automobile/automobile-1.jpg', alt: 'Automobile 01' },
      { src: 'assets/images/automobile/automobile-2.jpg', alt: 'Automobile 02' },
      { src: 'assets/images/automobile/automobile-3.jpg', alt: 'Automobile 03' },
      { src: 'assets/images/automobile/automobile-4.jpg', alt: 'Automobile 04' },
      { src: 'assets/images/automobile/automobile-5.jpg', alt: 'Automobile 05' },
    ]
  }
};

/* â”€â”€ Active Gallery State â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
let activeGalleryImages = [];
let lightboxIndex       = 0;

/* â”€â”€ DOM References â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ Loading Screen â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ Hero Slideshow â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ Mouse Glow & Custom Cursor â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ Particle Canvas â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ Navigation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ Animated Counters â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ Testimonial Carousel â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ Featured Carousel Drag â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ Gallery Modal â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ Lightbox â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ Touch swipe for lightbox â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
let touchStartX = 0;
lightbox.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
lightbox.addEventListener('touchend',   e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) {
    if (dx < 0) lightboxNext.click();
    else         lightboxPrev.click();
  }
});

/* â”€â”€ Contact form mailto fallback â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ Smooth anchor scroll â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ Boot â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initHeroSlideshow();
  initParticles();
  initNav();
  initCounters();
  initTestimonials();
  initFeaturedCarousel();
  initContactForm();
  initSmoothAnchors();

  if (window.matchMedia('(pointer: fine)').matches) {
    initCursor();
  }
});


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

