/**
 * SENJA Café & Kitchen — Shared Component Renderers & Interactions
 */

// 1. Render Header & Navigation
function renderHeader(activeRoute = '/') {
  const container = document.getElementById('site-header-container');
  if (!container) return;

  const routes = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Our Story", href: "/our-story" },
    { label: "What's On", href: "/whats-on" },
    { label: "Gallery", href: "/gallery" },
    { label: "Visit Us", href: "/visit" }
  ];

  const desktopNavItems = routes.map(r => {
    const isActive = activeRoute === r.href || (r.href !== '/' && activeRoute.startsWith(r.href));
    const activeClasses = isActive 
      ? 'text-[#C86F45] font-bold border-b-2 border-[#C86F45] pb-1' 
      : 'text-[#373329] hover:text-[#C86F45] transition-colors pb-1 border-b-2 border-transparent';
    return `<a href="${r.href}" class="${activeClasses} text-xs uppercase tracking-widest">${r.label}</a>`;
  }).join('');

  const mobileNavItems = routes.map(r => {
    const isActive = activeRoute === r.href || (r.href !== '/' && activeRoute.startsWith(r.href));
    const activeClasses = isActive ? 'text-[#C86F45] font-bold pl-3 border-l-2 border-[#C86F45]' : 'text-[#373329] hover:text-[#C86F45] pl-3 border-l-2 border-transparent';
    return `<a href="${r.href}" class="${activeClasses} text-sm font-semibold uppercase tracking-wider py-1.5 transition-colors">${r.label}</a>`;
  }).join('');

  container.innerHTML = `
    <!-- Top Announcement Bar -->
    <aside class="w-full bg-[#373329] text-[#F7F1E7] py-2 px-4 text-center text-xs tracking-wider uppercase flex items-center justify-center gap-2 border-b border-white/10 z-50 relative">
      <span class="inline-block w-1.5 h-1.5 rounded-full bg-[#C86F45] pulse-badge" aria-hidden="true"></span>
      <span>Toraja Honey Cold Brew &amp; Pandan Kaya Brioche available all week • Concept Project in Bandung</span>
      <a class="underline underline-offset-4 hover:text-[#C86F45] transition-colors ml-2 hidden sm:inline-block font-medium" href="/menu">View Menu</a>
    </aside>

    <!-- Navigation Bar -->
    <header class="sticky top-0 z-40 bg-[#F7F1E7]/95 backdrop-blur-md border-b border-[#E5DEC9] transition-all">
      <div class="max-w-7xl mx-auto px-5 lg:px-10 h-20 flex items-center justify-between">
        
        <!-- Brandmark -->
        <a class="flex flex-col text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C86F45] rounded p-1" href="/" aria-label="SENJA Café & Kitchen Home">
          <span class="font-serif text-2xl lg:text-3xl font-medium tracking-tight text-[#373329] leading-none group-hover:text-[#C86F45] transition-colors">SENJA</span>
          <span class="text-[10px] tracking-[0.25em] uppercase text-[#6B6458] mt-1 font-medium">Café &amp; Kitchen • Bandung</span>
        </a>

        <!-- Main Menu Links (Desktop) -->
        <nav class="hidden md:flex items-center gap-7" aria-label="Main Navigation">
          ${desktopNavItems}
        </nav>

        <!-- Right CTAs + Social + Mobile Hamburger -->
        <div class="flex items-center gap-3 md:gap-4">
          <a class="text-[#373329] hover:text-[#C86F45] transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C86F45] rounded" 
             href="https://instagram.com" 
             rel="noreferrer" 
             target="_blank" 
             title="Follow on Instagram (Concept)">
            <svg class="w-4 h-4 fill-current" viewbox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
            </svg>
          </a>
          <a href="/menu" 
             class="inline-flex items-center justify-center px-4 py-2 bg-[#C86F45] text-white text-xs font-semibold tracking-wider uppercase rounded hover:bg-[#A8532C] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C86F45]">
            View Menu
          </a>
          
          <!-- Mobile Menu Button -->
          <button id="mobile-menu-btn" 
                  class="md:hidden p-2 text-[#373329] hover:text-[#C86F45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C86F45] rounded" 
                  aria-label="Open mobile navigation menu"
                  aria-expanded="false"
                  aria-controls="mobile-drawer">
            <span class="material-symbols-outlined text-2xl" aria-hidden="true">menu</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer Overlay -->
    <div id="mobile-overlay" class="fixed inset-0 bg-black/60 z-50 hidden transition-opacity" aria-hidden="true"></div>
    <aside id="mobile-drawer" 
           class="fixed top-0 right-0 bottom-0 w-72 bg-[#F7F1E7] z-50 p-6 flex flex-col justify-between transform translate-x-full transition-transform duration-300 ease-in-out shadow-2xl"
           aria-label="Mobile Navigation Drawer">
      <div>
        <div class="flex items-center justify-between pb-6 border-b border-[#E5DEC9]">
          <div>
            <span class="font-serif text-2xl font-medium tracking-tight text-[#373329]">SENJA</span>
            <p class="text-[10px] tracking-[0.2em] uppercase text-[#6B6458]">Bandung</p>
          </div>
          <button id="mobile-menu-close" class="p-1 text-[#373329] hover:text-[#C86F45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C86F45] rounded" aria-label="Close Navigation Menu">
            <span class="material-symbols-outlined text-2xl" aria-hidden="true">close</span>
          </button>
        </div>
        <nav class="flex flex-col gap-3 pt-6" aria-label="Mobile Routes">
          ${mobileNavItems}
        </nav>
      </div>
      <div class="pt-6 border-t border-[#E5DEC9] space-y-3">
        <a href="/menu" class="block w-full py-2.5 bg-[#C86F45] text-white text-xs font-semibold tracking-wider uppercase rounded hover:bg-[#A8532C] transition-colors shadow-sm text-center">
          Explore Menu
        </a>
        <a href="/visit" class="block w-full py-2.5 border border-[#373329] text-[#373329] text-xs font-semibold tracking-wider uppercase rounded hover:bg-[#E5DEC9] transition-colors text-center">
          Visit Sanctuary
        </a>
      </div>
    </aside>
  `;
}

