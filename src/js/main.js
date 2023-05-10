import { preloadImages, setupLenis } from './utils'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Cursor from './cursor'

gsap.registerPlugin(ScrollTrigger)

let galleryBackButton = document.querySelector('.button-back')
let galleryForwardButton = document.querySelector('.button-forward')
let galleryItems = document.querySelectorAll('.gallery-item')
let galleryContainer = document.querySelector('.gallery-main')
let activeGalleryItemIndex = galleryItems.length - 1

galleryBackButton.addEventListener('click', () => {
  const tl = gsap.timeline()
  const currentActiveElement = galleryItems[activeGalleryItemIndex]

  //   ar.unshift(ar[ar.length - 1]);
  // ar = ar.slice(0, 4)

  tl.to(currentActiveElement, {
    rotate: '-270deg',
    x: -1000,
    opacity: 0.5,
    scale: 0.3,
    onComplete: () => {
      // currentActiveElement.remove()
      galleryItems.unshift(ar[ar.length - 1])
      galleryItems = galleryItems.slice(0, 4)

      // clone the galleryContainer
      const newGalleryContainerNode = document.cloneNode(galleryContainer)

      // clear all the children in the cloned container
      newGalleryContainerNode.childNodes.forEach((node) => node.remove())

      // add the rearranged children to the cloned gallery container
      galleryItems.forEach((child) =>
        newGalleryContainerNode.appendChild(child),
      )

      document.replaceChild(galleryContainer, newGalleryContainerNode)

      alert('replaced')
    },
  })
})

galleryForwardButton.addEventListener('click', () => {
  const tl = gsap.timeline()

  //   ar.unshift(ar[ar.length - 1]);
  // ar = ar.slice(0, 4)

  tl.to(galleryItems[activeGalleryItemIndex], {
    rotate: '270deg',
    x: 1000,
    opacity: 0.5,
    scale: 0.3,
  })
})

class Home {
  constructor() {
    this.loaderElement = document.querySelector('.loader')
    this.mainContainerElement = document.querySelector('.main-page')
    this.isLoaded = false

    this.tl = gsap.timeline()
    this.initializeScroll()
    new Cursor().initializeMovement()
    this.loadAssets().then(() => this.pageAnimations())
  }

  initializeScroll() {
    setupLenis()
  }

  loadAssets() {
    return preloadImages((progress) => {
      // this.loaderElement.querySelector(
      //   '.absolute',
      // ).innerHTML = `<h1 class = ' text-6xl text-center'>${progress
      //   .toString()
      //   .padStart(3, '0')}%</h1>`

      this.tl.to(this.loaderElement.querySelector('.progress-container'), {
        y: Math.floor(progress / 10) * -108,
        duration: 1,
      })

      if (progress === 100) {
        this.tl.to('.loader .absolute h1', { opacity: 0, ease: 'easeinout' })
        this.tl.to('.loader', {
          height: 0,
          opacity: 0,
          onComplete: () => document.body.classList.remove('not-loaded'),
        })
        // document.body.classList.remove('not-loaded')
      }
    })
  }

  pageAnimations() {
    this.tl.from('.hero h3 span', { opacity: 0, y: -30, stagger: 0.25 })
    this.tl.from('.hero button', { opacity: 0, duration: 1 })
    this.tl.from('header', { y: -20, opacity: 0, duration: 1 })


    this.tl.to('.hero', {
      scrollTrigger: {
        scrub: true,
        trigger: '.hero',
        start: 'top',
      }, // start the animation when ".box" enters the viewport (once)
      backgroundPosition: '0px 300px',
    })

    this.tl.to('.commute-text-container', {
      scrollTrigger: {
        scrub: true,
        trigger: '.hero',
        start: 'top',
      },
      xPercent: '-50',
    })

    this.tl.to('.marquee', {
      scrollTrigger: {
        trigger: '.marquee',
        pin: true,
      },
      x: '-1155px',
      repeat: -1,
      duration: 10,
      ease: 'linear',
    })

    this.tl.from('.section-2 h3', {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.section-2',
        start: 'top 80%',
        toggleActions: 'restart none none none',
      },
    })
  }
}

const home = new Home()
