import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import VanillaTilt from 'vanilla-tilt';

gsap.registerPlugin(ScrollTrigger);

// 1. Smooth Scrolling with Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Integrate GSAP with Lenis
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// 2. Navigation Scroll Effect
const navBar = document.querySelector('.nav-bar');
if (navBar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navBar.classList.add('scrolled');
    } else {
      navBar.classList.remove('scrolled');
    }
  });
}

// 3. Hero Parallax Effect (Mouse Move)
const heroImg = document.getElementById('hero-img');
const heroSection = document.querySelector('.hero-section');

heroSection.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 40;
  const y = (e.clientY / window.innerHeight - 0.5) * 40;

  gsap.to(heroImg, {
    x: x,
    y: y,
    rotationY: x * 0.5,
    rotationX: -y * 0.5,
    duration: 1,
    ease: 'power2.out'
  });
});

// 4. Vanilla Tilt for Vault Cards and Hero Container
VanillaTilt.init(document.querySelectorAll(".vault-card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  perspective: 1000
});

VanillaTilt.init(document.querySelectorAll("[data-tilt]"));

// 5. Scroll Animations
// Fade in Plinths
gsap.utils.toArray('.solid-plinth-section').forEach(section => {
  gsap.from(section, {
    y: 100,
    opacity: 0.8,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 50%',
      scrub: 1
    }
  });
});

// Carousel logic handled by CSS Marquee
