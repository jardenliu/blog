import marked from 'marked'
import highlight from 'highlight.js'
import 'highlight.js/styles/github.css'

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    let c = highlight.highlightAuto(code, ['javascript', 'bash', 'xml'])
    return c.value
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  xhtml: false
})

export default marked
