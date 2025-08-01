// === Background Image Cycling ===
const backgrounds = [
  "smokey-background.png",
  "record-player-close.png",
  "mixer.png"
];

let currentIndex = 0;
const bgContainer = document.getElementById("background-container");

function setInitialBackground() {
  if (bgContainer) {
    bgContainer.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
    bgContainer.style.opacity = 1;
    bgContainer.style.transition = "opacity 1s ease";
    logStyleData();
  }
}

function changeBackground() {
  if (!bgContainer) return;
  bgContainer.style.opacity = 0;
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    bgContainer.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
    bgContainer.style.opacity = 1;
    logStyleData();
  }, 1000);
}

// === Style Logger (Replaces $0 & logs styles safely) ===
function logStyleData() {
  const bodyStyles = window.getComputedStyle(document.body);
  const backgroundContainer = document.getElementById('background-container');
  let backgroundContainerStyles = null;

  if (backgroundContainer) {
    backgroundContainerStyles = window.getComputedStyle(backgroundContainer);
  }

  const data = {
    bodyStyles: {
      padding: bodyStyles.padding,
      margin: bodyStyles.margin,
      backgroundImage: bodyStyles.backgroundImage,
      backgroundSize: bodyStyles.backgroundSize,
      backgroundRepeat: bodyStyles.backgroundRepeat,
      backgroundPosition: bodyStyles.backgroundPosition,
    },
    backgroundContainerStyles: backgroundContainerStyles ? {
      padding: backgroundContainerStyles.padding,
      margin: backgroundContainerStyles.margin,
      width: backgroundContainerStyles.width,
      height: backgroundContainerStyles.height,
      backgroundImage: backgroundContainerStyles.backgroundImage,
      backgroundSize: backgroundContainerStyles.backgroundSize,
      backgroundRepeat: backgroundContainerStyles.backgroundRepeat,
      backgroundPosition: backgroundContainerStyles.backgroundPosition,
    } : null,
    viewportWidth: window.innerWidth
  };

  console.log("Computed Style Data:", data);
}

document.addEventListener("DOMContentLoaded", function () {
  setInitialBackground();
  setInterval(changeBackground, 6000);
});

// === Hamburger Menu Toggle ===
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger?.addEventListener('click', () => {
  nav?.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// === Scroll-Based Animation Trigger ===
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  const triggerPoint = window.innerHeight * 0.9;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerPoint) {
      section.classList.add('scroll-reveal');
      section.style.opacity = 1;
    } else {
      section.classList.remove('scroll-reveal');
      section.style.opacity = 0.8;
    }
  });
});
