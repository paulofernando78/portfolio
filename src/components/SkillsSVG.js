import styleImports from "/src/css/styles.css?inline";

const styles = /* css */ `
   #html {

   }

   #css3 {

   }

   #js {
    transform: translateY(-2px);
    animation: js 1.8s infinite ease-in-out;
   }

    @keyframes js {
      0%   {
        transform: translate(0, 0);
      }
      20%  {
        transform: translate(5px, -12px) rotate(3deg);
      }
      40%  {
        transform: translate(10px, 0);
      }
      50%  {
        transform: translate(10px, 0);
      }
      60%  {
        transform: translate(15px, -12px) rotate(3deg);
      }
      80%  {
        transform: translate(20px, 0);
      }
      100% {
        transform: translate(0, 0);
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
        <img src="/images/icons/html5.svg" alt="HTML5 icon" id="html5" />
        <img src="/images/icons/css3.svg" alt="CSS3 icon" id="css3" />
        <img src="/images/icons/javascript.svg" alt="Javascript icon" id="js" />
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
