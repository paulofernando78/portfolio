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
      .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, 250px);
        gap: 15px;
      }
    
      .card {
        width: 250px;
        height: 195px;
        border: 1px solid white;
        border-radius: 5px;
        margin-bottom: 1.125rem;
        display: flex;
        flex-direction: column;
      }

      img {
        width: 100%;
        height: auto;
      }

      .content {
        padding: 10px
      }

      .title {
        margin-bottom: 1.125rem
      }

      .description {
        font-size: 1rem;
      }

    `;
    shadow.appendChild(style);

    const cards = [
      {
        link: "https://www.dbec.com.br",
        img: "/assets/img/dbec-thumbnail.svg",
        alt: "Thumbnail",
        // title: "Daily Basis English Course",
        description: "Lessons of English for my private Students.",
      },
      {
        link: "https://cyberwheel-js.vercel.app/",
        img: "/assets/img/cyberwheel-thumbnail.webp",
        alt: "Thumbnail",
        // title: "Cyber Wheel",
        description: "A fake futuristc bike shop.",
      },
    ];

    // Container
    const container = document.createElement("div");
    container.classList.add("container")
    shadow.appendChild(container);
    
    cards.forEach((item) => {
      // Link
      const link = document.createElement("a");
      link.href = item.link;
      container.appendChild(link)

      // Card
      const card = document.createElement("div");
      card.classList.add("card");
      link.appendChild(card);

      // Image
      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.alt;
      card.appendChild(img);

      // Content
      const content = document.createElement("div");
      content.classList.add("content");
      card.appendChild(content);

      // title
      // const title = document.createElement("h1");
      // title.classList.add("title");
      // title.textContent = item.title;
      // content.appendChild(title);

      // description
      const description = document.createElement("h3");
      description.classList.add("description");
      description.textContent = item.description;
      content.appendChild(description);
    });
  }
}

export default Card;
