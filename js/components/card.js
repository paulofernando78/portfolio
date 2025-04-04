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
        padding: 8px;
        border: 1px solid white;
        border-radius: 5px;
        margin-bottom: 1.125rem;
        display: grid;
        grid-template-columns: 150px 1fr
      }

      img {
        width: 100%;
        height: auto;
        border-radius: 5px
      }

      .title, .description {
        padding-left: 10px
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
        link: "www.dbec.com.br",
        img: "/assets/img/dbec-thumbnail.svg",
        alt: "Thumbnail",
        title: "Daily Basis English Course",
        description: "Lessons of English for my private Students.",
      },
      {
        link: "https://cyberwheel-js.vercel.app/",
        img: "/assets/img/cyberwheel-thumbnail.webp",
        alt: "Thumbnail",
        title: "Cyber Wheel",
        description: "A fake futuristc bike shop.",
      },
    ];

    cards.forEach((item) => {
      // Link
      const link = document.createElement("a")
      link.href = item.link
      shadow.appendChild(link);
      
      // Card
      const card = document.createElement("div");
      card.classList.add("card");
      link.appendChild(card)

      // Image
      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.alt;
      card.appendChild(img);

      // Content
      const content = document.createElement("div");
      card.appendChild(content)
      
      // title
      const title = document.createElement("h1");
      title.classList.add("title");
      title.textContent = item.title;
      content.appendChild(title)
      
      // description
      const description = document.createElement("h3");
      description.classList.add("description");
      description.textContent = item.description;
      content.appendChild(description)
      
    });
  }
}

export default Card;
