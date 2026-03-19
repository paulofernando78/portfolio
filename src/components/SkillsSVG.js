import styleImports from "/src/css/styles.css?inline";

const styles = /* css */ `
   #html {

   }

   #css3 {

   }

   #js {
    animation: js 1s infinite alternate;
   }

    @keyframes js {
      0% {
        transform: translateX(0px)
      }
      100%{
        transform: translateX(100px)
      }
    }
`;

class SkillSVG extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    // cleanup (events, intervals, observers)
  }

  render() {
    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${styles}
      </style>
      <div class="icon__wrapper">
        <img src="/images/icons/html5.svg" alt="HTML5 icon" id="html5"/>
        <img src="/images/icons/css3.svg" alt="CSS3 icon" id="css3"/>
        <img src="/images/icons/javascript.svg" alt="Javascript icon" id="js"/>
        <!-- <img src="/images/icons/react.svg" alt="React JS icon" /> -->
        <!-- <div class="icon__wrapper">
          <img src="/images/icons/nodejs.svg" alt="Node JS icon" />
          <img src="/images/icons/sqlite.svg" alt="SQLite" />
        </div>
        <div class="icon__wrapper">
          <img src="/images/icons/figma.svg" alt="Figma icon" />
          <img src="/images/icons/blender.svg" alt="Blender icon" />
          <img src="/images/icons/threejs.svg" alt="Three JS icon" />
        </div> -->
      </div>
    `;
  }
}

export default SkillSVG;
