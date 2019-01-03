<template>
  <div>
    <Article type="article"
      :config="article">
      <md-view :source="article.content"></md-view>
    </Article>
  </div>
</template>

<script>
import Article from '~/components/packages/article'
import MdView from '~/components/packages/mdView'

export default {
  components: {
    Article,
    MdView
  },
  asyncData({ params }) {
    return {
      title: params.name
    }
  },
  data() {
    return {
      title: null
    }
  },
  created() {
    if (this.$isServer) return
    this.title = this.$route.params.name
  },
  mounted() {
    if (this.$isServer) return
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  },
  computed: {
    allArticles() {
      return this.$store.state.blogData || []
    },
    article() {
      return this.allArticles.find(art => art.name == this.title) || {}
    }
  }
}
</script>

<style>
</style>
