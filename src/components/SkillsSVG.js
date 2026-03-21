import styleImports from "/src/css/styles.css?inline";

const styles = /* css */ `
  :host {
    --step-x: clamp(5px, 1.2vw, 12px);
    --step-x-reverse: calc(var(--step-x) * -1);
  }
  
  .icon__wrapper {
    display: grid;
    grid-template-columns: repeat(3, clamp(70px, 22vw, 130px));
    justify-content: center;
    place-items: center
  }

  .balloons::after {
    background-color: var(--slate-8);
    color: var(--slate-2);
    border: 2px solid var(--slate-6);
    border-radius: 5px;
    padding: 1px 5px;
    font-size: 0.9rem;
    width: max-content;
    max-width: 145px; 
    
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);

    margin-bottom: 12px;
    
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  #html5-phrases[data-active="true"]::after,
  #css3-phrases[data-active="true"]::after,
  #js-phrases[data-active="true"]::after {
    opacity: 1;
  }
  
  .icon {
    position: relative;
  }

  //! HTML5   
  #html5-phrases {}

  #html5-phrases::after {
    content: var(--html5-text);
  }
  
  #html5 {
    filter: drop-shadow(0 0 3px red);
  }

  #html5-phrases[data-active="true"] + #html5 {
    animation-name: html5-shake;
    animation-duration: 0.5s;
  }

  @keyframes html5-shake {
    0%   {
      transform: rotate(0deg);
    }
    20%   {
      transform: rotate(5deg);
    }
    40%   {
      transform: rotate(0deg);
    }
    60%   {
      transform: rotate(6deg);
    }
    80%   {
      transform: rotate(0deg);
    }
    100%   {
      transform: rotate(7deg);
    }
  }

  .icon:first-child {
    animation-name: html5-walk;
    animation-duration: 2s;
    animation-delay: 4s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
  }

  @keyframes html5-walk {
    0%   {
      transform: translate(0, 0);
    }
    15%  {
      transform: translate(calc(var(--step-x) * 2), -12px) rotate(-3deg);
    }
    30%  {
      transform: translate(calc(var(--step-x) * 3), 0);
    }
    45%  {
      transform: translate(calc(var(--step-x) * 4), -12px) rotate(-3deg);
    }
    60%  {
      transform: translate(calc(var(--step-x) * 5), 0); 
    }
    75%  {
      transform: translate(calc(var(--step-x) * 7), -12px) rotate(-3deg);
    }
    100%  {
      transform: translate(calc(var(--step-x) * 8.5), 0); 
    }
  }

  //! CCS3
  
  #css3 {}
  
  #css3-phrases::after {
    content: var(--css3-text);
  }

  #css3-phrases[data-active="true"] + #css3 {
    animation-name: css3-shake;
    animation-duration: 0.5s;
  }

  #css3 {
    filter: drop-shadow(0 0 5px var(--blue-7));
  }

  @keyframes css3-shake {
    0%   {
      transform: rotate(0deg);
    }
    20%   {
      transform: rotate(7deg);
    }
    40%   {
      transform: rotate(0deg);
    }
    60%   {
      transform: rotate(5deg);
    }
    80%   {
      transform: rotate(0deg);
    }
    100%   {
      transform: rotate(7deg);
    }
  }

  @keyframes css3-rotate {
    0%   {
      transform: rotate(0deg);
    }
    100%   {
      transform: rotate(7deg);
    }
  }

  //! JS
  #js {}
  
  #js-phrases::after {
    content: var(--js-text);
  }

  #js-phrases[data-active="true"] + #js {
    animation-name: js-shake;
    animation-duration: 0.5s;
  }
  
  #js {
    width: 38px;
    transform: translateY(-1px);
    filter: drop-shadow(0 0 3px yellow);
  }

  @keyframes js-shake {
    0%   {
      transform: rotate(0deg);
    }
    20%   {
      transform: rotate(5deg);
    }
    40%   {
      transform: rotate(0deg);
    }
    60%   {
      transform: rotate(6deg);
    }
    80%   {
      transform: rotate(0deg);
    }
    100%   {
      transform: rotate(7deg);
    }
  }

  .icon:last-child {
     animation-name: js-walk;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    animation-delay: 30s;
  }

  @keyframes js-walk {
    0%   {
      transform: translate(0, 0);
    }
    15%  {
      transform: translate(calc(var(--step-x-reverse) * 2), -12px) rotate(-3deg);
    }
    30%  {
      transform: translate(calc(var(--step-x-reverse) * 3), 0);
    }
    45%  {
      transform: translate(calc(var(--step-x-reverse) * 4), -12px) rotate(-3deg);
    }
    60%  {
      transform: translate(calc(var(--step-x-reverse) * 5), 0); 
    }
    75%  {
      transform: translate(calc(var(--step-x-reverse) * 7), -12px) rotate(-3deg);
    }
    100%  {
      transform: translate(calc(var(--step-x-reverse) * 8), 0); 
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
      [htmlEl, "Hey, CSS!", 3000],
      [cssEl, "Yo, what's up?", 3000],
      [htmlEl, "Are ya busy?", 4000],
      [cssEl, "Not really. What do ya need?", 3000],
      [htmlEl, "I've made a button. Can ya add padding to it, please?", 3000],
      [cssEl, "Sure thing.", 3000],
      [htmlEl, "Where's JS?", 3000],
      [cssEl, "He's over there.", 3000],
      [htmlEl, "JS, WAKE UP!", 3000],
      [jsEl, "What?", 3000],
      [htmlEl, "Do me a favor.", 3000],
      [jsEl, "Yeah?", 3000],
      [htmlEl, "Make the button interactive, would you?", 3000],
      [jsEl, "No problem.", 3000],
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
    jsEl.dataset.active = "true";

    //! runDialogue
    function runDialogue(dialogue) {
      let i = 0;

      function next() {
        // ...
        if (i >= dialogue.length) {
          // ...
          i = 0;
        }

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
