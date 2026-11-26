"use strict";

const translations = {
  ru: {
    country: "Кыргызстан", topline: "Покупай рядом. Продавай легко.",
    cityLabel: "Ваш город", searchPlaceholder: "Что ищем? Например, телефон или куртку",
    favorites: "Избранное", cart: "Корзина", signIn: "Войти",
    market: "МАРКЕТПЛЕЙС КЫРГЫЗСТАНА",
    heroTitle: "Хорошие вещи<br>находятся <em>рядом.</em>",
    heroDescription: "Покупай любимое, открывай новое и продавай то, что больше не нужно. Всё просто и по-соседски.",
    sellButton: "＋ Разместить объявление", browse: "Перейти к товарам",
    socialStrong: "Выбирают каждый день", socialText: "покупатели по всему Кыргызстану",
    categoriesEyebrow: "ВЫБИРАЙ СВОЁ", categoriesTitle: "Что ищем сегодня?",
    allCategories: "Все категории", catalogEyebrow: "ТВОЯ СЛЕДУЮЩАЯ НАХОДКА",
    catalogTitle: "Популярное рядом", all: "Все", new: "Новое", used: "Б/у",
    popular: "Сначала популярные", cheap: "Сначала дешевле", expensive: "Сначала дороже",
    reset: "Сбросить фильтры", fresh: "Свежих объявлений", loadMore: "Показать ещё",
    sellerEyebrow: "ЕСТЬ ЧТО ПРОДАТЬ?", sellerTitle: "Освободите место.",
    sellerTitle2: "Найдите нового хозяина.", sellerText: "Создай объявление за пару минут — покупатель может быть совсем рядом.",
    startSelling: "Начать продавать", footer: "Маркетплейс, который ближе.", footerLove: "Сделано с",
    inKyrgyzstan: "в Кыргызстане"
  },
  ky: {
    country: "Кыргызстан", topline: "Жакындан сатып ал. Жөнөкөй сат.",
    cityLabel: "Сиздин шаарыңыз", searchPlaceholder: "Эмне изделүүдө? Мисалы, телефон же куртка",
    favorites: "Тандалгандар", cart: "Себет", signIn: "Кирүү",
    market: "КЫРГЫЗСТАНДАГЫ МАРКЕТПЛЕЙС",
    heroTitle: "Жакшы нерселер<br>жакындан <em>табылат.</em>",
    heroDescription: "Сүйүктүү нерселериңизди сатып алыңыз, жаңысын табыңыз жана кереги жок нерсени сатыңыз.",
    sellButton: "＋ Жарнама жайгаштыруу", browse: "Товарларга өтүү",
    socialStrong: "Күн сайын тандалышат", socialText: "Кыргызстан боюнча сатып алуучулар",
    categoriesEyebrow: "ӨЗҮҢДҮКҮН ТАНДА", categoriesTitle: "Бүгүн эмне изделүүдө?",
    allCategories: "Бардык категориялар", catalogEyebrow: "КИЙИНКИ ЖАҢЫ ЖОЛУГУШУУ",
    catalogTitle: "Жакынкы популярдуу нерселер", all: "Баары", new: "Жаңы", used: "Колдонулган",
    popular: "Алгач популярдуу", cheap: "Алгач арзан", expensive: "Алгач кымбат",
    reset: "Фильтрлерди тазалоо", fresh: "жаңы жарыя", loadMore: "Дагы көрсөтүү",
    sellerEyebrow: "САТЫЛЫЙ ТУРУКАН НЕРСЕ БАРБЫ?", sellerTitle: "Орун бошотуңуз.",
    sellerTitle2: "Жаңы ээ табыңыз.", sellerText: "Бир нече мүнөттө жарнама түзүңүз — сатып алуучу жакын болушу мүмкүн.",
    startSelling: "Сата баштоо", footer: "Жакыныраак маркетплейс.", footerLove: "Сүйүү менен",
    inKyrgyzstan: "Кыргызстанда жасалган"
  },
  en: {
    country: "Kyrgyzstan", topline: "Buy nearby. Sell easily.",
    cityLabel: "Your city", searchPlaceholder: "What are you looking for? Phone or jacket",
    favorites: "Favorites", cart: "Cart", signIn: "Sign in",
    market: "MARKETPLACE OF KYRGYZSTAN",
    heroTitle: "Good finds are<br>always <em>nearby.</em>",
    heroDescription: "Buy what you love, discover something new, and sell what you no longer need.",
    sellButton: "＋ Post a listing", browse: "Browse products",
    socialStrong: "Chosen every day", socialText: "by shoppers across Kyrgyzstan",
    categoriesEyebrow: "CHOOSE YOURS", categoriesTitle: "What are you looking for today?",
    allCategories: "All categories", catalogEyebrow: "YOUR NEXT FIND",
    catalogTitle: "Popular nearby", all: "All", new: "New", used: "Used",
    popular: "Most popular", cheap: "Lowest price", expensive: "Highest price",
    reset: "Reset filters", fresh: "fresh listings", loadMore: "Load more",
    sellerEyebrow: "HAVE SOMETHING TO SELL?", sellerTitle: "Make some space.",
    sellerTitle2: "Find a new owner.", sellerText: "Create a listing in minutes — a buyer could be right nearby.",
    startSelling: "Start selling", footer: "The closer marketplace.", footerLove: "Made with",
    inKyrgyzstan: "in Kyrgyzstan"
  }
};

