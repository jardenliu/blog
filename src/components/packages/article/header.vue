<template>
  <div>
    <div class="article-header">
      <div class="article-header-label "
           :class="{'islink':isLink,'small-title':isLongTitle}"
           @click="goArticle(label)">{{label}}</div>
      <div class="article-header-right"><i class="iconfont icon-time"
           style="margin-right:5px"></i>{{date | dateDiff }}</div>
    </div>
    <div class="article-header-mark">
      <div v-if="isReprint">
        本文转载自 <a :href="rootUrl">{{author}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import articleMixin from 'src/mixins/article'

export default {
  mixins: [articleMixin],
  props: {
    label: String,
    type: String,
    isReprint: Boolean,
    author: String,
    rootUrl: String,
    isLink: Boolean,
    date: [Date, String, Number]
  },
  methods: {

  },
  computed: {
    isLongTitle() {
      return this.label.length > 30
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
    font-size: 30px;
    max-width: calc(100% - 96px);
    line-height: 1.25;
    color: $primary-text-color;
    &.small-title {
      font-size: 22px;
    }
    &.islink {
      cursor: pointer;
    }
  }
  .article-header-right {
    color: $placeholder-text-color;
    font-size: 14px;
  }
}

.article-header-mark {
  margin: 5px 60px;
  a {
    color: #0366d6;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #0366d6;
      text-decoration: underline;
    }
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
    font-weight: 400;
    .article-header-label {
      font-size: 28px;
      max-width: calc(100%);
      line-height: 40px;
      color: $primary-text-color;
    }
    .article-header-right {
      color: $placeholder-text-color;
      font-size: 13px;
      line-height: 24px;
    }
  }

  .article-header-mark {
    margin: 0;
    padding: 5px 0;
    border-bottom: 1px dotted $light-border-color;
    margin-bottom: 10px;
  }
}
</style>
