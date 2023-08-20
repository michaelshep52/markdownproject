# Markdown Previewer React App
HTML, JAVASCRIPT, Bootstrap, and React

## Features
* The app contains a editor and a previewer. Type in Markdown syntax into the editor and sees formatted output next to it in the previewer.
* The Editor props called markdown and onChange.
* OnChange props call the updateMarkdown method that ensures the responsivity of the changeable editor’s input text area.
* The updateMarkdown method updates the actual state of the text editor.
* The Previewer uses the dangerouslySetInnerHTML property to set the markup contained within the element and uses the Markdown parser library marked to take markdown text and translate it to HTML.


