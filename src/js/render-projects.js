import { projects } from "./projects";

const wrapper = document.querySelector(".card__wrapper");

projects.forEach((project) => {
  const card = document.createElement("wc-card");

  card.setAttribute("img", project.img);
  card.setAttribute("label", project.label);
  card.setAttribute("link", project.link);
  card.setAttribute("description", project.description);
  card.setAttribute("techStackItems", JSON.stringify(project.techStackItems));

  wrapper.append(card);
});
