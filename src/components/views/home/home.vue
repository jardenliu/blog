<template>
  <div>
    <Article :title="art.name" :updated-date="art.updatedDate" v-for="art in articles" :key="art.name">
      {{art.name}}
    </Article>
  </div>
</template>

<script>
import Article from 'components/packages/article'

export default {
  components: {
    Article
  },
  computed: {
    articles() {
      return this.$store.state.blogData;
    }
  }

}
</script>

<style>
</style>
