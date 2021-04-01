import { h } from "preact";
import htm from 'htm';
import { useState} from "preact/hooks";
const html = htm.bind(h);


function evalCode(code) {
  try {
    eval(code)
  } catch (e) {
    console.log(e)
  }
}

function copyText(text) {
  navigator.clipboard.writeText(text)
}

const hydraCode = ({code}) => {
  const initContent = code

  const [editorContent, setEditorContent] = useState(initContent)


  return html`
  <div class="h-code">
    <textarea  class="h-code__textarea" value=${editorContent} onchange=${(e) => setEditorContent(e.target.value)}></textarea>
    <div>
      <button class="h-code__button" onclick=${() => setEditorContent(initContent)}>reset</button>
      <button class="h-code__button" onclick=${() => evalCode(editorContent)}>evaluate</button>
      <button class="h-code__button" onclick=${() => copyText(editorContent)}>copy</button>
    </div>
  </div>
  `
}

export default hydraCode