import styleImports from "@css/styles.css?inline";

class Link extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  get hrefAttr() {
    return this.getAttribute("href")
  }

  get labelAttr() {
    return this.getAttribute("label");
  }
  
  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
      </style>
      <a href="${this.hrefAttr}" target="_blank">
      <b>${this.labelAttr}</b>
      </a>
    `;
  }
}

customElements.define("wc-link", Link);
export default Link;
