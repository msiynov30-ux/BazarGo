"use strict";

/* BazarGo demo data and interactive page behavior. */
const categoryData = [
  { id: "clothes", title: "Одежда", count: "1 240 объявлений", icon: "👕", tint: "#f8e8de" },
  { id: "beauty", title: "Красота", count: "860 объявлений", icon: "🧴", tint: "#f5e2ed" },
  { id: "phones", title: "Телефоны", count: "530 объявлений", icon: "📱", tint: "#e4e9fa" },
  { id: "home", title: "Для дома", count: "920 объявлений", icon: "🪴", tint: "#e5efe1" },
  { id: "kids", title: "Детям", count: "410 объявлений", icon: "🧸", tint: "#fcf0d7" },
  { id: "other", title: "Другое", count: "2 100 объявлений", icon: "🎧", tint: "#e9e5f7" }
];

const productData = [
  { id: 1, title: "Кроссовки New Balance 530", price: 6800, category: "clothes", condition: "new", city: "Бишкек, Октябрьский", image: "photo-1542291026-7eec264c27ff", badge: "ХИТ", rating: 4.9 },
  { id: 2, title: "Увлажняющий крем для лица", price: 1450, category: "beauty", condition: "new", city: "Бишкек, центр", image: "photo-1608248543803-ba4f8c70ae0b", badge: "НОВОЕ", rating: 4.8 },
  { id: 3, title: "iPhone 13 · 128 ГБ", price: 42500, category: "phones", condition: "used", city: "Бишкек, Аламедин", image: "photo-1592750475338-74b7b21085ab", badge: "ТОРГ", rating: 4.9 },
  { id: 4, title: "Кожаная сумка через плечо", price: 3900, category: "clothes", condition: "used", city: "Бишкек, Первомайский", image: "photo-1584917865442-de89df76afd3", badge: "НАХОДКА", rating: 4.7 },
  { id: 5, title: "Набор ухода COSRX", price: 3200, category: "beauty", condition: "new", city: "Ош, центр", image: "photo-1556229010-6c3f2c9ca5f8", badge: "НОВОЕ", rating: 4.9 },
  { id: 6, title: "Наушники Sony WH-1000XM4", price: 18900, category: "other", condition: "used", city: "Бишкек, Юг-2", image: "photo-1546435770-a3e426bf472b", badge: "ТОРГ", rating: 4.8 },
  { id: 7, title: "Куртка демисезонная", price: 5200, category: "clothes", condition: "new", city: "Бишкек, Асанбай", image: "photo-1544923246-77307dd654cb", badge: "НОВОЕ", rating: 4.6 },
  { id: 8, title: "Настольная лампа", price: 2100, category: "home", condition: "used", city: "Каракол, центр", image: "photo-1507473885765-e6ed057f782c", badge: "ХОРОШАЯ ЦЕНА", rating: 4.7 },
  { id: 9, title: "Детский конструктор", price: 1800, category: "kids", condition: "used", city: "Бишкек, Джал", image: "photo-1587654780291-39c9404d746b", badge: "ТОРГ", rating: 4.8 },
  { id: 10, title: "Смарт-часы Galaxy Watch", price: 11800, category: "phones", condition: "used", city: "Бишкек, центр", image: "photo-1523275335684-37898b6baf30", badge: "НАХОДКА", rating: 4.6 },
  { id: 11, title: "Парфюмированный мист", price: 950, category: "beauty", condition: "new", city: "Ош, Анар", image: "photo-1594035910387-fea47794261f", badge: "НОВОЕ", rating: 4.8 },
  { id: 12, title: "Декоративная ваза", price: 2600, category: "home", condition: "new", city: "Бишкек, Восток-5", image: "photo-1578500494198-246f612d3b3d", badge: "СВЕЖЕЕ", rating: 4.7 },
  { id: 13, title: "Джинсы прямого кроя", price: 2400, category: "clothes", condition: "used", city: "Бишкек, Тунгуч", image: "photo-1541099649105-f69ad21f3246", badge: "ТОРГ", rating: 4.7 },
  { id: 14, title: "Сыворотка с витамином C", price: 1100, category: "beauty", condition: "new", city: "Ош, центр", image: "photo-1601049541289-9b1b7bbbfe19", badge: "НОВОЕ", rating: 4.9 },
  { id: 15, title: "Чехол для смартфона", price: 700, category: "phones", condition: "new", city: "Бишкек, центр", image: "photo-1601593346740-925612772716", badge: "СВЕЖЕЕ", rating: 4.6 },
  { id: 16, title: "Мягкий плед для дома", price: 1750, category: "home", condition: "new", city: "Кант, центр", image: "photo-1600210492486-724fe5c67fb0", badge: "НОВОЕ", rating: 4.8 }
];

