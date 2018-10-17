<template>
  <div>
    <Article :title="article.name"
             type="article"
             :updated-date="article.updatedDate"
             :key="article.name">
      <md-view :source="article.content"></md-view>
    </Article>
  </div>
</template>

<script>
import Article from 'components/packages/article'
import MdView from 'components/packages/mdView'

export default {
  components: {
    Article,
    MdView
  },
  data() {
    return {
      title: null
    }
  },
  created() {
    this.title = this.$route.params.name
  },
  mounted() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  },
  computed: {
    allArticles() {
      return this.$store.state.blogData || [];
    },
    article() {
      return this.allArticles.find(art => art.name == this.title) || {}
    }
  }

}
</script>

<style>
</style>
