/**
 * Mamta Travels - Navigation & Liquid Glass Header
 */

export function initNavbar() {
  const navbarWrapper = document.querySelector('.navbar-wrapper');
  const hamburgerBtn = document.querySelector('.nav-hamburger');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  let lastScrollY = window.scrollY;
  const scrollThreshold = 8;

  // Scroll detection to adapt liquid glass styling & smart auto-hide on scroll down
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Adapt compact liquid glass styling
    if (currentScrollY > 40) {
      navbarWrapper?.classList.add('scrolled');
    } else {
      navbarWrapper?.classList.remove('scrolled');
    }

    // Auto-hide when scrolling DOWN so it does not block the user's screen or search boxes
    // Auto-show when scrolling UP for immediate navigation access
    if (currentScrollY > 100) {
      if (currentScrollY > lastScrollY + scrollThreshold) {
        navbarWrapper?.classList.add('nav-hidden');
      } else if (currentScrollY < lastScrollY - scrollThreshold) {
        navbarWrapper?.classList.remove('nav-hidden');
      }
    } else {
      navbarWrapper?.classList.remove('nav-hidden');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });

  // Mobile drawer toggle
  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      hamburgerBtn.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}
