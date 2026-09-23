/**
 * Mamta Travels - Interactive Seat Selection & Boarding Pass Engine
 */

export function initSeatBooking() {
  const modalOverlay = document.getElementById('seat-booking-modal');
  const closeBtn = document.getElementById('close-seat-modal');
  const cabinContainer = document.getElementById('bus-seat-rows');
  const routeNameLabel = document.getElementById('modal-route-name');
  const baseFareLabel = document.getElementById('modal-base-fare');
  const selectedSeatLabel = document.getElementById('modal-selected-seat');
  const totalAmountLabel = document.getElementById('modal-total-amount');
  const flexiToggle = document.getElementById('toggle-flexi-pricing');
  const confirmBtn = document.getElementById('btn-confirm-seat-booking');
  const bookingFormWrap = document.getElementById('seat-booking-flow');
  const boardingPassCard = document.getElementById('boarding-pass-result');
  const downloadTicketBtn = document.getElementById('btn-download-ticket');

  let currentRoute = null;
  let selectedSeat = null;
  let isFlexiEnabled = false;

  // Seat Matrix: 8 rows of 4 seats (A1, B1, Aisle, C1, D1 ... H4) = 32 seats + 1 back row = 33 seats
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const bookedSeats = new Set(['A2', 'B3', 'C1', 'D4', 'F2', 'G3']);

  function generateSeatGrid() {
    if (!cabinContainer) return;
    cabinContainer.innerHTML = '';

    rows.forEach((row, index) => {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'seat-row';

      const s1 = `${row}1`;
      const s2 = `${row}2`;
      const s3 = `${row}3`;
      const s4 = `${row}4`;

      rowDiv.innerHTML = `
        <div class="bus-seat ${bookedSeats.has(s1) ? 'booked' : ''}" data-seat="${s1}">${s1}</div>
        <div class="bus-seat ${bookedSeats.has(s2) ? 'booked' : ''}" data-seat="${s2}">${s2}</div>
        <div class="seat-aisle">${index + 1}</div>
        <div class="bus-seat ${bookedSeats.has(s3) ? 'booked' : ''}" data-seat="${s3}">${s3}</div>
        <div class="bus-seat ${bookedSeats.has(s4) ? 'booked' : ''}" data-seat="${s4}">${s4}</div>
      `;

      cabinContainer.appendChild(rowDiv);
    });

    // Seat click event handlers
    cabinContainer.querySelectorAll('.bus-seat:not(.booked)').forEach(seatEl => {
      seatEl.addEventListener('click', () => {
        cabinContainer.querySelectorAll('.bus-seat').forEach(s => s.classList.remove('selected'));
        seatEl.classList.add('selected');
        selectedSeat = seatEl.getAttribute('data-seat');
        updatePricing();
      });
    });
  }

  function updatePricing() {
    if (!currentRoute) return;

    if (selectedSeatLabel) {
      selectedSeatLabel.textContent = selectedSeat ? `Seat ${selectedSeat}` : 'None Selected';
    }

    const pricePerRide = isFlexiEnabled ? currentRoute.flexiFare : currentRoute.fare;
    if (baseFareLabel) {
      baseFareLabel.textContent = `₹${pricePerRide}`;
    }

    if (totalAmountLabel) {
      totalAmountLabel.textContent = selectedSeat ? `₹${pricePerRide}` : '₹0';
    }

    if (confirmBtn) {
      confirmBtn.disabled = !selectedSeat;
      confirmBtn.style.opacity = selectedSeat ? '1' : '0.5';
    }
  }

  // Global window hook to open seat modal
  window.openSeatBookingModal = function(routeData) {
    currentRoute = routeData;
    selectedSeat = null;
    isFlexiEnabled = false;

    if (flexiToggle) flexiToggle.checked = false;
    if (routeNameLabel) routeNameLabel.textContent = routeData.name;
    if (bookingFormWrap) bookingFormWrap.style.display = 'block';
    if (boardingPassCard) boardingPassCard.classList.remove('active');

    generateSeatGrid();
    updatePricing();

    modalOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  function closeModal() {
    modalOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Flexi pass switch
  flexiToggle?.addEventListener('change', () => {
    isFlexiEnabled = flexiToggle.checked;
    updatePricing();
  });

  // Confirm booking & generate Boarding Pass
  confirmBtn?.addEventListener('click', () => {
    if (!selectedSeat || !currentRoute) return;

    confirmBtn.textContent = 'Locking Seat...';
    confirmBtn.disabled = true;

    // Simulate Redis distributed seat reservation
    setTimeout(() => {
      confirmBtn.textContent = 'Confirm Reservation';
      confirmBtn.disabled = false;

      if (bookingFormWrap) bookingFormWrap.style.display = 'none';
      if (boardingPassCard) {
        boardingPassCard.classList.add('active');
        document.getElementById('pass-route-name').textContent = currentRoute.name;
        document.getElementById('pass-seat-no').textContent = selectedSeat;
        document.getElementById('pass-pnr').textContent = 'MT' + Math.floor(100000 + Math.random() * 900000);
        document.getElementById('pass-amount').textContent = isFlexiEnabled ? `₹${currentRoute.flexiFare} (Flexi Pass)` : `₹${currentRoute.fare}`;
      }

      window.showToast?.(`Seat ${selectedSeat} confirmed! Boarding pass generated.`);
    }, 600);
  });

  // Download ticket
  downloadTicketBtn?.addEventListener('click', () => {
    window.showToast?.('Boarding Pass saved to downloads!');
    setTimeout(closeModal, 1200);
  });
}
