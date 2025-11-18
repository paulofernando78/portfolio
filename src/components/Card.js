import styleImports from "/src/css/style.css?inline";

class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = styleImports;
    this.shadowRoot.appendChild(style);
  }

  connectedCallback() {
    // getAttribute
    const imgAttr = this.getAttribute("img");
    const linkAttr = this.getAttribute("link");
    const labelAttr = this.getAttribute("label");
    const descAttr = this.getAttribute("description");

    const cardContainer = document.createElement("div");
    cardContainer.className = "card__container";
    this.shadowRoot.appendChild(cardContainer);

    cardContainer.innerHTML = /* html*/ `
      <div class="card__img-wrapper">
        <img src="${imgAttr}"/>
      </div>
      <div class="card__inner">
        <a href="${linkAttr}" class="card__label" >${labelAttr}</a>
        <p>${descAttr}</p>
    </div>
    `;
  }
}

export default Card;
