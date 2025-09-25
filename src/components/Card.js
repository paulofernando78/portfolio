import cssImportsPath from "/src/css/imports.css?inline";

class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const cssImports = document.createElement("style");
    cssImports.textContent = cssImportsPath;
    this.shadowRoot.appendChild(cssImports);

    const css = document.createElement("style");
    /*css*/
    css.textContent = `
      .card {
        width: 300px;
        border: var(--border);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        padding: var(--padding);
        display: flex;
        flex-direction: column;
        gap: 5px
      }

      .label {
        display: block;
        text-align: center;
        font-weight: bold
      }
    `;
    this.shadowRoot.appendChild(css);

      // getAttribute
    const cardLabel = this.getAttribute("label")
    const imgSrc = this.getAttribute("img")
    const imgAlt = this.getAttribute("alt")
    const linkHref = this.getAttribute("link")
    const desc = this.getAttribute("description")

    // Card
    const card = document.createElement("a");
    card.classList.add("card")
    card.href = linkHref
    this.shadowRoot.appendChild(card);

    const label = document.createElement("span");
    label.classList.add("label")
    label.textContent = cardLabel
    card.appendChild(label);

    const image = document.createElement("img");
    image.src = imgSrc
    image.alt = imgAlt
    card.appendChild(image);

    const description = document.createElement("p");
    description.textContent = desc
    card.appendChild(description);
  }
}

export default Card;