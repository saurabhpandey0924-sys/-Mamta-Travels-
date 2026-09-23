/**
 * Mamta Travels - Application Entry Point
 */

import { initNavbar } from './navbar.js';
import { initHeadlineCycler } from './headline-cycler.js';
import { initHeroCanvas } from './hero-canvas.js';
import { initRouteFinder } from './route-finder.js';
import { initSeatBooking } from './seat-booking.js';
import { initMockupSlider } from './mockup-slider.js';
import { initCorporateCalculator } from './corporate-calc.js';
import { initModals } from './modals.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeadlineCycler();
  initHeroCanvas();
  initRouteFinder();
  initSeatBooking();
  initMockupSlider();
  initCorporateCalculator();
  initModals();

  console.log('Mamta Travels platform initialized successfully!');
});
