import styleImports from "/src/css/styles.css?inline";

const styles = /* css */ `
  .icon__wrapper {
    width: 50%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center
  }

  .balloons {
    position: relative;
  }
  
  .balloons::after {
    background-color: var(--slate-8);
    color: var(--slate-2);
    border: 2px solid var(--slate-6);
    border-radius: 5px;
    padding: 1px 5px;
    font-size: 0.9rem;
    width: max-content;
    min-height: 20px;

    display: inline-block;
    position: absolute;
    top: -50px;

    opacity: 0;
    transition: opacity 0.3s ease;
  }

  #html5-phrases[data-active="true"]::after,
  #css3-phrases[data-active="true"]::after,
  #js-phrases[data-active="true"]::after {
    opacity: 1;
  }
  
  //! HTML5   
  #html5-phrases {}

  #html5-phrases::after {
    left: 0px;
    content: var(--html5-text);
  }
  
  #html5 {
    filter: drop-shadow(0 0 3px red);

    animation-name: html5-walk;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    animation-delay: 4s;
  }

  @keyframes html5-walk {
    0%   {
      transform: translate(0, 0);
    }
    10%  {
      transform: translate(10px, -12px) rotate(-3deg);
    }
    20%  {
      transform: translate(20px, 0);
    }
    30%  {
      transform: translate(30px, -12px) rotate(-3deg);
    }
    40%  {
      transform: translate(40px, 0);
    }
    50%  {
      transform: translate(50px, -12px) rotate(-3deg);
    }
    60%  {
      transform: translate(60px, 0);
    }
    70%  {
      transform: translate(70px, -12px) rotate(-3deg);
    }
    80% {
      transform: translate(80px, 0);
    }
    90%  {
      transform: translate(90px, -12px) rotate(-3deg);
    }
    100% {
      transform: translate(100px, 0);
    }
  }

  //! CCS3
  
  #css3 {}
  
  #css3-phrases::after {
    
    left: 0px;
    content: var(--css3-text);
  }

  #css3 {
    filter: drop-shadow(0 0 5px var(--blue-7));
    
    animation-name: css3-walk;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    animation-delay: 20s;
  }

  @keyframes css3-walk {
    0%   {
      transform: translate(0, 0);
    }
    10%  {
      transform: translate(10px, -12px) rotate(-3deg);
    }
    20%  {
      transform: translate(20px, 0);
    }
    30%  {
      transform: translate(30px, -12px) rotate(-3deg);
    }
    40%  {
      transform: translate(40px, 0);
    }
    50%  {
      transform: translate(50px, -12px) rotate(-3deg);
    }
    60%  {
      transform: translate(60px, 0);
    }
    70%  {
      transform: translate(70px, -12px) rotate(-3deg);
    }
    80% {
      transform: translate(80px, 0);
    }
    90%  {
      transform: translate(90px, -12px) rotate(-3deg);
    }
    100% {
      transform: translate(100px, 0);
    }
  }

  //! JS
  #js {
  }
  
  #js-phrases::after {
    content: var(--js-text);
  }
  
  #js {
    width: 38px;
    transform: translateY(-1px);
    filter: drop-shadow(0 0 3px yellow);

    animation-name: js-walk;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    animation-delay: 20s;
  }

  @keyframes js-walk {
    0%   {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-5deg);
    }
    20%   {
      transform: rotate(0deg);
    }
  }

  @media (max-width: 700px) {
    .icon__wrapper {
      width: 70%;
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

    const root = this.shadowRoot;

    const htmlEl = root.querySelector("#html5-phrases");
    const cssEl = root.querySelector("#css3-phrases");
    const jsEl = root.querySelector("#js-phrases");

    //! Phrases
    const dialogue = [
      [htmlEl, "Hey, CSS!", 2000],
      [cssEl, "Yo, what's up?", 2000],
      [htmlEl, "Are ya busy?", 4000],
      [cssEl, "What do ya need?", 2000],
      [htmlEl, "Can ya add a padding to my button, please?", 2000],
      [cssEl, "Sure thing.", 2000],
      [htmlEl, "Where's JS?", 2000],
      [cssEl, "He's over there.", 2000],
      [htmlEl, "JS, WAKE UP!", 2000],
      [jsEl, "What?", 2000],
      [htmlEl, "Show time. Make the button interactive, would you?", 2000],
      [jsEl, "No problem.", 2000],
    ];

    const map = {
      "html5-phrases": "--html5-text",
      "css3-phrases": "--css3-text",
      "js-phrases": "--js-text",
    };

    //! setText
    function setText(el, text) {
      el.style.setProperty(map[el.id], `"${text}"`);
    }

    //! clearDialogue
    function clearText(el) {
      el.style.setProperty(map[el.id], `""`);
    }

    setText(jsEl, "ZZzz...");
    jsEl.dataset.active = "true"

    //! runDialogue
    function runDialogue(dialogue) {
      let i = 0;

      function next() {
        // ...
        if (i >= dialogue.length) return;

        // ...
        const [el, text, duration] = dialogue[i];

        // Show phrases
        setText(el, text);
        el.dataset.active = "true";

        const clearDelay = duration - 300;

        setTimeout(() => {
          el.dataset.active = "false";
          clearText(el);
        }, clearDelay);

        // ...
        i++;
        setTimeout(next, duration);
      }

      next();
    }

    runDialogue(dialogue);
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
        <div class="icon">
          <div id="html5-phrases" class="balloons"></div>
          <img src="/images/icons/html5.svg" alt="HTML5 icon" id="html5" />
        </div>
        <div class="icon">
          <div id="css3-phrases" class="balloons"></div>
          <img src="/images/icons/css3.svg" alt="CSS3 icon" id="css3" />
        </div>
        <div class="icon">
          <div id="js-phrases" class="balloons"></div>
          <img
            src="/images/icons/javascript.svg"
            alt="Javascript icon"
            id="js"
          />
        </div>
      </div>
    `;
  }
}

export default SkillSVG;
