// Mobile-First & Desktop Interactive Logic for Adam Suvai Zone

let activeComboFilter = 'all';
let activeDietFilter = 'all';
let activeCategoryFilter = 'All';
let searchQuery = '';
let estimateCart = [];

document.addEventListener('DOMContentLoaded', () => {
  renderCombos();
  renderCategoryPills();
  renderMenu();
  bindEvents();
});

function toggleMobileNav(forceClose = false) {
  const panel = document.getElementById('mobileNavPanel');
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const isOpen = forceClose ? false : !panel.classList.contains('open');
  panel.classList.toggle('open', isOpen);
  toggleBtn.setAttribute('aria-expanded', String(isOpen));
  toggleBtn.textContent = isOpen ? '✕' : '☰';
}

function renderCombos() {
  const container = document.getElementById('comboGrid');
  const filtered = activeComboFilter === 'all'
    ? COMBO_MENUS
    : COMBO_MENUS.filter(c => c.type === activeComboFilter);

  container.innerHTML = filtered.map(combo => `
    <article class="combo-card">
      <div>
        <span class="combo-type-tag">${combo.typeLabel}</span>
        <div class="combo-card-header">
          <h3>${combo.name}</h3>
          <span class="price-tag">Rs. ${combo.price}</span>
        </div>
        <ul class="combo-items-list">
          ${combo.items.map(i => `<li>${i}</li>`).join('')}
        </ul>
      </div>
      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        <button class="btn btn-gold" style="flex:1;" onclick="addToEstimate('${combo.name.replace(/'/g, "\'")}', ${combo.price})">
          + Add to Estimate
        </button>
        <a href="https://www.zomato.com/chennai/adams-suvai-zone-1-t-nagar" target="_blank" rel="noopener" class="btn btn-espresso">
          Order
        </a>
      </div>
    </article>
  `).join('');
}

function renderCategoryPills() {
  const pillContainer = document.getElementById('categoryPills');
  const categories = ['All', ...RESTAURANT_MENU.map(m => m.category)];
  pillContainer.innerHTML = categories.map(cat => `
    <button class="cat-pill ${cat === activeCategoryFilter ? 'active' : ''}" data-cat="${cat}">
      ${cat}
    </button>
  `).join('');

  pillContainer.querySelectorAll('.cat-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategoryFilter = btn.dataset.cat;
      renderCategoryPills();
      renderMenu();
    });
  });
}

function renderMenu() {
  const container = document.getElementById('menuContainer');
  const q = searchQuery.trim().toLowerCase();

  const html = RESTAURANT_MENU
    .filter(catBlock => activeCategoryFilter === 'All' || catBlock.category === activeCategoryFilter)
    .map(catBlock => {
      const matchedItems = catBlock.items.filter(item => {
        const matchesDiet = activeDietFilter === 'all' || item.diet === activeDietFilter;
        const matchesQuery = !q ||
          item.name.toLowerCase().includes(q) ||
          (item.desc && item.desc.toLowerCase().includes(q)) ||
          catBlock.category.toLowerCase().includes(q);
        return matchesDiet && matchesQuery;
      });

      if (!matchedItems.length) return '';

      return `
        <section class="menu-category-block">
          <div class="menu-category-title">
            <h3>${catBlock.category}</h3>
            <span style="font-size:0.8rem; font-family:var(--font-sans); color:var(--text-muted);">${matchedItems.length} items</span>
          </div>
          <p class="menu-category-sub">${catBlock.subtitle}</p>
          <div class="menu-items-grid">
            ${matchedItems.map(item => `
              <div class="menu-item-card">
                <div>
                  <div class="menu-item-name">
                    <span class="diet-dot ${item.diet}"></span>
                    ${item.name}
                  </div>
                  ${item.desc ? `<p class="menu-item-desc">${item.desc}</p>` : ''}
                </div>
                <div class="menu-item-right">
                  <span class="menu-item-price">Rs. ${item.price}</span>
                  <button class="add-mini-btn" onclick="addToEstimate('${item.name.replace(/'/g, "\'")}', ${item.price})">+ Add</button>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }).join('');

  container.innerHTML = html || `<p style="text-align:center; padding:32px; color:var(--text-muted);">No dishes matched your filter. Try clearing search or dietary filters.</p>`;
}

function bindEvents() {
  document.getElementById('mobileMenuToggle').addEventListener('click', () => toggleMobileNav());

  document.querySelectorAll('.mobile-nav-list a').forEach(link => {
    link.addEventListener('click', () => toggleMobileNav(true));
  });

  document.querySelectorAll('.combo-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.combo-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeComboFilter = btn.dataset.combo;
      renderCombos();
    });
  });

  document.querySelectorAll('.diet-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.diet-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeDietFilter = btn.dataset.diet;
      renderMenu();
    });
  });

  document.getElementById('menuSearchInput').addEventListener('input', e => {
    searchQuery = e.target.value;
    renderMenu();
  });

  document.getElementById('conciergeForm').addEventListener('submit', e => {
    e.preventDefault();
    const service = document.getElementById('cService').value;
    const date = document.getElementById('cDate').value || 'Flexible Date';
    const guests = document.getElementById('cGuests').value || '4';
    const phone = document.getElementById('cPhone').value;
    const msg = `Hello Adam Suvai Zone! I would like to book:%0A• Service: ${service}%0A• Date: ${date}%0A• Guests: ${guests}%0A• Contact: ${phone}`;
    window.open(`https://wa.me/919498033636?text=${msg}`, '_blank');
  });

  document.getElementById('cateringForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('catName').value;
    const eventType = document.getElementById('catEvent').value;
    const pax = document.getElementById('catPax').value;
    const date = document.getElementById('catDate').value;
    const notes = document.getElementById('catNotes').value;
    const msg = `Hello Adam Suvai Zone Catering Team!%0A• Name: ${name}%0A• Event: ${eventType}%0A• Expected Guests: ${pax}%0A• Date: ${date}%0A• Preferences: ${notes}`;
    window.open(`https://wa.me/919498033636?text=${msg}`, '_blank');
  });
}

