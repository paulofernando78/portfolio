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
        border: var(--border);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        padding: var(--padding)
      }

      .label {
        display: block
      }
    `;
    this.shadowRoot.appendChild(css);

      // getAttribute
    const cardLabel = this.getAttribute("label")
    const imgSrc = this.getAttribute("img")
    const linkHref = this.getAttribute("link")

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
    card.appendChild(image);
  }
}

export default Card;