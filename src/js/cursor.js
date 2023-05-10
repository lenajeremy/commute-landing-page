import gsap from 'gsap'

class Cursor {
  constructor() {
    this.links = document.querySelector('a')
    this.el = document.querySelector('.cursor')
    this.lastButton = null
  }

  initializeMovement() {
    window.addEventListener('mousemove', (e) => {
      gsap.to(this.el, {
        x: e.clientX - 16,
        y: e.clientY - 16,
        ease: 'easeout',
        duration: 0.5,
      })

      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        gsap.to(this.el, {
          scale: 3,
          opacity: 0.8,
        })

        const targetBoundingRect = e.target.getBoundingClientRect()
        const targetCenterX =
          targetBoundingRect.left + targetBoundingRect.width / 2
        const targetCenterY =
          targetBoundingRect.top + targetBoundingRect.height / 2

        if (e.target.tagName === 'BUTTON') {
          this.lastButton = e.target
          gsap.to(this.lastButton, {
            x: (e.clientX - targetCenterX) / 3,
            y: (e.clientY - targetCenterY) / 3,
          })
        }
      } else {
        gsap.to(this.el, {
          scale: 1,
          opacity: 1,
        })

        this.lastButton &&
          gsap.to(this.lastButton, {
            x: 0,
            y: 0,
          })

        this.lastButton = null
      }
    })
  }
}

export default Cursor
