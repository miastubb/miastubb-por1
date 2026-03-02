export function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "card";

  const img = document.createElement("img");
  img.className = "card__thumb";
  img.src = project.thumbnail;
  img.alt = `${project.title} thumbnail`;

  const body = document.createElement("div");
  body.className = "card__body";

  const h3 = document.createElement("h3");
  h3.className = "card__title";
  h3.textContent = project.title;

  const p = document.createElement("p");
  p.className = "card__text";
  p.textContent = project.teaser;

  const links = document.createElement("div");
  links.className = "card__links";

  const repo = document.createElement("a");
  repo.className = "card__link";
  repo.href = project.repo;
  repo.target = "_blank";
  repo.rel = "noopener";
  repo.textContent = "GitHub →";

  const live = document.createElement("a");
  live.className = "card__link";
  live.href = project.live;
  live.target = "_blank";
  live.rel = "noopener";
  live.textContent = "Live demo →";

  links.append(repo, live);
  body.append(h3, p, links);
  article.append(img, body);

  return article;
}