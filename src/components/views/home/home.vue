<template>
  <div>
    <Article :title="art.name"
             :view-more="true"
             type="article"
             :updated-date="art.updatedDate"
             v-for="art in articles"
             :key="art.name">
      <md-view :shrink="true"
               :source="art.content"></md-view>
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
  computed: {
    articles() {
      return this.$store.state.blogData;
    }
  }

}
</script>

<style>
</style>
