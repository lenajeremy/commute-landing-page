import { setupLenis } from './utils'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

setupLenis()
gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline()

tl.from('.hero h3 span', { opacity: 0, y: -30, stagger: 0.25 })
tl.from('.hero button', { opacity: 0, duration: 1 })

gsap.to('.hero', {
  scrollTrigger: {
    scrub: true,
    trigger: '.hero',
    start: 'top',
  }, // start the animation when ".box" enters the viewport (once)
  backgroundPosition: '0px 300px',
})

gsap.to('.commute-text-container', {
  scrollTrigger: {
    scrub: true,
    trigger: '.hero',
    start: 'top',
  },
  xPercent: '-50',
})

gsap.to('.marquee', {
  scrollTrigger: {
    trigger: '.marquee',
    pin: true,
  },
  x: '-1155px',
  repeat: -1,
  duration: 10,
  ease: 'linear',
})

