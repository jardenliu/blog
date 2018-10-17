export default {
  methods: {
    goArticle() {
      if (this.isLink) {
        this.$router.push({
          name: 'article',
          params: {
            name: this.label
          }
        })
      }
    }
  }
}
