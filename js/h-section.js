import { h } from "preact";
import htm from 'htm';
import { useState } from "preact/hooks";

const html = htm.bind(h);

function toggleVisibility(currentState) {
  return currentState === "visible" ? "hidden" : "visible"
}

const hydraSection = ({children, title}) => {
  const [visibility, setVisibility] = useState("visible")
  return html`
  <div>
    <hr />
    <div>
      <h2 class="h-section__title">${title}</h2>
      <button
        class="h-section__button"
        onclick=${() => setVisibility(toggleVisibility(visibility))}>
          ${visibility === "visible" ? "collapse" : "expand"}
      </button>
    </div>
  ${visibility === "visible" ?
    html`
     <div dangerouslySetInnerHTML=${{__html: children}}></div>
    `
    : null
    }
  <hr />
  </div>
  `
}


export default hydraSection