import { renderNav } from "./components/nav.js";
import { initRouter } from "./router.js";
import { projects } from "./data/projects.js";
import { createProjectCard } from "./components/projectCard.js";

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = "";
  projects.forEach((p) => grid.appendChild(createProjectCard(p)));
}

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

function init() {
  const nav = document.getElementById("site-nav");
  if (nav) renderNav(nav);

  renderProjects();
  initRouter();
  setYear();
}

init();