import styleImports from "/src/css/imports.css?inline";

const css = /*css*/ `
  .card {
    width: 100%;
    height: 100%;
    border: var(--border);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    display: flex;
    flex-direction: column;
    gap: 5px;
    overflow: hidden
  }

  .inner-card {
    padding: var(--padding);
  }

  .label {
    font-weight: bold;
    margin-bottom: 16px
  }

  iframe {
    width: 100%;
    height: 200px;
    border: none;
    aspect-ratio: 16 / 9
  }
`;

class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // getAttribute
    const iframeAttr = this.getAttribute("iframe");
    const linkAttr = this.getAttribute("link");
    const labelAttr = this.getAttribute("label");
    const descAttr = this.getAttribute("description");

    this.shadowRoot.innerHTML = /* html*/ `
    <style>${styleImports} ${css}</style>
    <div class="card">
      <iframe src="${iframeAttr}"></iframe>
      <div class="inner-card">
        <a href="${linkAttr}" class="label" >${labelAttr}</a>
        <p>${descAttr}</p>     
      </div>
    </div>
    `;
  }
}

export default Card;
