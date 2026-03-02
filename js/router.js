function getRouteFromHash() {
  const hash = window.location.hash || "#home";
  return hash.replace("#", "");
}

function setActiveLink(route) {
  document.querySelectorAll(".nav__link").forEach((a) => {
    const target = a.getAttribute("href")?.replace("#", "");
    if (target === route) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
}

export function initRouter() {
  const route = getRouteFromHash();
  const section = document.getElementById(route);

  // If hash is invalid, fall back to home
  if (!section) {
    window.location.hash = "#home";
    setActiveLink("home");
    return;
  }

  // Scroll to section
  section.scrollIntoView({ behavior: "smooth", block: "start" });
  setActiveLink(route);

  // Update active state on scroll too
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((e) => e.isIntersecting);
      if (!visible) return;
      const id = visible.target.id;
      window.history.replaceState(null, "", `#${id}`);
      setActiveLink(id);
    },
    { root: null, threshold: 0.4 }
  );

  document.querySelectorAll("section[data-route]").forEach((sec) => observer.observe(sec));

  window.addEventListener("hashchange", () => {
    const nextRoute = getRouteFromHash();
    setActiveLink(nextRoute);
  });
}