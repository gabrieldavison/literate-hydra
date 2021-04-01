const content = `
# Literate Hydra 

- This document will be rendered as [markdown](https://daringfireball.net/projects/markdown/syntax).
- You can divide the document up into collapsible sections by wrapping your content in \`<h-section title="title"></h-section>\` tags.
- You can press the esc button on your keyboard to show / hide the document.

<h-section title="A Section">

- This is a collapsible section containing a code block.
- You can create a new code block by wrapping you code in \`<hcode></hcode>\` tags.

<h-code>
// This is a code block
// You can evaluate it with the buttons below
osc(100).out()
</h-code>

</h-section>

<h-section title="Another Section">

  <h-code>
  osc(1000).out()
  </h-code>

  Try evaluating the different code blocks to see how they change the hydra sketch.

  <h-code>
    osc(5).out()
  </h-code>

</h-section>

`
export default content