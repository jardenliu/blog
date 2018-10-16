<template>
  <div class="app">
    <navbar :config="headerConfig"></navbar>
    <!-- <div  >
      <div class="article" style=" height:1000px">
        <div v-html="frist"></div>
      </div>

      <div class="article" style=" height:1000px">
        正文2
      </div>
    </div> -->
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import navbar from 'components/packages/navbar'
import config from '../../../config.yml'
import { marked } from 'src/units'

export default {
  components: { navbar },
  data() {
    return {
      headerConfig: config.header || {}
    }
  },
  created() {
    this.$store.dispatch('getBlogData')

  },
  computed: {
    blogData() {
      return this.$store.state.blogData || []
    },
    frist() {
      let f = this.blogData[0] || {}
      return f.content ? marked(f.content) : ''
    }
  },
  mounted() {
  },

  methods: {
  },
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
}

.content {
  width: calc(100vw - 300px);
  margin-left: 300px;
}

@media screen and (max-width: 800px) {
  .app {
    display: flex;
    flex-direction: column;
  }

  .article {
    background: white;
    margin: 10px 0;
    padding: 20px;
  }

  .content {
    width: calc(100vw);
    margin: 0;
  }
}
</style>
