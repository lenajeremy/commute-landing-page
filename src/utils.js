import Lenis from '@studio-freight/lenis'

export function setupLenis() {
  let lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}