let currentLanguage = localStorage.getItem("bazarGoLanguage") || "ru";

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
  favorites: new Set(loadStoredArray("bazarGoFavorites").map(Number)),
  cart: loadStoredArray("bazarGoCart").map(Number),
  visibleCount: 8,
  toastTimer: null,
  lastFocused: null
};

function loadStoredArray(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function storeState() {
  localStorage.setItem("bazarGoFavorites", JSON.stringify([...state.favorites]));
  localStorage.setItem("bazarGoCart", JSON.stringify(state.cart));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

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
  selectedCity: document.querySelector("#selected-city"),
  themeToggle: document.querySelector("#theme-toggle"),
  themeIcon: document.querySelector("#theme-toggle .theme-icon"),
  languageButton: document.querySelector("#language-button"),
  languageCode: document.querySelector("#language-code"),
  languageMenu: document.querySelector("#language-menu"),
  favoritesPage: document.querySelector("#favorites-page"),
  favoritesGrid: document.querySelector("#favorites-page-grid"),
  favoritesEmpty: document.querySelector("#favorites-empty"),
  favoritesCaption: document.querySelector("#favorites-page-caption")
};

function formatPrice(price) {
  return new Intl.NumberFormat("ru-RU").format(price);
}

function getCategory(categoryId) {
  return categoryData.find((category) => category.id === categoryId);
}

const categoryTranslations = {
  ru: { clothes: "Одежда", beauty: "Красота", phones: "Телефоны", home: "Для дома", kids: "Детям", other: "Другое" },
  ky: { clothes: "Кийим", beauty: "Сулуулик", phones: "Телефон", home: "Үйгө", kids: "Балдарга", other: "Башка" },
  en: { clothes: "Clothing", beauty: "Beauty", phones: "Phones", home: "Home", kids: "Kids", other: "Other" }
};

const productTranslations = {
  ky: {
    1:"New Balance 530 кроссовкалары", 2:"Бетке нымдатуучу крем", 3:"iPhone 13 · 128 ГБ",
    4:"Тери кол чанта", 5:"COSRX кам көрүү жыйнагы", 6:"Sony WH-1000XM4 гарнитурасы",
    7:"Мезгилдик куртка", 8:"Стол лампасы", 9:"Балдар конструктору",
    10:"Galaxy Watch акылдуу саат", 11:"Парфюмдолгон мист", 12:"Декоративдик ваза",
    13:"Түз бийик джинсы", 14:"C витамини сывороткасы", 15:"Смартфон үчүн кабык", 16:"Жумшак үй көрпөсү"
  },
  en: {
    1:"New Balance 530 sneakers", 2:"Hydrating face cream", 3:"iPhone 13 · 128 GB",
    4:"Leather shoulder bag", 5:"COSRX skincare set", 6:"Sony WH-1000XM4 headphones",
    7:"Mid-season jacket", 8:"Desk lamp", 9:"Kids building set",
    10:"Galaxy Watch smartwatch", 11:"Perfumed body mist", 12:"Decorative vase",
    13:"Straight-leg jeans", 14:"Vitamin C serum", 15:"Smartphone case", 16:"Soft throw blanket"
  }
};

function getCategoryTitle(categoryId) {
  return categoryTranslations[currentLanguage][categoryId] || getCategory(categoryId)?.title || "";
}

function getProductTitle(product) {
  return productTranslations[currentLanguage]?.[product.id] || product.title;
}

function imageSource(photoId, width = 640) {
  if (/^https?:\/\//i.test(photoId)) return photoId;
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
        <span class="category-name">${getCategoryTitle(category.id)}</span>
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

    const categoryName = getCategoryTitle(product.category);
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
  const t = translations[currentLanguage];
  const conditionText = isUsed ? t.used : t.new;
  const title = getProductTitle(product);
  const favoriteText = isFavorite ? "Убрать из избранного" : "В избранное";

  return `
    <article class="product-card" data-product="${product.id}" tabindex="0"
      aria-label="${escapeHtml(title)}, ${formatPrice(product.price)} сом">
      <div class="product-image">
        <img src="${imageSource(product.image)}" alt="${escapeHtml(title)}" loading="lazy">
        <span class="product-badge ${isUsed ? "is-used" : ""}">${product.badge}</span>
        <button class="favorite-toggle ${isFavorite ? "is-favorite" : ""}"
          type="button" data-favorite="${product.id}" aria-label="${favoriteText}">
          ${isFavorite ? "♥" : "♡"}
        </button>
      </div>
      <div class="product-info">
        <h3 class="product-title">${escapeHtml(title)}</h3>
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
      `${getCategoryTitle(state.category)} · ${allProducts.length} ${
        currentLanguage === "en" ? "listings" : currentLanguage === "ky" ? "жарыя" : "объявлений"
      }`;
  } else {
    elements.resultsCaption.textContent =
      `${allProducts.length} ${translations[currentLanguage].fresh}`;
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

  storeState();
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
    </form>`);
}

function showSignInForm() {
  openModal(`
    <p class="modal-eyebrow">ВХОД И РЕГИСТРАЦИЯ</p>
    <h2 id="modal-title">Создать аккаунт BazarGo</h2>
    <p>Заполни данные, чтобы сохранять находки и общаться с продавцами.</p>
    <form class="modal-form" id="sign-in-form">
      <label class="form-field">Имя
        <input name="name" type="text" required minlength="2" placeholder="Например, Айбек">
      </label>
      <label class="form-field">Номер телефона
        <input name="phone" type="tel" required minlength="9" placeholder="+996 555 123 456">
      </label>
      <label class="form-field">Электронная почта
        <input name="email" type="email" required placeholder="example@mail.com">
      </label>
      <label class="form-field">Пароль
        <input name="password" type="password" required minlength="6" autocomplete="new-password" placeholder="Минимум 6 символов">
      </label>
      <label class="registration-check">
        <input name="agreement" type="checkbox" required>
        <span>Согласен с правилами использования BazarGo</span>
      </label>
      <button class="button button-primary" type="submit">Зарегистрироваться</button>
      <p class="modal-note">Данные сохраняются только в этом браузере.</p>
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
  const favoriteProducts = productData.filter((product) =>
    state.favorites.has(product.id)
  );

  const mainSections = document.querySelectorAll("#home > section");
  mainSections.forEach((section) => {
    section.hidden = section !== elements.favoritesPage;
  });

  elements.favoritesGrid.innerHTML = favoriteProducts.map(createProductCard).join("");
  elements.favoritesGrid.hidden = favoriteProducts.length === 0;
  elements.favoritesEmpty.hidden = favoriteProducts.length > 0;

  const countText = currentLanguage === "en"
    ? `${favoriteProducts.length} items`
    : currentLanguage === "ky"
      ? `${favoriteProducts.length} товар`
      : `${favoriteProducts.length} товаров`;
  elements.favoritesCaption.textContent = countText;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showMainPage() {
  const mainSections = document.querySelectorAll("#home > section");
  mainSections.forEach((section) => {
    section.hidden = section === elements.favoritesPage;
  });
  elements.favoritesPage.hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showCart() {
  if (!state.cart.length) {
    showToast("Корзина пока пуста");
    return;
  }

  const cartProducts = state.cart
    .filter((productId, index, ids) => ids.indexOf(productId) === index)
    .map((productId) => productData.find((item) => item.id === productId))
    .filter(Boolean);

  const totalPrice = cartProducts.reduce((sum, product) => {
    return sum + (product ? product.price : 0);
  }, 0);

  openModal(`
    <p class="modal-eyebrow">ВАША КОРЗИНА</p>
    <h2 id="modal-title">${cartProducts.length} товар(а)</h2>
    <div class="modal-list">
      ${cartProducts.map((product) => `
        <button class="modal-list-item" type="button" data-product="${product.id}">
          <span>${escapeHtml(product.title)}</span>
          <strong>${formatPrice(product.price)} сом</strong>
        </button>`).join("")}
    </div>
    <div class="cart-total">Итого: <strong>${formatPrice(totalPrice)} сом</strong></div>`);
}

function addToCart(productId) {
  const id = Number(productId);
  if (!state.cart.includes(id)) state.cart.push(id);
  storeState();
  updateCounters();
  closeModal();
  showToast("Товар добавлен в корзину");
}

function handleClick(event) {
  if (event.target.closest("#favorites-back")) {
    showMainPage();
    return;
  }

  if (event.target.closest("#favorites-browse")) {
    showMainPage();
    document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (event.target.closest("#language-button")) {
    elements.languageMenu.hidden = !elements.languageMenu.hidden;
    elements.languageButton.setAttribute("aria-expanded", String(!elements.languageMenu.hidden));
    return;
  }

  const languageButton = event.target.closest("[data-language]");
  if (languageButton) {
    applyLanguage(languageButton.dataset.language);
    return;
  }

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
    localStorage.setItem("bazarGoCity", cityButton.dataset.city);
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
  state.query = event.target.value.trim();
  state.visibleCount = 8;
  renderProducts();
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

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  elements.themeIcon.textContent = isDark ? "☀" : "☾";
  elements.themeToggle.setAttribute(
    "aria-label",
    isDark ? "Включить светлую тему" : "Включить тёмную тему"
  );

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.setAttribute("content", isDark ? "#171d19" : "#f8f8f4");
  localStorage.setItem("bazarGoTheme", isDark ? "dark" : "light");
}

function toggleTheme() {
  applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
}

function applyLanguage(language) {
  currentLanguage = ["ru", "ky", "en"].includes(language) ? language : "ru";
  const t = translations[currentLanguage];

  document.documentElement.lang = currentLanguage === "ky" ? "ky" : currentLanguage;
  elements.languageCode.textContent = currentLanguage.toUpperCase();
  elements.languageMenu.hidden = true;
  elements.languageButton.setAttribute("aria-expanded", "false");

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (t[key]) node.textContent = t[key];
  });

  document.querySelector(".location-copy small").textContent = t.cityLabel;
  elements.searchInput.placeholder = t.searchPlaceholder;
  document.querySelector("#favorites-button > span:last-child").textContent = t.favorites;
  document.querySelector("#cart-button > span:last-child").textContent = t.cart;
  document.querySelector("#sign-in-button").textContent = t.signIn;
  document.querySelector(".eyebrow").lastChild.textContent = ` ${t.market}`;
  document.querySelector("#hero-title").innerHTML = t.heroTitle;
  document.querySelector(".hero-description").textContent = t.heroDescription;
  document.querySelector(".hero-buttons .button-primary").innerHTML = t.sellButton;
  document.querySelector(".button-link").innerHTML = `${t.browse} <span>↘</span>`;
  document.querySelector(".hero-social-proof strong").textContent = t.socialStrong;
  document.querySelector(".hero-social-proof p").lastChild.textContent = t.socialText;
  document.querySelector(".categories-section .section-eyebrow").textContent = t.categoriesEyebrow;
  document.querySelector("#categories-title").textContent = t.categoriesTitle;
  document.querySelector(".quiet-link").innerHTML = `${t.allCategories} <span>↗</span>`;
  document.querySelector(".catalog-heading .section-eyebrow").textContent = t.catalogEyebrow;
  document.querySelector("#catalog-title").innerHTML = `${t.catalogTitle} <span class="title-spark">✳</span>`;

  document.querySelector('[data-condition="all"]').textContent = t.all;
  document.querySelector('[data-condition="new"]').textContent = t.new;
  document.querySelector('[data-condition="used"]').textContent = t.used;
  document.querySelector('#sort-select option[value="popular"]').textContent = t.popular;
  document.querySelector('#sort-select option[value="cheap"]').textContent = t.cheap;
  document.querySelector('#sort-select option[value="expensive"]').textContent = t.expensive;
  document.querySelector("#reset-button").innerHTML = `${t.reset} <span>×</span>`;
  document.querySelector("#load-more-button").innerHTML = `${t.loadMore} <span>↓</span>`;

  document.querySelector(".banner-eyebrow").textContent = t.sellerEyebrow;
  document.querySelector("#sell-title").innerHTML = `${t.sellerTitle}<br>${t.sellerTitle2}`;
  document.querySelector(".banner-copy > p:not(.banner-eyebrow)").textContent = t.sellerText;
  document.querySelector(".banner-button").innerHTML = `${t.startSelling} <span>↗</span>`;
  document.querySelector(".site-footer p").textContent = t.footer;
  document.querySelector(".footer-love").innerHTML = `${t.footerLove} <span>♥</span> ${t.inKyrgyzstan}`;
  document.querySelector("#favorites-page-title").innerHTML =
    `${currentLanguage === "en" ? "Favorites" : currentLanguage === "ky" ? "Тандалгандар" : "Избранное"} <span class="title-spark">✳</span>`;
  document.querySelector("#favorites-back span").textContent =
    currentLanguage === "en" ? "Back" : currentLanguage === "ky" ? "Артка" : "Назад";
  document.querySelector("#favorites-page-caption").textContent =
    currentLanguage === "en" ? "0 items" : currentLanguage === "ky" ? "0 товар" : "0 товаров";

  localStorage.setItem("bazarGoLanguage", currentLanguage);
  renderCategories();
  renderProducts();
  if (!elements.favoritesPage.hidden) showFavorites();
}

function handleModalSubmit(event) {
  if (event.target.id === "sell-form") {
    event.preventDefault();

    const formData = new FormData(event.target);
    const category = String(formData.get("category"));
    const title = String(formData.get("title")).trim();
    const price = Number(formData.get("price"));
    const city = String(formData.get("city")).trim();

    if (!title || !category || !Number.isFinite(price) || price < 1 || !city) return;

    const categoryImages = {
      clothes: "photo-1542291026-7eec264c27ff",
      beauty: "photo-1608248543803-ba4f8c70ae0b",
      phones: "photo-1592750475338-74b7b21085ab",
      home: "photo-1507473885765-e6ed057f782c",
      kids: "photo-1587654780291-39c9404d746b",
      other: "photo-1546435770-a3e426bf472b"
    };

    const product = {
      id: Date.now(),
      title,
      price,
      category,
      condition: "new",
      city,
      image: categoryImages[category],
      badge: "НОВОЕ",
      rating: 5
    };

    productData.unshift(product);
    try {
      const stored = loadStoredArray("bazarGoListings");
      localStorage.setItem("bazarGoListings", JSON.stringify([product, ...stored]));
    } catch {}

    state.category = "all";
    state.condition = "all";
    state.query = "";
    state.visibleCount = 8;
    elements.searchInput.value = "";
    closeModal();
    refreshCatalog();
    showToast("Объявление опубликовано");
    document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
  }

  if (event.target.id === "sign-in-form") {
    event.preventDefault();

    const formData = new FormData(event.target);
    const account = {
      name: String(formData.get("name")).trim(),
      phone: String(formData.get("phone")).trim(),
      email: String(formData.get("email")).trim()
    };

    if (!account.name || !account.phone || !account.email) return;

    localStorage.setItem("bazarGoAccount", JSON.stringify(account));
    closeModal();
    document.querySelector("#sign-in-button").textContent =
      account.name.length > 12 ? `${account.name.slice(0, 12)}…` : account.name;
    showToast("Аккаунт успешно создан");
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
  elements.themeToggle.addEventListener("click", toggleTheme);
}

function init() {
  bindEvents();

  applyTheme(localStorage.getItem("bazarGoTheme") === "dark" ? "dark" : "light");
  applyLanguage(localStorage.getItem("bazarGoLanguage") || "ru");

  try {
    const account = JSON.parse(localStorage.getItem("bazarGoAccount"));
    if (account?.name) {
      document.querySelector("#sign-in-button").textContent =
        account.name.length > 12 ? `${account.name.slice(0, 12)}…` : account.name;
    }
  } catch {}

  try {
    const storedCity = localStorage.getItem("bazarGoCity");
    if (storedCity) elements.selectedCity.textContent = storedCity;

    const storedListings = JSON.parse(localStorage.getItem("bazarGoListings"));
    if (Array.isArray(storedListings)) {
      productData.unshift(...storedListings.reverse());
    }
  } catch {}

  renderCategories();
  renderProducts();
}

init();