// 2. Render Footer
function renderFooter() {
  const container = document.getElementById('site-footer-container');
  if (!container) return;

  container.innerHTML = `
    <footer class="w-full bg-[#373329] text-[#F7F1E7] pt-16 pb-12 border-t-4 border-[#C86F45]">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          <!-- Col 1: Wordmark & Identity -->
          <div class="md:col-span-4 space-y-4">
            <a class="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C86F45] rounded" href="/" aria-label="SENJA Home">
              <span class="font-serif text-3xl font-medium tracking-tight text-white">SENJA</span>
              <span class="block text-[10px] tracking-[0.25em] uppercase text-[#C86F45] mt-1 font-semibold">Café &amp; Kitchen • Bandung</span>
            </a>
            <p class="text-xs text-white/70 leading-relaxed max-w-sm font-light">
              An all-day culinary sanctuary on Jalan Riau where Bandung’s golden light, single-origin roasts, and seasonal hearth bakes converse in quiet warmth.
            </p>
            <div class="flex items-center gap-3 pt-2">
              <a class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C86F45] hover:text-[#C86F45] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C86F45]" 
                 href="https://instagram.com" 
                 rel="noreferrer" 
                 target="_blank" 
                 title="Instagram">
                <svg class="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <span class="text-xs text-white/50">@senja.bandung</span>
            </div>
          </div>

          <!-- Col 2: Hours & Sanctuary Address -->
          <div class="md:col-span-4 space-y-4">
            <div>
              <h5 class="text-[11px] font-semibold uppercase tracking-widest text-[#C86F45]">Our Hours</h5>
              <div class="mt-2 text-xs text-white/80 space-y-1">
                <p>Mon – Thu: 07:00 AM – 21:00 PM</p>
                <p>Fri – Sun: 07:00 AM – 22:00 PM</p>
                <p class="text-white/50 text-[11px]">Hearth kitchen closes nightly at 21:15 PM</p>
              </div>
            </div>
            <div class="pt-2">
              <h5 class="text-[11px] font-semibold uppercase tracking-widest text-[#C86F45]">Sanctuary Address</h5>
              <div class="mt-2 text-xs text-white/80 space-y-1">
                <p>Jl. Riau (LLRE Martadinata) No. 84</p>
                <p>Citarum, Bandung Wetan, Jawa Barat 40115</p>
                <p class="text-white/50">+62 (022) 423-9800</p>
              </div>
            </div>
          </div>

          <!-- Col 3: Newsletter Dispatch -->
          <div class="md:col-span-4 space-y-3">
            <h5 class="font-serif text-lg text-white">Join Our Neighborhood Table</h5>
            <p class="text-xs text-white/70 leading-relaxed font-light">
              Quiet monthly dispatches featuring seasonal single-origin brew guides, sourdough recipes, and courtyard acoustic invitations.
            </p>
            <form class="newsletter-form flex gap-2 pt-1" onsubmit="event.preventDefault(); window.handleNewsletterSubmit(this);">
              <input class="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#C86F45]" 
                     placeholder="Your email address" 
                     required 
                     type="email" 
                     aria-label="Email address for monthly dispatch"/>
              <button class="px-4 py-2 bg-[#C86F45] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#A8532C] transition-colors flex-shrink-0 cursor-pointer" type="submit">
                Join
              </button>
            </form>
            <p class="text-[10px] text-white/40">Fictional journal subscription for demonstration. No spam.</p>
          </div>
        </div>

        <!-- Copyright Bottom Bar -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-4">
          <p>© 2025 SENJA Café &amp; Kitchen. Fictional Concept Project created for web design portfolio demonstration in Bandung, West Java.</p>
          <div class="flex items-center gap-6">
            <a class="hover:text-white transition-colors" href="/our-story">Our Story</a>
            <a class="hover:text-white transition-colors" href="/menu">Menu</a>
            <a class="hover:text-white transition-colors" href="/gallery">Gallery</a>
            <a class="hover:text-white transition-colors" href="/whats-on">What's On</a>
            <a class="hover:text-white transition-colors" href="/visit">Visit Us</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// 3. Render Breadcrumbs & Page Hero Header
function renderPageHero(title, eyebrow, description, breadcrumbs = []) {
  const container = document.getElementById('page-hero-container');
  if (!container) return;

  const breadcrumbHtml = breadcrumbs.map((b, idx) => {
    if (b.href) {
      return `<a href="${b.href}" class="hover:text-[#C86F45] transition-colors">${b.label}</a>`;
    }
    return `<span class="text-[#373329] font-medium">${b.label}</span>`;
  }).join(' <span class="text-[#E5DEC9] mx-1.5" aria-hidden="true">/</span> ');

  container.innerHTML = `
    <div class="w-full bg-[#F2EBE0] border-b border-[#E5DEC9] py-12 md:py-16 px-6">
      <div class="max-w-5xl mx-auto">
        <nav class="text-xs uppercase tracking-widest text-[#6B6458] mb-4 flex items-center" aria-label="Breadcrumb">
          ${breadcrumbHtml}
        </nav>
        <span class="text-[11px] uppercase tracking-[0.25em] text-[#C86F45] font-semibold">${eyebrow}</span>
        <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl text-[#373329] font-normal tracking-tight mt-1">
          ${title}
        </h1>
        ${description ? `<p class="mt-4 text-[#6B6458] text-sm md:text-base max-w-2xl font-light leading-relaxed">${description}</p>` : ''}
      </div>
    </div>
  `;
}

// 4. Render Table Reservation Modal
function renderReservationModal() {
  const container = document.getElementById('reservation-modal-container');
  if (!container) return;

  container.innerHTML = `
    <div id="reservation-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-4 modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-res-title">
      <div class="bg-[#F7F1E7] rounded-xl border border-[#E5DEC9] w-full max-w-lg overflow-hidden shadow-2xl modal-content">
        <div class="bg-[#373329] text-[#F7F1E7] px-6 py-5 flex items-center justify-between border-b border-white/10">
          <div>
            <span class="text-[10px] tracking-[0.25em] uppercase text-[#C86F45] font-semibold">Table Hospitality</span>
            <h3 id="modal-res-title" class="font-serif text-2xl text-white">Reserve a Gathering Table</h3>
          </div>
          <button data-close-modal class="text-white/60 hover:text-white p-1 cursor-pointer" aria-label="Close reservation modal">
            <span class="material-symbols-outlined text-2xl" aria-hidden="true">close</span>
          </button>
        </div>

        <form id="reservation-form" class="p-6 space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="res-name" class="block text-[11px] font-semibold uppercase tracking-wider text-[#6B6458] mb-1">Your Name</label>
              <input id="res-name" type="text" required placeholder="Dwi Ananda" class="w-full px-3 py-2 text-xs bg-white border border-[#E5DEC9] rounded focus:outline-none focus:border-[#C86F45] text-[#373329]"/>
            </div>
            <div>
              <label for="res-phone" class="block text-[11px] font-semibold uppercase tracking-wider text-[#6B6458] mb-1">WhatsApp / Phone</label>
              <input id="res-phone" type="tel" required placeholder="+62 812-3456-7890" class="w-full px-3 py-2 text-xs bg-white border border-[#E5DEC9] rounded focus:outline-none focus:border-[#C86F45] text-[#373329]"/>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label for="res-date" class="block text-[11px] font-semibold uppercase tracking-wider text-[#6B6458] mb-1">Date</label>
              <input id="res-date" type="date" required class="w-full px-3 py-2 text-xs bg-white border border-[#E5DEC9] rounded focus:outline-none focus:border-[#C86F45] text-[#373329]"/>
            </div>
            <div>
              <label for="res-time" class="block text-[11px] font-semibold uppercase tracking-wider text-[#6B6458] mb-1">Time Slot</label>
              <select id="res-time" class="w-full px-3 py-2 text-xs bg-white border border-[#E5DEC9] rounded focus:outline-none focus:border-[#C86F45] text-[#373329]">
                <option value="08:00 AM">08:00 AM (Morning Brew)</option>
                <option value="10:00 AM">10:00 AM (Brunch)</option>
                <option value="12:30 PM">12:30 PM (Midday Gathering)</option>
                <option value="15:30 PM">15:30 PM (Afternoon Bake)</option>
                <option value="17:30 PM" selected>17:30 PM (Senja Sunset)</option>
                <option value="19:30 PM">19:30 PM (Twilight Supper)</option>
              </select>
            </div>
            <div>
              <label for="res-guests" class="block text-[11px] font-semibold uppercase tracking-wider text-[#6B6458] mb-1">Guests</label>
              <select id="res-guests" class="w-full px-3 py-2 text-xs bg-white border border-[#E5DEC9] rounded focus:outline-none focus:border-[#C86F45] text-[#373329]">
                <option value="1 Person">1 Person</option>
                <option value="2 People" selected>2 People</option>
                <option value="3-4 People">3 – 4 People</option>
                <option value="5-8 People">5 – 8 People</option>
                <option value="Group 8+">Group (8+)</option>
              </select>
            </div>
          </div>

          <div>
            <label for="res-area" class="block text-[11px] font-semibold uppercase tracking-wider text-[#6B6458] mb-1">Seating Atmosphere</label>
            <select id="res-area" class="w-full px-3 py-2 text-xs bg-white border border-[#E5DEC9] rounded focus:outline-none focus:border-[#C86F45] text-[#373329]">
              <option value="Sun-drenched Courtyard Garden">Sun-drenched Courtyard Garden (Outdoor foliage)</option>
              <option value="Limewash Conservatory">Limewash Conservatory (Arched dining hall)</option>
              <option value="Wood-fired Hearth Counter">Wood-fired Hearth Counter (Bakery view)</option>
              <option value="Quiet Reading Nook">Quiet Reading Corner (Low armchairs)</option>
            </select>
          </div>

          <div>
            <label for="res-notes" class="block text-[11px] font-semibold uppercase tracking-wider text-[#6B6458] mb-1">Special Occasion or Dietary Notes</label>
            <textarea id="res-notes" rows="2" placeholder="Birthday, anniversary, high chair needed, dietary allergies..." class="w-full px-3 py-2 text-xs bg-white border border-[#E5DEC9] rounded focus:outline-none focus:border-[#C86F45] text-[#373329]"></textarea>
          </div>

          <div class="pt-3 flex items-center justify-end gap-3 border-t border-[#E5DEC9]">
            <button type="button" data-close-modal class="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#6B6458] hover:text-[#373329] cursor-pointer">
              Cancel
            </button>
            <button type="submit" class="px-6 py-2.5 bg-[#C86F45] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#A8532C] transition-colors shadow-sm cursor-pointer">
              Confirm Table
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

// 5. Render Toast Notification
function renderToast() {
  const container = document.getElementById('toast-container');
  if (!container) return;

  container.innerHTML = `
    <div id="toast-notification" class="fixed bottom-6 right-6 z-50 bg-[#373329] text-white p-4 rounded-lg shadow-xl border border-white/10 flex items-start gap-3 max-w-sm" role="status" aria-live="polite">
      <span class="material-symbols-outlined text-[#C86F45] text-2xl toast-icon" aria-hidden="true">check_circle</span>
      <div class="flex-1">
        <h6 class="font-serif text-sm font-medium text-white toast-title">Notification</h6>
        <p class="text-xs text-white/70 mt-0.5 leading-relaxed toast-message">Your action was completed.</p>
      </div>
    </div>
  `;
}

// Global Toast Display Helper
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

// Newsletter Helper
window.handleNewsletterSubmit = function(form) {
  showToast('Welcome to the Table', 'Thank you! You are subscribed to SENJA’s quiet monthly dispatches.');
  form.reset();
};

// Global Interactions Binder
function initGlobalInteractions() {
  // 1. Mobile Menu
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-overlay');

  if (toggleBtn && drawer && overlay) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.remove('translate-x-full');
      overlay.classList.remove('hidden');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    });

    const closeMenu = () => {
      drawer.classList.add('translate-x-full');
      overlay.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
  }

  // 2. Reservation Modal
  const resModal = document.getElementById('reservation-modal');
  if (resModal) {
    const openBtns = document.querySelectorAll('[data-open-reservation]');
    const closeBtns = resModal.querySelectorAll('[data-close-modal]');
    const dateInput = document.getElementById('res-date');
    const form = document.getElementById('reservation-form');

    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
      if (!dateInput.value) dateInput.value = today;
    }

    const openModal = () => {
      resModal.classList.remove('hidden');
      resModal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      resModal.classList.add('hidden');
      resModal.classList.remove('flex');
      document.body.style.overflow = '';
    };

    openBtns.forEach(btn => btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    }));

    closeBtns.forEach(btn => btn.addEventListener('click', closeModal));

    resModal.addEventListener('click', (e) => {
      if (e.target === resModal) closeModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !resModal.classList.contains('hidden')) {
        closeModal();
      }
    });

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('res-name')?.value || 'Guest';
        const guests = document.getElementById('res-guests')?.value || '2';
        const area = document.getElementById('res-area')?.value || 'Courtyard';
        const time = document.getElementById('res-time')?.value || '17:30';
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
}
