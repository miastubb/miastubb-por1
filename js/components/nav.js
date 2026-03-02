export function renderNav(container) {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#documents", label: "Documents" },
    { href: "#contact", label: "Contact" },
  ];

  const ul = document.createElement("ul");
  ul.className = "nav__list";

  links.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.className = "nav__link";
    a.href = link.href;
    a.textContent = link.label;
    a.setAttribute("data-link", "");

    li.appendChild(a);
    ul.appendChild(li);
  });

  container.innerHTML = "";
  container.appendChild(ul);
}