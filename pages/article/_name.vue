<template>
  <div>
    <!-- <Article type="article"
             :config="article">
      <md-view :source="article.content"></md-view>
    </Article> -->
  </div>
</template>

<script>
// import Article from '~/components/packages/article'
// import MdView from '~/components/packages/mdView'

export default {
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  components: {
    // Article,
    // MdView
  },
  data() {
    return {
     // title: null
    }
  },
  created() {
    // console.log(this.$route)
    // this.title = this.$route.params.name
  },
  // mounted() {
  //   document.body.scrollTop = 0; // For Safari
  //   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  // },
  // computed: {
  //   allArticles() {
  //     return this.$store.state.blogData || [];
  //   },
  //   article() {
  //     return this.allArticles.find(art => art.name == this.title) || {}
  //   }
  // }

}
</script>