function addToEstimate(name, price) {
  const existing = estimateCart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    estimateCart.push({ name, price, qty: 1 });
  }
  updateDrawerUI();
  openDrawer();
}

function changeQty(index, delta) {
  estimateCart[index].qty += delta;
  if (estimateCart[index].qty <= 0) {
    estimateCart.splice(index, 1);
  }
  updateDrawerUI();
}

function updateDrawerUI() {
  const count = estimateCart.reduce((sum, i) => sum + i.qty, 0);
  const total = estimateCart.reduce((sum, i) => sum + i.price * i.qty, 0);
  document.getElementById('cartBadge').textContent = count;
  const dockBadge = document.getElementById('dockCartBadge');
  if (dockBadge) dockBadge.textContent = count;
  document.getElementById('drawerTotal').textContent = `Rs. ${total}`;

  const list = document.getElementById('drawerItems');
  if (!estimateCart.length) {
    list.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem;">Your estimate list is empty. Add dishes or combos from the menu to calculate party/order totals.</p>`;
    return;
  }

  list.innerHTML = estimateCart.map((item, idx) => `
    <div class="drawer-item">
      <div>
        <strong style="font-size:0.9rem; display:block;">${item.name}</strong>
        <span style="font-size:0.8rem; color:var(--text-muted);">Rs. ${item.price} × ${item.qty}</span>
      </div>
      <div style="display:flex; align-items:center; gap:6px;">
        <button class="add-mini-btn" onclick="changeQty(${idx}, -1)">-</button>
        <span style="font-weight:700; min-width:18px; text-align:center;">${item.qty}</span>
        <button class="add-mini-btn" onclick="changeQty(${idx}, 1)">+</button>
      </div>
    </div>
  `).join('');
}

function openDrawer() {
  document.getElementById('estimateDrawer').classList.add('open');
  document.getElementById('drawerBackdrop').classList.add('open');
}

function closeDrawer() {
  document.getElementById('estimateDrawer').classList.remove('open');
  document.getElementById('drawerBackdrop').classList.remove('open');
}

function sendEstimateWhatsApp() {
  if (!estimateCart.length) {
    alert('Please add at least one item or combo first.');
    return;
  }
  const lines = estimateCart.map(i => `• ${i.name} x${i.qty} = Rs. ${i.price * i.qty}`).join('%0A');
  const total = estimateCart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const text = `Hello Adam Suvai Zone! Here is my Menu / Party Order Estimate:%0A%0A${lines}%0A%0A*Estimated Subtotal: Rs. ${total}* (+ GST as applicable)`;
  window.open(`https://wa.me/919498033636?text=${text}`, '_blank');
}
