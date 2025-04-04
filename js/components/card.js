class Card extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const importStyles = document.createElement("link");
    importStyles.rel = "stylesheet";
    importStyles.href = "/css/imports.css";
    shadow.appendChild(importStyles);

    const style = document.createElement("style"); /*css*/
    style.textContent = `
      .card {
        width: 100%;
        padding: 10px;
        border: 1px solid white;
        border-radius: 5px;
        margin-bottom: 1.125rem
      }

      .title {
        margin-bottom: 1.125rem
      }

      .description {
        font-size: 1rem
      }
    `;
    shadow.appendChild(style);

    const cards = [
      {
        title: "Daily Basis English Course",
        description: "Lessons of English for my private Students.",
      },
      {
        title: "Cyber Wheel",
        description: "A fake futuristc bike shop.",
      },
    ];

    cards.forEach((item) => {
      // Card
      const card = document.createElement("div");
      card.classList.add("card");
      shadow.appendChild(card);

      // title
      const title = document.createElement("h1");
      title.classList.add("title");
      title.textContent = item.title;
      card.appendChild(title);

      // description
      const description = document.createElement("h3");
      description.classList.add("description")
      description.textContent = item.description;
      card.appendChild(description);
    });
  }
}

export default Card;