const state = {
  category: "all",
  condition: "all",
  query: "",
  sort: "popular",
  favorites: new Set(),
  cart: [],
  visibleCount: 8,
  toastTimer: null,
  lastFocused: null
};

const elements = {
  categories: document.querySelector("#category-grid"),
  products: document.querySelector("#product-grid"),
  searchForm: document.querySelector("#search-form"),
  searchInput: document.querySelector("#search-input"),
  sortSelect: document.querySelector("#sort-select"),
  tabs: document.querySelector("#condition-tabs"),
  resultsCaption: document.querySelector("#results-caption"),
  emptyState: document.querySelector("#empty-state"),
  loadMore: document.querySelector("#load-more-button"),
  toast: document.querySelector("#toast"),
  backdrop: document.querySelector("#modal-backdrop"),
  modalBody: document.querySelector("#modal-body"),
  modalClose: document.querySelector("#modal-close"),
  cartCount: document.querySelector("#cart-count"),
  favoritesCount: document.querySelector("#favorites-count"),
  selectedCity: document.querySelector("#selected-city")
};

function formatPrice(price) {
  return new Intl.NumberFormat("ru-RU").format(price);
}

function getCategory(categoryId) {
  return categoryData.find((category) => category.id === categoryId);
}

function imageSource(photoId, width = 640) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=82`;
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");

  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 2500);
}

function renderCategories() {
  elements.categories.innerHTML = categoryData.map((category) => {
    const selected = state.category === category.id;

    return `
      <button class="category-card ${selected ? "is-selected" : ""}"
        type="button" data-category="${category.id}"
        aria-pressed="${selected}">
        <span class="category-icon" style="background:${category.tint}">${category.icon}</span>
        <span class="category-name">${category.title}</span>
        <span class="category-count">${category.count}</span>
      </button>`;
  }).join("");
}

function getFilteredProducts() {
  let result = productData.filter((product) => {
    const categoryMatches =
      state.category === "all" || product.category === state.category;

    const conditionMatches =
      state.condition === "all" || product.condition === state.condition;

    const categoryName = getCategory(product.category)?.title || "";
    const searchText =
      `${product.title} ${product.city} ${categoryName}`.toLocaleLowerCase("ru");

    const queryMatches =
      searchText.includes(state.query.toLocaleLowerCase("ru"));

    return categoryMatches && conditionMatches && queryMatches;
  });

  if (state.sort === "cheap") {
    result = result.sort((first, second) => first.price - second.price);
  }

  if (state.sort === "expensive") {
    result = result.sort((first, second) => second.price - first.price);
  }

  return result;
}

function createProductCard(product) {
  const isUsed = product.condition === "used";
  const isFavorite = state.favorites.has(product.id);
  const conditionText = isUsed ? "Б/у" : "Новое";
  const favoriteText = isFavorite ? "Убрать из избранного" : "В избранное";

  return `
    <article class="product-card" data-product="${product.id}" tabindex="0"
      role="button" aria-label="${product.title}, ${formatPrice(product.price)} сом">
      <div class="product-image">
        <img src="${imageSource(product.image)}" alt="${product.title}" loading="lazy">
        <span class="product-badge ${isUsed ? "is-used" : ""}">${product.badge}</span>
        <button class="favorite-toggle ${isFavorite ? "is-favorite" : ""}"
          type="button" data-favorite="${product.id}" aria-label="${favoriteText}">
          ${isFavorite ? "♥" : "♡"}
        </button>
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.title}</h3>
        <div class="product-price">${formatPrice(product.price)} <small>сом</small></div>
        <div class="product-meta">
          <span class="product-location">⌖ ${product.city}</span>
          <span class="product-condition ${isUsed ? "is-used" : ""}"><i></i>${conditionText}</span>
        </div>
      </div>
    </article>`;
}

function renderProducts() {
  const allProducts = getFilteredProducts();
  const visibleProducts = allProducts.slice(0, state.visibleCount);

  elements.products.innerHTML = visibleProducts.map(createProductCard).join("");
  elements.emptyState.hidden = allProducts.length > 0;
  elements.loadMore.hidden = allProducts.length <= state.visibleCount;

  const activeCategory = getCategory(state.category);

  if (activeCategory) {
    elements.resultsCaption.textContent =
      `${activeCategory.title} · ${allProducts.length} объявлений`;
  } else {
    elements.resultsCaption.textContent =
      `${allProducts.length} свежих объявлений`;
  }

  updateCounters();
}

function updateCounters() {
  elements.cartCount.textContent = state.cart.length;
  elements.favoritesCount.textContent = state.favorites.size;
}

function refreshCatalog() {
  renderCategories();
  renderProducts();
}

function selectCategory(categoryId) {
  state.category = categoryId;
  state.visibleCount = 8;

  refreshCatalog();

  document.querySelector("#catalog").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function selectCondition(condition) {
  state.condition = condition;
  state.visibleCount = 8;

  elements.tabs.querySelectorAll("[data-condition]").forEach((tab) => {
    const active = tab.dataset.condition === condition;

    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-pressed", String(active));
  });

  renderProducts();
}

function resetFilters() {
  state.category = "all";
  state.condition = "all";
  state.query = "";
  state.sort = "popular";
  state.visibleCount = 8;

  elements.searchInput.value = "";
  elements.sortSelect.value = "popular";

  selectCondition("all");
  refreshCatalog();
}

function toggleFavorite(productId) {
  const id = Number(productId);

  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    showToast("Убрано из избранного");
  } else {
    state.favorites.add(id);
    showToast("Добавлено в избранное ♥");
  }

  renderProducts();
}

function openModal(markup) {
  state.lastFocused = document.activeElement;
  elements.modalBody.innerHTML = markup;
  elements.backdrop.hidden = false;
  document.body.style.overflow = "hidden";
  elements.modalClose.focus();
}

function closeModal() {
  elements.backdrop.hidden = true;
  document.body.style.overflow = "";

  if (state.lastFocused && typeof state.lastFocused.focus === "function") {
    state.lastFocused.focus();
  }
}

function showProduct(productId) {
  const product = productData.find((item) => item.id === Number(productId));

  if (!product) return;

  const category = getCategory(product.category);
  const condition = product.condition === "used" ? "Б/у" : "Новое";

  openModal(`
    <div class="modal-product-image">
      <img src="${imageSource(product.image, 900)}" alt="${product.title}">
    </div>
    <p class="modal-eyebrow">${category.title} · ${condition}</p>
    <h2 id="modal-title">${product.title}</h2>
    <div class="product-price">${formatPrice(product.price)} <small>сом</small></div>
    <p>Хорошая находка от продавца рядом. Можно написать продавцу и договориться о встрече.</p>
    <p>⌖ ${product.city} &nbsp; · &nbsp; ★ ${product.rating} рейтинг продавца</p>
    <div class="modal-buttons">
      <button class="button button-primary" type="button" data-add-cart="${product.id}">
        Добавить в корзину
      </button>
      <button class="button-secondary" type="button" data-contact-seller>
        Написать продавцу
      </button>
    </div>`);
}

function showSellForm() {
  const categoryOptions = categoryData.map((category) => {
    return `<option value="${category.id}">${category.title}</option>`;
  }).join("");

  openModal(`
    <p class="modal-eyebrow">BAZARGO · ПРОДАВАЙ РЯДОМ</p>
    <h2 id="modal-title">Новое объявление</h2>
    <p>Расскажи о вещи — покупатель найдётся поблизости.</p>
    <form class="modal-form" id="sell-form">
      <label class="form-field">Название товара
        <input name="title" required maxlength="70" placeholder="Например, кроссовки Nike">
      </label>
      <label class="form-field">Категория
        <select name="category" required>
          <option value="">Выбери категорию</option>
          ${categoryOptions}
        </select>
      </label>
      <label class="form-field">Цена, сом
        <input name="price" required type="number" min="1" placeholder="0">
      </label>
      <label class="form-field">Город
        <input name="city" required value="${elements.selectedCity.textContent}">
      </label>
      <label class="form-field">Описание
        <textarea name="description" maxlength="500" placeholder="Состояние, размер, детали"></textarea>
      </label>
      <button class="button button-primary" type="submit">
        Опубликовать объявление ↗
      </button>
      <p class="modal-note">Демо-сайт: для публикации объявлений нужен сервер.</p>
    </form>`);
}

function showSignInForm() {
  openModal(`
    <p class="modal-eyebrow">РАДЫ ВИДЕТЬ ТЕБЯ</p>
    <h2 id="modal-title">Войти в BazarGo</h2>
    <p>Войди, чтобы сохранять находки и общаться с продавцами.</p>
    <form class="modal-form" id="sign-in-form">
      <label class="form-field">Номер телефона
        <input name="phone" type="tel" required placeholder="+996 555 123 456">
      </label>
      <button class="button button-primary" type="submit">Продолжить</button>
      <p class="modal-note">Демо-режим: вход пока не подключён.</p>
    </form>`);
}

function chooseCity() {
  const cities = ["Бишкек", "Ош", "Каракол", "Джалал-Абад", "Токмок"];

  const cityOptions = cities.map((city) => {
    return `
      <button class="city-option" type="button" data-city="${city}">
        ${city}
      </button>`;
  }).join("");

  openModal(`
    <p class="modal-eyebrow">ПОКУПКИ РЯДОМ</p>
    <h2 id="modal-title">Выбери город</h2>
    <div class="city-options">${cityOptions}</div>`);
}

function showFavorites() {
  if (!state.favorites.size) {
    showToast("Сохрани понравившиеся товары ♡");
    return;
  }

  const favoriteProducts = productData.filter((product) =>
    state.favorites.has(product.id)
  );

  const favoriteNames = favoriteProducts.map((product) => product.title);

  showToast(
    `В избранном: ${favoriteNames.length} · ${favoriteNames.slice(0, 2).join(", ")}`
  );
}

function showCart() {
  if (!state.cart.length) {
    showToast("Корзина пока пуста");
    return;
  }

  const totalPrice = state.cart.reduce((sum, productId) => {
    const product = productData.find((item) => item.id === productId);
    return sum + (product ? product.price : 0);
  }, 0);

  showToast(`В корзине ${state.cart.length} · ${formatPrice(totalPrice)} сом`);
}

function addToCart(productId) {
  state.cart.push(Number(productId));
  updateCounters();
  closeModal();
  showToast("Товар добавлен в корзину");
}

function handleClick(event) {
  const categoryButton = event.target.closest("[data-category]");

  if (categoryButton) {
    selectCategory(categoryButton.dataset.category);
    return;
  }

  const favoriteButton = event.target.closest("[data-favorite]");

  if (favoriteButton) {
    event.stopPropagation();
    toggleFavorite(favoriteButton.dataset.favorite);
    return;
  }

  const cartButton = event.target.closest("[data-add-cart]");

  if (cartButton) {
    addToCart(cartButton.dataset.addCart);
    return;
  }

  const productCard = event.target.closest("[data-product]");

  if (productCard) {
    showProduct(productCard.dataset.product);
    return;
  }

  if (event.target.closest("[data-open-sell]")) {
    showSellForm();
    return;
  }

  if (event.target.closest("#sign-in-button")) {
    showSignInForm();
    return;
  }

  if (event.target.closest("#location-button, #city-button")) {
    chooseCity();
    return;
  }

  if (event.target.closest("#favorites-button")) {
    showFavorites();
    return;
  }

  if (event.target.closest("#cart-button")) {
    showCart();
    return;
  }

  if (event.target.closest("#load-more-button")) {
    state.visibleCount += 4;
    renderProducts();
    return;
  }

  if (event.target.closest("#reset-button, [data-reset]")) {
    resetFilters();
    return;
  }

  if (event.target.closest("[data-contact-seller]")) {
    showToast("Связь с продавцом скоро появится");
    return;
  }

  const cityButton = event.target.closest("[data-city]");

  if (cityButton) {
    elements.selectedCity.textContent = cityButton.dataset.city;
    closeModal();
    showToast(`Город изменён: ${cityButton.dataset.city}`);
    return;
  }

  if (
    event.target.closest("#modal-close") ||
    event.target === elements.backdrop
  ) {
    closeModal();
  }
}

function handleKeydown(event) {
  if (event.key === "Escape" && !elements.backdrop.hidden) {
    closeModal();
  }

  if (
    (event.key === "Enter" || event.key === " ") &&
    event.target.matches("[data-product]")
  ) {
    event.preventDefault();
    showProduct(event.target.dataset.product);
  }
}

function handleSearch(event) {
  event.preventDefault();
  state.query = elements.searchInput.value.trim();
  state.visibleCount = 8;
  renderProducts();

  document.querySelector("#catalog").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function handleLiveSearch(event) {
  if (event.target.value === "") {
    state.query = "";
    renderProducts();
  }
}

function handleConditionChange(event) {
  const tab = event.target.closest("[data-condition]");

  if (!tab) return;

  selectCondition(tab.dataset.condition);
}

function handleSortChange(event) {
  state.sort = event.target.value;
  renderProducts();
}

function handleModalSubmit(event) {
  if (event.target.id === "sell-form") {
    event.preventDefault();
    closeModal();
    showToast("Объявление подготовлено. Подключи сервер для публикации.");
  }

  if (event.target.id === "sign-in-form") {
    event.preventDefault();
    closeModal();
    showToast("Вход появится в полной версии сайта.");
  }
}

function bindEvents() {
  document.addEventListener("click", handleClick);
  document.addEventListener("keydown", handleKeydown);

  elements.searchForm.addEventListener("submit", handleSearch);
  elements.searchInput.addEventListener("input", handleLiveSearch);
  elements.tabs.addEventListener("click", handleConditionChange);
  elements.sortSelect.addEventListener("change", handleSortChange);
  elements.backdrop.addEventListener("submit", handleModalSubmit);
}

function init() {
  bindEvents();
  renderCategories();
  renderProducts();
}

init();