export function renderNav(container) {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#documents", label: "Documents" },
    { href: "#contact", label: "Contact" },
  ];

  container.innerHTML = "";

  const button = document.createElement("button");
  button.className = "nav__toggle";
  button.type = "button";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", "nav-panel");
  button.setAttribute("aria-label", "Open menu");
  button.innerHTML = `
    <span class="nav__toggle-line" aria-hidden="true"></span>
    <span class="nav__toggle-line" aria-hidden="true"></span>
    <span class="nav__toggle-line" aria-hidden="true"></span>
  `;

  const panel = document.createElement("div");
  panel.className = "nav__panel";
  panel.id = "nav-panel";

  const ul = document.createElement("ul");
  ul.className = "nav__list";

  links.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.className = "nav__link";
    a.href = link.href;
    a.textContent = link.label;
    a.setAttribute("data-link", "");

    // Close menu when a link is clicked (mobile)
    a.addEventListener("click", () => closeMenu());

    li.appendChild(a);
    ul.appendChild(li);
  });

  panel.appendChild(ul);
  container.append(button, panel);

  function isOpen() {
    return container.classList.contains("is-open");
  }

  function openMenu() {
    container.classList.add("is-open");
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-label", "Close menu");
  }

  function closeMenu() {
    container.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open menu");
  }

  button.addEventListener("click", () => {
    if (isOpen()) closeMenu();
    else openMenu();
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Close if clicking outside
  document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) closeMenu();
  });
}