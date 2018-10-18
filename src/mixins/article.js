export default {
  methods: {
    goArticle(label) {
      if (this.isLink) {
        this.$router.push({
          name: 'article',
          params: {
            name: label
          }
        })
      }
    }
  }
}
