# Literate Hydra

[Try the project on glitch.com]()

Literate Hydra is an environment for writing and annotating [Hydra](https://github.com/ojack/hydra) code. 

The string inside content.js will be rendered as markdown on the page. You can wrap executable code in `<h-code></h-code>` tags which will be rendered inside an editable text box with button to reset, execute or copy the code to your clip board. 

You can organize your document into sections using `<h-section title="title></h-section>` tags. Sections can have a title and can be collapsed to save space.

This works really well when edited with [glitch.com]() as you can edit / view the document at the same time all in one browser window.

To get started you either clone the git repository and run `npm install` then `npm start` or clone the demo I have linked to above on glitch.com and click view project.