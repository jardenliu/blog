<template>
  <div class="article-header">
    <div class="article-header-label"
         :class="{'islink':isLink}"
         @click="goArticle">{{label}}</div>
    <div class="article-header-right">{{displayDate | dateDiff }}</div>
  </div>
</template>

<script>
import article from 'src/mixins/article'
export default {
  mixins: [article],
  props: {
    label: String,
    type: String,
    viewMore: Boolean,
    date: [Date, String, Number]
  },
  methods: {

  },
  computed: {
    isLink() {
      return this.type == "article" && this.viewMore
    },
    displayDate() {
      return this.date
    }
  }
}
</script>

<style lang="scss">
@import "~src/styles/_var";

.article-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 30px 60px 15px 55px;
  border-left: 5px solid #4d4d4d;
  .article-header-label {
    font-size: 32px;
    line-height: 1.25;
    color: $primary-text-color;
    &.islink {
      cursor: pointer;
    }
  }
  .article-header-right {
    color: $placeholder-text-color;
    font-size: 14px;
  }
}

@media screen and (max-width: 800px) {
  .article-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 0 5px;
    border-left: none;
    border-bottom: 1px dotted $light-border-color;
    margin-bottom: 10px;
    .article-header-label {
      font-size: 18px;
      line-height: 40px;
      color: $primary-text-color;
    }
    .article-header-right {
      color: $placeholder-text-color;
      font-size: 13px;
      line-height: 24px;
    }
  }
}
</style>
