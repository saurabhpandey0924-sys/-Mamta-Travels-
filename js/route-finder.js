/**
 * Mamta Travels - Route Database & Live Interactive Leaflet Map Engine
 */

export const ROUTE_DATABASE = [
  {
    id: "route-70",
    name: "Navi Mumbai - Worli Express",
    hub: "Kharghar / Vashi",
    origin: "Kharghar Station (3 min walk)",
    destination: "Worli Naka / Century Mills",
    shift: "morning",
    frequency: "Every 20 mins",
    firstBus: "07:05 AM",
    lastBus: "11:04 AM",
    busesCount: 10,
    oneWayFare: 240,
    flexiPassFare: 159,
    tag: "Express via Freeway",
    image: "./assets/images/hero_bus.jpg",
    center: [19.0150, 72.9350],
    zoom: 12,
    stops: [
      { name: "Kharghar (Utsav Chowk)", coords: [19.0434, 73.0683], type: "pickup", time: "07:05 AM" },
      { name: "Nerul LP Junction", coords: [19.0330, 73.0297], type: "pickup", time: "07:22 AM" },
      { name: "Vashi Plaza", coords: [19.0771, 72.9986], type: "pickup", time: "07:38 AM" },
      { name: "BKC Connector", coords: [19.0600, 72.8750], type: "dropoff", time: "08:15 AM" },
      { name: "Lower Parel (Peninsula)", coords: [18.9950, 72.8300], type: "dropoff", time: "08:35 AM" },
      { name: "Worli Naka", coords: [18.9986, 72.8174], type: "dropoff", time: "08:48 AM" }
    ],
    pathCoordinates: [
      [19.0434, 73.0683],
      [19.0330, 73.0297],
      [19.0771, 72.9986],
      [19.0480, 72.9100],
      [19.0200, 72.8600],
      [18.9950, 72.8300],
      [18.9986, 72.8174]
    ]
  },
  {
    id: "route-71",
    name: "Worli - Navi Mumbai Return",
    hub: "Worli / Lower Parel",
    origin: "Worli Naka (Lotus Hub)",
    destination: "Kharghar Station",
    shift: "evening",
    frequency: "Every 20 mins",
    firstBus: "04:30 PM",
    lastBus: "09:48 PM",
    busesCount: 10,
    oneWayFare: 230,
    flexiPassFare: 159,
    tag: "Evening Express",
    image: "./assets/images/bus_interior.jpg",
    center: [19.0150, 72.9350],
    zoom: 12,
    stops: [
      { name: "Worli Naka", coords: [18.9986, 72.8174], type: "pickup", time: "05:00 PM" },
      { name: "Peninsula Corporate Park", coords: [18.9950, 72.8300], type: "pickup", time: "05:15 PM" },
      { name: "BKC Connector", coords: [19.0600, 72.8750], type: "pickup", time: "05:35 PM" },
      { name: "Vashi Plaza", coords: [19.0771, 72.9986], type: "dropoff", time: "06:10 PM" },
      { name: "Nerul LP", coords: [19.0330, 73.0297], type: "dropoff", time: "06:25 PM" },
      { name: "Kharghar Utsav Chowk", coords: [19.0434, 73.0683], type: "dropoff", time: "06:45 PM" }
    ],
    pathCoordinates: [
      [18.9986, 72.8174],
      [18.9950, 72.8300],
      [19.0200, 72.8600],
      [19.0480, 72.9100],
      [19.0771, 72.9986],
      [19.0330, 73.0297],
      [19.0434, 73.0683]
    ]
  },
  {
    id: "route-9257",
    name: "Borivali West - Powai Hiranandani",
    hub: "Borivali West / Kandivali",
    origin: "Borivali West (Shimpoli)",
    destination: "Powai (Hiranandani Business Park)",
    shift: "morning",
    frequency: "Every 30 mins",
    firstBus: "07:50 AM",
    lastBus: "11:03 AM",
    busesCount: 6,
    oneWayFare: 239,
    flexiPassFare: 165,
    tag: "Direct JVLR Corridor",
    image: "./assets/images/commuter_peace.jpg",
    center: [19.1750, 72.8750],
    zoom: 12,
    stops: [
      { name: "Borivali West (Shimpoli)", coords: [19.2307, 72.8567], type: "pickup", time: "07:50 AM" },
      { name: "Kandivali West (Poisar)", coords: [19.2050, 72.8500], type: "pickup", time: "08:05 AM" },
      { name: "Malad West (Inorbit)", coords: [19.1800, 72.8350], type: "pickup", time: "08:20 AM" },
      { name: "JVLR SEEPZ Gates", coords: [19.1300, 72.8800], type: "dropoff", time: "08:50 AM" },
      { name: "Hiranandani Kensington", coords: [19.1197, 72.9051], type: "dropoff", time: "09:10 AM" }
    ],
    pathCoordinates: [
      [19.2307, 72.8567],
      [19.2050, 72.8500],
      [19.1800, 72.8350],
      [19.1450, 72.8550],
      [19.1300, 72.8800],
      [19.1197, 72.9051]
    ]
  },
  {
    id: "route-4791",
    name: "Panvel - South Mumbai (Via Atal Setu)",
    hub: "Panvel / Ulwe",
    origin: "Panvel Hub (Palaspe Circle)",
    destination: "Nariman Point / Fort",
    shift: "morning",
    frequency: "Every 25 mins",
    firstBus: "07:10 AM",
    lastBus: "10:40 AM",
    busesCount: 8,
    oneWayFare: 261,
    flexiPassFare: 179,
    tag: "Fastest via Atal Setu (MTHL)",
    image: "./assets/images/bus_expressway.jpg",
    center: [18.9600, 72.9500],
    zoom: 11,
    stops: [
      { name: "Panvel (Palaspe Phata)", coords: [18.9894, 73.1175], type: "pickup", time: "07:10 AM" },
      { name: "Ulwe (Sector 19)", coords: [18.9750, 73.0250], type: "pickup", time: "07:30 AM" },
      { name: "Atal Setu Sea Bridge Entry", coords: [18.9700, 72.9700], type: "pickup", time: "07:45 AM" },
      { name: "Sewri Toll / Freeway", coords: [18.9950, 72.8600], type: "dropoff", time: "08:15 AM" },
      { name: "Fort Business District", coords: [18.9350, 72.8350], type: "dropoff", time: "08:35 AM" },
      { name: "Nariman Point", coords: [18.9250, 72.8220], type: "dropoff", time: "08:50 AM" }
    ],
    pathCoordinates: [
      [18.9894, 73.1175],
      [18.9750, 73.0250],
      [18.9700, 72.9700],
      [18.9800, 72.9200],
      [18.9950, 72.8600],
      [18.9500, 72.8400],
      [18.9250, 72.8220]
    ]
  },
  {
    id: "route-8822",
    name: "Thane West - BKC Direct Express",
    hub: "Thane (Majiwada / Cadbury)",
    origin: "Thane West (Ghodbunder Road)",
    destination: "Bandra Kurla Complex (BKC)",
    shift: "morning",
    frequency: "Every 15 mins",
    firstBus: "06:45 AM",
    lastBus: "11:15 AM",
    busesCount: 14,
    oneWayFare: 245,
    flexiPassFare: 169,
    tag: "High Frequency Prime",
    image: "./assets/images/hero_bus.jpg",
    center: [19.1450, 72.9200],
    zoom: 12,
    stops: [
      { name: "Ghodbunder Suraj Water Park", coords: [19.2600, 72.9650], type: "pickup", time: "07:00 AM" },
      { name: "Majiwada Junction", coords: [19.2183, 72.9781], type: "pickup", time: "07:18 AM" },
      { name: "Mulund Toll Naka", coords: [19.1750, 72.9550], type: "pickup", time: "07:30 AM" },
      { name: "Kalanagar / BKC Entry", coords: [19.0620, 72.8520], type: "dropoff", time: "08:10 AM" },
      { name: "G Block BKC (One BKC)", coords: [19.0657, 72.8687], type: "dropoff", time: "08:25 AM" }
    ],
    pathCoordinates: [
      [19.2600, 72.9650],
      [19.2183, 72.9781],
      [19.1750, 72.9550],
      [19.1150, 72.9200],
      [19.0620, 72.8520],
      [19.0657, 72.8687]
    ]
  }
];

