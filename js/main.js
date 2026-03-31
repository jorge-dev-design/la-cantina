const MAPS_URL =
  "https://www.google.com.br/maps/place/Restaurante+La+Cantina/@-23.6536247,-46.5399554,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce42ecd2a07e8b:0x69dd986731d73099!8m2!3d-23.6536492!4d-46.5355073";
const WHATSAPP_URL = "https://wa.me/+5511983974279";
const INSTAGRAM_URL = "https://www.instagram.com/lacantina_cucinaitaliana/";
const FACEBOOK_URL =
  "https://www.facebook.com/La-Cantina-Cuccina-Italiana-107710615327045";
const MENU_PAGES = [
  "menu",
  "tradicional",
  "executivotradicional",
  "vegetariano",
  "kids"
];

function siteLink(root, path) {
  return path ? `${root}${path}` : root || "./";
}

function isActive(page, slug) {
  return slug === "menu" ? MENU_PAGES.includes(page) : page === slug;
}

function iconButton(label, iconClass, className = "") {
  return `<i class="${iconClass}" aria-hidden="true"></i><span${className ? ` class="${className}"` : ""}>${label}</span>`;
}

function headerTemplate(root, page) {
  const logo = siteLink(root, "icons/apple-touch-icon.png");
  const primary = [
    ["À CASA", "", "home"],
    ["QUEM SOMOS", "quemsomos/", "quemsomos"],
    ["GALERIA", "galeria/", "galeria"],
    ["DEPOIMENTOS", "depoimentos/", "depoimentos"],
    ["CONTATO", "contato/", "contato"]
  ];
  const menu = [
    ["Tradicional", "tradicional/", "tradicional"],
    ["Exec. Tradicional", "executivotradicional/", "executivotradicional"],
    ["Exec. Vegetariano", "vegetariano/", "vegetariano"],
    ["Kids", "kids/", "kids"]
  ];

  const primaryMarkup = primary
    .map(
      ([label, path, slug]) =>
        `<div class="nav-item">
          <a class="nav-link${isActive(page, slug) ? " is-active" : ""}" href="${siteLink(root, path)}"${
            isActive(page, slug) ? ' aria-current="page"' : ""
          }>${label}</a>
        </div>`
    )
    .join("");

  const menuMarkup = menu
    .map(
      ([label, path, slug]) =>
        `<a href="${siteLink(root, path)}"${isActive(page, slug) ? ' class="is-active"' : ""}>${label}</a>`
    )
    .join("");

  const mobilePrimary = [
    ["À CASA", "", "home"],
    ["QUEM SOMOS", "quemsomos/", "quemsomos"],
    ["MENU", "menu/", "menu"],
    ["GALERIA", "galeria/", "galeria"],
    ["DEPOIMENTOS", "depoimentos/", "depoimentos"],
    ["CONTATO", "contato/", "contato"]
  ]
    .map(
      ([label, path, slug]) =>
        `<a href="${siteLink(root, path)}"${isActive(page, slug) ? ' class="is-active"' : ""}>${label}</a>`
    )
    .join("");

  return `
    <div class="container">
      <div class="site-header__bar">
        <a class="brand" href="${siteLink(root, "")}" aria-label="La Cantina">
          <span class="brand__mark-wrap">
            <img class="brand__mark" src="${logo}" alt="">
          </span>
          <span class="brand__lockup">
            <span class="brand__name">La Cantina</span>
            <span class="brand__subtitle">Cucina Italiana</span>
          </span>
        </a>
        <nav class="site-nav" aria-label="Principal">
          ${primaryMarkup}
          <div class="nav-dropdown-group${MENU_PAGES.includes(page) ? " is-active" : ""}">
            <a class="nav-link${MENU_PAGES.includes(page) ? " is-active" : ""}" href="${siteLink(root, "menu/")}"${
              MENU_PAGES.includes(page) ? ' aria-current="page"' : ""
            }>MENU</a>
            <div class="nav-dropdown">
              ${menuMarkup}
            </div>
          </div>
        </nav>
        <a class="button button--ghost button--small header-cta" href="${WHATSAPP_URL}" target="_blank" rel="noreferrer noopener">
          ${iconButton("WhatsApp", "fa-brands fa-whatsapp")}
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" data-nav-toggle>
          <span class="nav-toggle__bar"></span>
        </button>
      </div>
      <div class="mobile-nav" id="mobile-nav" data-mobile-nav>
        <div class="mobile-nav__group">
          <p class="mobile-nav__title">Navegação</p>
          ${mobilePrimary}
        </div>
        <div class="mobile-nav__group">
          <p class="mobile-nav__title">Categorias do cardápio</p>
          ${menuMarkup}
        </div>
        <div class="mobile-nav__group">
          <p class="mobile-nav__title">Contato rápido</p>
          <a href="${WHATSAPP_URL}" target="_blank" rel="noreferrer noopener">WhatsApp</a>
          <a href="${MAPS_URL}" target="_blank" rel="noreferrer noopener">Como chegar</a>
        </div>
      </div>
    </div>
  `;
}

