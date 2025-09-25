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
      .container {
        border: var(--border);
        box-shadow: var(--box-shadow)
      }
    `;
    this.shadowRoot.appendChild(css);

    const card = document.createElement("div");
    card.textContent = "Test"
    this.shadowRoot.appendChild(card);
  }
}

export default Card;