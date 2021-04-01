const content = `
# Literate Hydra Programming

An experiment to build a literate programming environment for the hydra video synthesizer

<h-section title="testing title">
  <h-code>
  This is testing
      some hydra
            code
  </h-code>

  - You can make notes in markdown
  - This is great for annotating sketches

</h-section>

<h-section title="Another Section">
  <h-code>
  osc(1000).out()
  </h-code>

  - This time im testing with some actual code.
  - Probably a bit more useful

  <h-code>
    osc(5).out()
  </h-code>

  - Two code snippets in one section


</h-section>

`
export default content