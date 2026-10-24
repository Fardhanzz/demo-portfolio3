// SENJA Café & Kitchen Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initReservationModal();
  initHearthModal();
  initMenuFilter();
  initMosaicLightbox();
  initNewsletter();
});

// Toast Notification
function showToast(title, message, icon = 'check_circle') {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;

  const iconEl = toast.querySelector('.toast-icon');
  const titleEl = toast.querySelector('.toast-title');
  const msgEl = toast.querySelector('.toast-message');

  if (iconEl) iconEl.textContent = icon;
  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = message;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

// 1. Mobile Menu Drawer
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-overlay');
  const links = drawer ? drawer.querySelectorAll('a') : [];

  function openMenu() {
    if (!drawer) return;
    drawer.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!drawer) return;
    drawer.classList.add('translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// 2. Reservation Modal
function initReservationModal() {
  const modal = document.getElementById('reservation-modal');
  if (!modal) return;

  const openBtns = document.querySelectorAll('[data-open-reservation]');
  const closeBtns = modal.querySelectorAll('[data-close-modal]');
  const form = document.getElementById('reservation-form');
  const dateInput = document.getElementById('res-date');

  // Set minimum date to today
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  function openModal() {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  closeBtns.forEach(btn => btn.addEventListener('click', closeModal));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('res-name')?.value || 'Guest';
      const guests = document.getElementById('res-guests')?.value || '2';
      const area = document.getElementById('res-area')?.value || 'Courtyard';
      const time = document.getElementById('res-time')?.value || '17:00';
      const code = 'SNJ-' + Math.floor(1000 + Math.random() * 9000);

      closeModal();
      form.reset();
      showToast(
        'Table Reserved!',
        `Thank you ${name}. Your table for ${guests} (${area} at ${time}) is confirmed! Ref: ${code}`
      );
    });
  }
}

// 3. Bakery & Hearth Modal
function initHearthModal() {
  const modal = document.getElementById('hearth-modal');
  if (!modal) return;

  const openBtns = document.querySelectorAll('[data-open-hearth]');
  const closeBtns = modal.querySelectorAll('[data-close-hearth]');
  const form = document.getElementById('hearth-order-form');

  function openModal() {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  closeBtns.forEach(btn => btn.addEventListener('click', closeModal));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal();
      showToast('Oven Order Placed!', 'Your fresh hearth bakes have been reserved for today pick-up.');
    });
  }
}

// 4. Menu Filter Categories
function initMenuFilter() {
  const filterBtns = document.querySelectorAll('.menu-filter-btn');
  const menuRows = document.querySelectorAll('.menu-item-row');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');

      filterBtns.forEach(b => {
        b.classList.remove('bg-[#C86F45]', 'text-white');
        b.classList.add('bg-[#FAF6F0]', 'text-[#23201C]', 'hover:bg-[#E7DFD5]');
      });

      btn.classList.add('bg-[#C86F45]', 'text-white');
      btn.classList.remove('bg-[#FAF6F0]', 'text-[#23201C]', 'hover:bg-[#E7DFD5]');

      menuRows.forEach(row => {
        const itemCat = row.getAttribute('data-category');
        if (category === 'all' || itemCat === category) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
}

// 5. Lightbox for Mosaic
function initMosaicLightbox() {
  const lightbox = document.getElementById('mosaic-lightbox');
  if (!lightbox) return;

  const tiles = document.querySelectorAll('.mosaic-tile');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');

  function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption || 'SENJA Café & Kitchen Sanctuary View';
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = '';
  }

  tiles.forEach(tile => {
    tile.addEventListener('click', () => {
      const img = tile.querySelector('img');
      const badge = tile.querySelector('.bg-\\[\\#FAF6F0\\]\\/90');
      const caption = badge ? badge.textContent.trim() : img.getAttribute('alt');
      if (img) openLightbox(img.src, caption);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop')) {
      closeLightbox();
    }
  });
}

// 6. Newsletter Feedback
function initNewsletter() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Welcome to the Table', 'You are subscribed to SENJA’s monthly seasonal dispatches.');
      form.reset();
    });
  });
}

// Directions helper
window.openDirections = function() {
  window.open('https://www.google.com/maps/search/?api=1&query=Jl.+LLRE+Martadinata+No.84+Citarum+Bandung', '_blank');
};

// Download Menu helper
window.downloadMenu = function() {
  showToast('Menu PDF Generating', 'Downloading SENJA Seasonal Tasting Menu & Beverage Ledger...', 'description');
};
