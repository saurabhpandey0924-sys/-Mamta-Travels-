/**
 * Mamta Travels - Hero Headline Cycler
 */

export function initHeadlineCycler() {
  const headlineItems = document.querySelectorAll('.headline-item');
  if (!headlineItems.length) return;

  let currentIndex = 0;
  const cycleInterval = 3800; // 3.8 seconds per slide

  setInterval(() => {
    const currentItem = headlineItems[currentIndex];
    currentItem.classList.remove('active');
    currentItem.classList.add('exit');

    // Clean up exit class after animation
    setTimeout(() => {
      currentItem.classList.remove('exit');
    }, 600);

    // Advance index
    currentIndex = (currentIndex + 1) % headlineItems.length;
    const nextItem = headlineItems[currentIndex];
    nextItem.classList.add('active');
  }, cycleInterval);
}
