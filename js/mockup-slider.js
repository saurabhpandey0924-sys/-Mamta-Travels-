/**
 * Mamta Travels - Interactive "How it Works" Phone Mockup Carousel
 */

export function initMockupSlider() {
  const stepCards = document.querySelectorAll('.step-card');
  const appScreens = document.querySelectorAll('.app-screen');
  const progressBars = document.querySelectorAll('.step-progress-bar');

  if (!stepCards.length) return;

  let activeIndex = 0;
  let timer = null;
  const slideDuration = 5000; // 5 seconds per step

  function setActiveStep(index) {
    activeIndex = index;

    // Reset all step cards and screens
    stepCards.forEach((card, i) => {
      const bar = progressBars[i];
      if (bar) {
        bar.classList.remove('running');
        bar.style.width = '0%';
      }

      if (i === activeIndex) {
        card.classList.add('active');
        if (bar) {
          // Force reflow and start animation
          void bar.offsetWidth;
          bar.classList.add('running');
        }
      } else {
        card.classList.remove('active');
      }
    });

    appScreens.forEach((screen, i) => {
      screen.classList.toggle('active', i === activeIndex);
    });

    // Clear and restart timer
    if (timer) clearInterval(timer);
    timer = setInterval(nextStep, slideDuration);
  }

  function nextStep() {
    const nextIdx = (activeIndex + 1) % stepCards.length;
    setActiveStep(nextIdx);
  }

  // Handle manual user clicks on step cards
  stepCards.forEach((card, i) => {
    card.addEventListener('click', () => {
      setActiveStep(i);
    });
  });

  // Start carousel
  setActiveStep(0);
}