function footerTemplate(root) {
  const logo = siteLink(root, "icons/apple-touch-icon.png");

  return `
    <div class="container footer__panel panel panel--dark">
      <div class="footer__grid">
        <div class="footer__block">
          <div class="footer__brand">
            <img src="${logo}" alt="">
            <div>
              <span class="eyebrow">La Cantina</span>
              <h2 class="footer__title">Cucina Italiana</h2>
            </div>
          </div>
          <p class="footer__copy">
            A verdadeira culinária italiana. O nosso segredo está nas massas caseiras feitas com o toque e o segredo da Nonna.
          </p>
          <div class="social-list" aria-label="Redes sociais">
            <a class="social-link" href="${WHATSAPP_URL}" target="_blank" rel="noreferrer noopener" aria-label="WhatsApp">
              <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
            </a>
            <a class="social-link" href="${INSTAGRAM_URL}" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
              <i class="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
            <a class="social-link" href="${FACEBOOK_URL}" target="_blank" rel="noreferrer noopener" aria-label="Facebook">
              <i class="fa-brands fa-facebook-f" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="footer__block">
          <span class="footer__label">Endereço</span>
          <div class="footer__value">Rua Padre Manoel de Paiva, 66 - Santo André</div>
          <div class="footer__value">(11) 4436-0343</div>
          <div class="footer__value">(11) 98397-4279</div>
          <a class="button button--secondary button--small" href="${MAPS_URL}" target="_blank" rel="noreferrer noopener">
            ${iconButton("Como chegar", "fa-solid fa-location-dot")}
          </a>
        </div>
        <div class="footer__block">
          <span class="footer__label">Páginas</span>
          <nav class="footer__nav" aria-label="Rodapé">
            <a href="${siteLink(root, "")}">À CASA</a>
            <a href="${siteLink(root, "quemsomos/")}">QUEM SOMOS</a>
            <a href="${siteLink(root, "menu/")}">MENU</a>
            <a href="${siteLink(root, "galeria/")}">GALERIA</a>
            <a href="${siteLink(root, "depoimentos/")}">DEPOIMENTOS</a>
            <a href="${siteLink(root, "contato/")}">CONTATO</a>
          </nav>
        </div>
      </div>
      <div class="footer__bar">
        <span>35 anos servindo à sua mesa</span>
        <span>Rua Padre Manoel de Paiva, 66 - Santo André</span>
      </div>
    </div>
  `;
}

function mountShell() {
  const root = document.body.dataset.root || "";
  const page = document.body.dataset.page || "home";
  const header = document.querySelector("[data-site-header]");
  const footer = document.querySelector("[data-site-footer]");

  if (header) {
    header.classList.add("site-header");
    header.innerHTML = headerTemplate(root, page);
  }

  if (footer) {
    footer.classList.add("footer");
    footer.innerHTML = footerTemplate(root);
  }
}

function setupHeader() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector("[data-nav-toggle]");
  const mobile = document.querySelector("[data-mobile-nav]");

  if (!header) {
    return;
  }

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (!toggle || !mobile) {
    return;
  }

  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  mobile.querySelectorAll("a").forEach((anchor) => {
    anchor.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupReveal() {
  const nodes = [...document.querySelectorAll("[data-reveal]")];

  if (!nodes.length) {
    return;
  }

  nodes.forEach((node, index) => {
    node.style.setProperty("--reveal-delay", `${Math.min(index % 8, 6) * 70}ms`);
  });

  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.14
    }
  );

  nodes.forEach((node) => observer.observe(node));
}

function setupParallax() {
  const nodes = [...document.querySelectorAll("[data-parallax]")];

  if (!nodes.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let ticking = false;

  const update = () => {
    const center = window.innerHeight / 2;

    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      const speed = Number(node.dataset.speed || 0.03);
      node.style.transform = `translate3d(0, ${(rect.top - center) * speed}px, 0)`;
    });

    ticking = false;
  };

  const requestUpdate = () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  };

  requestUpdate();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}

function setupTabs() {
  document.querySelectorAll("[data-tablist]").forEach((list) => {
    const group = list.dataset.tabGroup;
    const buttons = [...list.querySelectorAll("[data-tab-target]")];
    const panels = [...document.querySelectorAll(`[data-tab-panel="${group}"]`)];

    const activate = (target) => {
      buttons.forEach((button) => {
        button.setAttribute(
          "aria-selected",
          String(button.dataset.tabTarget === target)
        );
      });

      panels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.tabName === target);
      });
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => activate(button.dataset.tabTarget));
    });
  });
}

function setupLightbox() {
  const triggers = [...document.querySelectorAll("[data-lightbox]")];

  if (!triggers.length) {
    return;
  }

  const shell = document.createElement("div");
  shell.className = "lightbox";
  shell.innerHTML = `
    <div class="lightbox__dialog" role="dialog" aria-modal="true">
      <button class="lightbox__close" type="button" aria-label="Fechar">
        <i class="fa-solid fa-xmark" aria-hidden="true"></i>
      </button>
      <img class="lightbox__image" alt="">
    </div>
  `;

  document.body.append(shell);

  const image = shell.querySelector(".lightbox__image");
  const close = () => shell.classList.remove("is-open");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      image.src = trigger.dataset.lightbox;
      image.alt = trigger.dataset.lightboxAlt || "";
      shell.classList.add("is-open");
    });
  });

  shell.querySelector(".lightbox__close").addEventListener("click", close);
  shell.addEventListener("click", (event) => {
    if (event.target === shell) {
      close();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && shell.classList.contains("is-open")) {
      close();
    }
  });
}

function setupCommentForm() {
  document.querySelectorAll("[data-comment-form]").forEach((form) => {
    const note = form.querySelector("[data-form-note]");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (note) {
        note.hidden = false;
      }

      form.reset();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mountShell();
  setupHeader();
  setupReveal();
  setupParallax();
  setupTabs();
  setupLightbox();
  setupCommentForm();
});
