<template>
  <div class="markdown-view"
       :style="styles">
    <div class="markdown-body"
         v-html="content">
    </div>
  </div>
</template>

<script>
import { marked } from 'src/units'
const SHRINK_HEIGHT = 400

export default {
  computed: {
    content() {
      return marked(this.source)
    },
    styles() {
      return {
        height: this.shrink ? `${SHRINK_HEIGHT}px` : 'auto'
      }
    }
  },
  props: {
    shrink: Boolean,
    source: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.markdown-view {
  overflow: hidden;
  h1 {
    display: none;
  }
  a {
    color: #0366d6;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #0366d6;
      text-decoration: underline;
    }
  }
}
</style>
