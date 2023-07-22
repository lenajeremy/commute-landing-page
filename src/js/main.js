import { preloadImages, setupLenis } from "./utils";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Cursor from "./cursor";
import Splitting from "./splitting";

gsap.registerPlugin(ScrollTrigger);

let galleryBackButton = document.querySelector(".button-back");
let galleryForwardButton = document.querySelector(".button-forward");
let galleryItems = document.querySelectorAll(".gallery-item");
let galleryContainer = document.querySelector(".gallery-main");
let activeGalleryItemIndex = galleryItems.length - 1;

// galleryBackButton.addEventListener('click', () => {
//   const tl = gsap.timeline()
//   const currentActiveElement = galleryItems[activeGalleryItemIndex]

//   //   ar.unshift(ar[ar.length - 1]);
//   // ar = ar.slice(0, 4)

//   tl.to(currentActiveElement, {
//     rotate: '-270deg',
//     x: -1000,
//     opacity: 0.5,
//     scale: 0.3,
//     onComplete: () => {
//       // currentActiveElement.remove()
//       galleryItems.unshift(ar[ar.length - 1])
//       galleryItems = galleryItems.slice(0, 4)

//       // clone the galleryContainer
//       const newGalleryContainerNode = document.cloneNode(galleryContainer)

//       // clear all the children in the cloned container
//       newGalleryContainerNode.childNodes.forEach((node) => node.remove())

//       // add the rearranged children to the cloned gallery container
//       galleryItems.forEach((child) =>
//         newGalleryContainerNode.appendChild(child),
//       )

//       document.replaceChild(galleryContainer, newGalleryContainerNode)

//       alert('replaced')
//     },
//   })
// })

// galleryForwardButton.addEventListener('click', () => {
//   const tl = gsap.timeline()

//   //   ar.unshift(ar[ar.length - 1]);
//   // ar = ar.slice(0, 4)

//   tl.to(galleryItems[activeGalleryItemIndex], {
//     rotate: '270deg',
//     x: 1000,
//     opacity: 0.5,
//     scale: 0.3,
//   })
// })

class Home {
  constructor() {
    this.loaderElement = document.querySelector(".loader");
    this.mainContainerElement = document.querySelector(".main-page");
    this.isLoaded = false;

    this.tl = gsap.timeline();
    this.initializeScroll();
    new Cursor().initializeMovement();
    // this.loadAssets().then(() => this.pageAnimations())
    this.pageAnimations();
  }

  initializeScroll() {
    setupLenis();
  }

  loadAssets() {
    return preloadImages((progress) => {
      this.tl.to(this.loaderElement.querySelector(".progress-container"), {
        y: Math.floor(progress / 10) * -108,
        duration: 1,
        ease: "none",
      });

      if (progress === 100) {
        this.tl.to(".loader .absolute h1", { opacity: 0, ease: "easeinout" });
        this.tl.to(".loader", {
          height: 0,
          opacity: 0,
          onComplete: () => document.body.classList.remove("not-loaded"),
        });
      }
    });
  }

  pageAnimations() {
    this.tl.from(".hero h3 span", { opacity: 0, y: -30, stagger: 0.25 });
    this.tl.from(".hero button", { opacity: 0, duration: 1 });
    this.tl.from("header", { y: -20, opacity: 0, duration: 1 });

    this.tl.to(".hero", {
      scrollTrigger: {
        scrub: true,
        trigger: ".hero",
        start: "top",
      },
      backgroundPosition: "0px 300px",
      ease: "easein",
      backgroundSize: 2500,
    });

    this.tl.to(".commute-text-container", {
      scrollTrigger: {
        scrub: true,
        trigger: ".hero",
        start: "top",
      },
      xPercent: "-50",
    });

    gsap.to(".marquee", {
      scrollTrigger: {
        trigger: ".marquee",
      },
      x: "-1155px",
      repeat: -1,
      duration: 10,
      ease: "linear",
    });

    gsap.to(".cycle-image-container", {
      scrollTrigger: {
        trigger: ".cycle-image-container",
        start: "top 300px",
        pin: true,
        scrub: true,
      },
      scale: 4,
      y: 400,
      ease: "easein",
    });

    this.tl.to(".background-marquee h1:nth-of-type(1)", {
      x: -400,
      duration: 10,
      scrollTrigger: {
        trigger: ".background-marquee",
        start: "top bottom",
      },
    });
  }
}

const home = new Home();

const gridHeading = Splitting({
  target: ".section-3 .heading",
  by: "words",
})[0];

gsap.fromTo(
  gridHeading.words,
  {
    opacity: 0,
    y: 50,
  },
  {
    scrollTrigger: {
      trigger: ".section-3",
      start: "top 500px",
      end: "50px +100px",
      toggleActions: "restart none reverse none",
    },
    opacity: 1,
    y: 0,
    stagger: 0.15,
  }
);

const gridItemTitles = Splitting({
  target: ".grid-item h3",
  by: "words",
});

const gridItemDescriptions = Splitting({
  target: ".grid-item p",
  by: "words",
});

gridItemTitles.forEach((title) => {
  gsap.fromTo(
    title.words,
    {
      opacity: 0,
      y: 50,
    },
    {
      scrollTrigger: {
        trigger: title.el,
        start: "top 700px",
        toggleActions: "restart none none reverse",
      },
      opacity: 1,
      y: 0,
      stagger: 0.2,
    }
  );
});

gridItemDescriptions.forEach((description) => {
  gsap.fromTo(
    description.words,
    {
      opacity: 0,
      y: 50,
    },
    {
      scrollTrigger: {
        trigger: description.el,
        start: "top 700px",
        toggleActions: "restart none none reverse",
      },
      opacity: 1,
      y: 0,
      stagger: 0.1,
      delay: 0.5,
    }
  );
});
