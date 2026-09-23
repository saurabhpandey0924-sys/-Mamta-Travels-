/**
 * Mamta Travels - Modals (Demo Lead, App Download QR, Cookie Consent) & Toasts
 */

export function initModals() {
  // Toast Notification helper
  window.showToast = function(message) {
    const toast = document.getElementById('global-toast');
    const toastText = document.getElementById('toast-text');
    if (!toast || !toastText) return;

    toastText.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  };

  // Corporate Demo Lead Modal
  const demoModal = document.getElementById('corporate-demo-modal');
  const closeDemoBtn = document.getElementById('close-demo-modal');
  const demoForm = document.getElementById('corporate-demo-form');

  window.openDemoModal = function() {
    demoModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeDemoModal() {
    demoModal?.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeDemoBtn?.addEventListener('click', closeDemoModal);
  demoModal?.addEventListener('click', (e) => {
    if (e.target === demoModal) closeDemoModal();
  });

  demoForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = demoForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.textContent = 'Submitting Request...';
      submitBtn.disabled = true;
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.textContent = 'Request Corporate Demo';
        submitBtn.disabled = false;
      }
      demoForm.reset();
      closeDemoModal();
      window.showToast('Corporate demo request received! Our enterprise team will call you within 2 hours.');
    }, 700);
  });

  // App Download QR & SMS Modal
  const downloadModal = document.getElementById('download-app-modal');
  const closeDownloadBtn = document.getElementById('close-download-modal');
  const smsForm = document.getElementById('sms-link-form');

  window.openDownloadModal = function() {
    downloadModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeDownloadModal() {
    downloadModal?.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeDownloadBtn?.addEventListener('click', closeDownloadModal);
  downloadModal?.addEventListener('click', (e) => {
    if (e.target === downloadModal) closeDownloadModal();
  });

  smsForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const phoneInput = document.getElementById('sms-phone-input');
    const val = (phoneInput?.value || '').trim();
    if (val.length >= 10) {
      window.showToast(`Download link sent via SMS to +91 ${val}!`);
      phoneInput.value = '';
      setTimeout(closeDownloadModal, 1200);
    } else {
      window.showToast('Please enter a valid 10-digit mobile number.');
    }
  });

  // Cookie Consent Modal
  const cookieModal = document.getElementById('cookie-preferences-modal');
  const closeCookieBtn = document.getElementById('close-cookie-modal');
  const saveCookieBtn = document.getElementById('btn-save-cookie-prefs');

  window.openCookieModal = function() {
    cookieModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeCookieModal() {
    cookieModal?.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeCookieBtn?.addEventListener('click', closeCookieModal);
  cookieModal?.addEventListener('click', (e) => {
    if (e.target === cookieModal) closeCookieModal();
  });

  saveCookieBtn?.addEventListener('click', () => {
    closeCookieModal();
    window.showToast('Cookie preferences saved successfully!');
  });
}
