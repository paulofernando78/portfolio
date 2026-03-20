import styleImports from "@css/styles.css?inline";

const styles = /* css */`
.card__container {
  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;

  border: 1px solid var(--gray-6);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden
}

.card__img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.card__img-wrapper img {
  aspect-ratio: 16 / 9;
}

.card__inner {
  border-top: 1px solid;
  padding: 5px 8px;
}

.card__label {
  font-weight: bold;
  margin-bottom: 16px;
}
`

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
    <style>${styles}</style>  
    <div class="card__img-wrapper">
        <img src="${imgAttr}"/>
      </div>
      <div class="card__inner">
        <a href="${linkAttr}" class="card__label" target="_blank">${labelAttr}</a>
        <p>${descAttr}</p>
    </div>
    `;
  }
}

export default Card;