let leafletMap = null;
let currentLayerGroup = null;

export function initRouteFinder() {
  const routesContainer = document.getElementById('routes-list-container');
  const shiftTabs = document.querySelectorAll('.shift-tab');
  const pickupInput = document.getElementById('search-pickup');
  const dropoffInput = document.getElementById('search-dropoff');
  const swapBtn = document.getElementById('btn-swap-stops');
  const viewGridBtn = document.getElementById('btn-view-grid');
  const viewMapBtn = document.getElementById('btn-view-map');
  const mapPanel = document.getElementById('interactive-map-panel');

  let currentShift = 'morning';

  function initMap() {
    if (typeof window.L === 'undefined') return;
    if (leafletMap) return;

    const mapElement = document.getElementById('leaflet-route-map');
    if (!mapElement) return;

    // Clean Google Maps / CartoDB style Voyager tiles
    leafletMap = window.L.map('leaflet-route-map', {
      zoomControl: true,
      scrollWheelZoom: false
    }).setView([19.0500, 72.9200], 11);

    // Clean, crisp OpenStreetMap tiles without any API key restrictions
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(leafletMap);

    currentLayerGroup = window.L.layerGroup().addTo(leafletMap);

    window.addEventListener('resize', () => {
      leafletMap?.invalidateSize();
    });
  }

  function displayRouteOnMap(route) {
    if (!leafletMap) initMap();
    if (!leafletMap || !currentLayerGroup || typeof window.L === 'undefined') return;
    currentLayerGroup.clearLayers();

    // Custom Live Bus Icon with animated pulse
    const busIcon = window.L.divIcon({
      className: 'custom-bus-marker',
      html: `<div class="bus-marker-pulse"></div><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffd66b" stroke-width="2.5"><rect x="3" y="4" width="18" height="15" rx="3"/><path d="M3 10h18M6 19v2M18 19v2"/><circle cx="7" cy="15" r="1.2" fill="#ffd66b"/><circle cx="17" cy="15" r="1.2" fill="#ffd66b"/></svg>`,
      iconSize: [42, 42],
      iconAnchor: [21, 21]
    });

    const stopPickupIcon = window.L.divIcon({
      className: 'custom-stop-marker pickup',
      html: `<div class="stop-dot-inner"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });

    const stopDropoffIcon = window.L.divIcon({
      className: 'custom-stop-marker dropoff',
      html: `<div class="stop-dot-inner"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });

    // Add Route Polyline with luminous cyan background glow
    const polylineShadow = window.L.polyline(route.pathCoordinates, {
      color: '#00c2cb',
      weight: 8,
      opacity: 0.5,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(currentLayerGroup);

    const polylineMain = window.L.polyline(route.pathCoordinates, {
      color: '#0a192f',
      weight: 4,
      opacity: 1,
      dashArray: '8, 8',
      className: 'animated-route-polyline'
    }).addTo(currentLayerGroup);

    // Add Stops
    route.stops.forEach((stop, idx) => {
      const isBus = idx === 1; // Simulated live bus position
      const marker = window.L.marker(stop.coords, {
        icon: isBus ? busIcon : (stop.type === 'pickup' ? stopPickupIcon : stopDropoffIcon)
      }).addTo(currentLayerGroup);

      marker.bindPopup(`
        <div style="font-family: var(--font-main); padding: 8px; min-width: 175px;">
          <div style="font-size: 10px; font-weight: 800; color: ${isBus ? '#00c2cb' : '#2563eb'}; letter-spacing: 0.06em; text-transform: uppercase;">
            ${isBus ? '● LIVE BUS EN ROUTE (#MT-104)' : stop.type.toUpperCase() + ' POINT'}
          </div>
          <strong style="color: #0a192f; font-size: 13px; display: block; margin-top: 3px;">${stop.name}</strong>
          <div style="font-size: 11px; color: #64748b; margin-top: 4px;">Scheduled: <strong>${stop.time}</strong></div>
        </div>
      `);
    });

    leafletMap.flyToBounds(polylineMain.getBounds(), { padding: [60, 60], duration: 1.2 });

    // Update overlay title
    const overlayTitle = document.getElementById('map-route-title');
    const overlaySub = document.getElementById('map-route-sub');
    if (overlayTitle) overlayTitle.textContent = route.name;
    if (overlaySub) overlaySub.textContent = `${route.origin} ➔ ${route.destination} (${route.frequency})`;
  }

  function renderRoutes() {
    if (!routesContainer) return;

    const pickupFilter = (pickupInput?.value || '').trim().toLowerCase();
    const dropoffFilter = (dropoffInput?.value || '').trim().toLowerCase();

    const filtered = ROUTE_DATABASE.filter(route => {
      const matchShift = route.shift === currentShift;
      const matchPickup = !pickupFilter || 
        route.origin.toLowerCase().includes(pickupFilter) || 
        route.name.toLowerCase().includes(pickupFilter) ||
        route.stops.some(s => s.type === 'pickup' && s.name.toLowerCase().includes(pickupFilter));
      
      const matchDropoff = !dropoffFilter || 
        route.destination.toLowerCase().includes(dropoffFilter) || 
        route.name.toLowerCase().includes(dropoffFilter) ||
        route.stops.some(s => s.type === 'dropoff' && s.name.toLowerCase().includes(dropoffFilter));

      return matchShift && matchPickup && matchDropoff;
    });

    if (filtered.length === 0) {
      routesContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: #fff; border-radius: 20px; border: 1px dashed #cbd5e1;">
          <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--color-primary); margin-bottom: 0.5rem;">No direct routes found for this search</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">We are expanding rapidly across MMR & Hyderabad! Request your office route now.</p>
          <button class="btn btn-primary" onclick="window.openDemoModal()">Request Route Expansion</button>
        </div>
      `;
      return;
    }

    routesContainer.innerHTML = filtered.map(route => `
      <div class="route-card" data-route-id="${route.id}">
        <div class="route-card-banner">
          <img src="${route.image}" alt="${route.name}" class="route-banner-img" loading="lazy">
          <div class="route-banner-overlay">
            <span class="route-live-indicator"><span class="pulse-dot"></span> Live Bus #MT-${route.id.replace('route-', '')}</span>
            <span class="route-seat-count">💺 14 seats left</span>
          </div>
        </div>

        <div class="route-card-header">
          <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
            <span class="badge-tag">${route.tag}</span>
            <span class="badge-gold">${route.busesCount} Coaches</span>
          </div>
          <button class="btn-sm btn-outline btn-inspect-map" data-route-id="${route.id}">
            🗺️ View Live GPS
          </button>
        </div>

        <div class="route-card-body">
          <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--color-primary); margin-bottom: 0.85rem;">${route.name}</h3>

          <div class="route-timeline">
            <div class="timeline-stop">
              <div class="stop-marker"></div>
              <div class="stop-info">
                <span class="stop-name">${route.origin}</span>
                <span class="stop-sub">First Bus: ${route.firstBus}</span>
              </div>
            </div>
            <div class="timeline-stop">
              <div class="stop-marker dropoff"></div>
              <div class="stop-info">
                <span class="stop-name">${route.destination}</span>
                <span class="stop-sub">Last Bus: ${route.lastBus}</span>
              </div>
            </div>
          </div>

          <div class="route-specs">
            <div class="spec-item">
              <span class="spec-label">Frequency</span>
              <span class="spec-val">${route.frequency}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">First Bus</span>
              <span class="spec-val">${route.firstBus}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Last Bus</span>
              <span class="spec-val">${route.lastBus}</span>
            </div>
          </div>
        </div>

        <div class="route-card-footer">
          <div class="price-box">
            <span class="price-single">₹${route.oneWayFare} <span style="font-size: 0.8rem; font-weight: 500; color: var(--text-muted);">/ ride</span></span>
            <span class="price-flexi">Flexi Pass: ₹${route.flexiPassFare}/ride (Save 34%)</span>
          </div>
          <button class="btn btn-primary btn-sm btn-open-seat-modal" data-route-id="${route.id}" data-route-name="${route.name}" data-fare="${route.oneWayFare}" data-flexi="${route.flexiPassFare}">
            Select Seat & Book
          </button>
        </div>
      </div>
    `).join('');

    // Bind card selection & map inspection
    document.querySelectorAll('.route-card').forEach(card => {
      card.addEventListener('click', (e) => {
        // If clicking on book button, don't just inspect map
        if (e.target.closest('.btn-open-seat-modal')) return;

        const id = card.getAttribute('data-route-id');
        const found = ROUTE_DATABASE.find(r => r.id === id);
        if (found) {
          document.querySelectorAll('.route-card').forEach(c => c.classList.remove('selected-route'));
          card.classList.add('selected-route');
          showMapPanel();
          displayRouteOnMap(found);
        }
      });
    });

    document.querySelectorAll('.btn-inspect-map').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = e.currentTarget.getAttribute('data-route-id');
        const found = ROUTE_DATABASE.find(r => r.id === id);
        if (found) {
          const parentCard = e.currentTarget.closest('.route-card');
          document.querySelectorAll('.route-card').forEach(c => c.classList.remove('selected-route'));
          parentCard?.classList.add('selected-route');
          showMapPanel();
          displayRouteOnMap(found);
          document.getElementById('interactive-map-panel')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });

    // Bind modal triggers
    document.querySelectorAll('.btn-open-seat-modal').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget;
        const routeData = {
          id: target.getAttribute('data-route-id'),
          name: target.getAttribute('data-route-name'),
          fare: Number(target.getAttribute('data-fare')),
          flexiFare: Number(target.getAttribute('data-flexi'))
        };
        window.openSeatBookingModal(routeData);
      });
    });

    // If map is already visible, display first route
    if (mapPanel && mapPanel.classList.contains('active') && filtered.length > 0) {
      displayRouteOnMap(filtered[0]);
    }
  }

  function showMapPanel() {
    if (!mapPanel) return;
    mapPanel.classList.remove('hidden');
    viewMapBtn?.classList.add('active');
    viewGridBtn?.classList.remove('active');
    initMap();
    setTimeout(() => {
      leafletMap?.invalidateSize();
    }, 150);
  }

  function hideMapPanel() {
    if (!mapPanel) return;
    mapPanel.classList.add('hidden');
    viewMapBtn?.classList.remove('active');
    viewGridBtn?.classList.add('active');
  }

  viewMapBtn?.addEventListener('click', () => {
    showMapPanel();
    const firstRoute = ROUTE_DATABASE.find(r => r.shift === currentShift);
    if (firstRoute) displayRouteOnMap(firstRoute);
  });

  viewGridBtn?.addEventListener('click', hideMapPanel);

  // Shift toggle listeners
  shiftTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      shiftTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentShift = tab.getAttribute('data-shift');
      renderRoutes();
    });
  });

  // Filter input listeners
  pickupInput?.addEventListener('input', renderRoutes);
  dropoffInput?.addEventListener('input', renderRoutes);

  // Swap stops button
  swapBtn?.addEventListener('click', () => {
    if (pickupInput && dropoffInput) {
      const temp = pickupInput.value;
      pickupInput.value = dropoffInput.value;
      dropoffInput.value = temp;
      renderRoutes();
    }
  });

  // Initial render of routes and live map
  renderRoutes();
  showMapPanel();
  const initialRoute = ROUTE_DATABASE.find(r => r.shift === currentShift) || ROUTE_DATABASE[0];
  if (initialRoute) {
    setTimeout(() => {
      displayRouteOnMap(initialRoute);
    }, 150);
  }
}
