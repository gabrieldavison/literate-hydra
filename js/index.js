import marked from 'marked';
import { h, render } from 'preact'
import htm from 'htm'
import content from '../content.js'
import register from 'preact-custom-element';
import hydraCode from './h-code.js'
import hydraSection from './h-section.js'

const html = htm.bind(h);

// Sets up hydra
window.onload = function () {
  const hydra = new Hydra({canvas: document.getElementById('hydra-canvas')})
  hydra.setResolution(1920, 1080)
  osc().out()
}

//Registers web components

class hSection extends HTMLElement {
  connectedCallback() {
    const children = this.innerHTML
    this.innerHTML = ""
    const mountPoint = document.createElement('span');
    this.appendChild(mountPoint)
    console.log(this)
    render(html`<${hydraSection} children=${children} title=${this.title} />`, mountPoint)
  }
}
customElements.define('h-section', hSection);

class hCode extends HTMLElement {
  connectedCallback() {
    const code = this.innerHTML
    this.innerHTML = ""
    const mountPoint = document.createElement('span');
    this.appendChild(mountPoint)
    render(html`<${hydraCode} code=${code}/>`, mountPoint)
  }
}
customElements.define('h-code', hCode);

// register(hydraCode, 'h-code', [])
// register(hydraSection, 'h-section', [])

//renders MD
document.getElementById('content').innerHTML = marked(content)

//Sets up visibility toggling
const contentContainer = document.getElementById('content')
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    contentContainer.classList.toggle('hidden')
  }
})