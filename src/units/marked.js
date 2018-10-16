import marked from 'marked'
import highlight from 'highlight.js'
import 'highlight.js/styles/github.css'

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code) {
    let c = highlight.highlightAuto(code, ['javascript', 'bash']);
    return c.value
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

export default marked
