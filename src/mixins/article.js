export default {
  methods: {
    goArticle(label) {
      console.log('123', 123)
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
