<template>
  <div class="article-class">
    <div class="article-class-label">
      {{name}}
    </div>
    <div class="article-class-list">
      <div class="article-class-item"
           v-for="art in artcles"
           :key="art.name">
        <div class="article-class-art-title">
          <div class="left"> {{art.name}}</div>
          <div class="right"> 2018-10-31</div>
        </div>
        <div class="article-class-art-tags">
          <div class="article-tags"> <i class="iconfont icon-tag"></i>
            <tag class="article-tag"
                 router="tag"
                 :label="tag"
                 :color="colorSchemes[tag]"
                 v-for="(tag,index) in art.tags"
                 :key="index">{{tag}}</tag>
          </div>
          <div class="article-categories"><i class="iconfont icon-category"></i>
            <tag class="article-category"
                 router="category"
                 :label="category"
                 :color="colorSchemes[category]"
                 v-for="(category,index) in art.categories"
                 :key="index">{{category}}</tag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tag from 'components/packages/tag'

export default {
  components: {
    tag
  },
  props: {
    artcles: Array,
    name: String,
  },
  computed: {
    colorSchemes() {
      return this.$store.getters.colorSchemes;
    },
  }
}
</script>

<style lang="scss">
@import "~src/styles/_var";

.article-class {
  padding: 0 60px;
  display: flex;
  & + .article-class {
    border-top: 1px $base-border-color solid;
  }

  .article-class-list {
    flex: 1;
  }

  .article-class-label {
    font-size: 28px;
    padding-top: 20px;
    color: #666;
    min-width: 180px;
    font-weight: bold;
  }

  .article-class-item {
    padding: 20px 0;
    & + .article-class-item {
      border-top: 1px $base-border-color solid;
    }
  }
  .article-class-art-title {
    display: flex;
    align-items: center;
    height: 36px;
    justify-content: space-between;
    .left {
      font-size: 18px;
    }
  }
  .article-class-art-tags {
    color: #909399;
    display: flex;
    line-height: 28px;
    min-height: 28px;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
