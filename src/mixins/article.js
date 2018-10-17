export default {
  methods: {
    goArticle() {
      if (this.isLink) {
        this.$router.push({
          name: 'article',
          query: {
            name: this.label
          }
        })
      }
    }
  }
}
