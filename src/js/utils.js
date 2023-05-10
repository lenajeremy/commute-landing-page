import Lenis from '@studio-freight/lenis'
import assets from '../../assets/assets'

export function setupLenis() {
  let lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}

export function preloadImages(updateProgress) {
  const imageUrls = Object.values(assets.images)
  let imagesLoadedCount = 0

  const _updateProgress = () => {
    imagesLoadedCount++
    let percentageCompleted = Math.floor(
      (imagesLoadedCount / imageUrls.length) * 100,
    )
    updateProgress(percentageCompleted)
  }

  return Promise.all(imageUrls.map((url) => preloadImage(url, _updateProgress)))
}

function preloadImage(src, updateProgress) {
  return new Promise((resolve) => {
    let image = new Image()
    image.onload = () => {
      updateProgress()
      resolve()
    }
    image.src = src
  })
}
