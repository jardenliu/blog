<template>
  <div class="article-footer">
    <div class="more-mask"
         v-show="isLink"></div>
    <div class="article-footer-left">
      <div class="article-tags"> <i class="iconfont icon-tag"></i>
        <tag class="article-tag"
             router="tag"
             :label="tag"
             :color="colorSchemes[tag]"
             v-for="(tag,index) in tags"
             :key="index">{{tag}}</tag>
      </div>
      <div class="article-categories"><i class="iconfont icon-category"></i>
        <tag class="article-category"
             router="category"
             :label="category"
             :color="colorSchemes[category]"
             v-for="(category,index) in categories"
             :key="index">{{category}}</tag>
      </div>
    </div>
    <div class="article-footer-right">
      <button class="view-more"
              v-if="isLink"
              @click="goArticle(label)">展开全文<i class="iconfont icon-more"></i></button>
    </div>
  </div>
</template>

<script>
import color from 'nice-color-palettes'
import articleMixin from 'src/mixins/article'
import tag from 'components/packages/tag'

export default {
  components: { tag },
  mixins: [articleMixin],
  computed: {
    colorSchemes() {
      return this.$store.getters.colorSchemes;
    }
  },
  props: {
    label: String,
    isLink: Boolean,
    tags: Array,
    categories: Array,
  }
}
</script>

<style lang="scss">
@import "~src/styles/_var";

.article-footer {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 30px;
  margin: 0 60px;
  border-top: 1px solid $base-border-color;
  font-size: 16px;
  color: $secondary-text-color;
  line-height: 1.25;

  .article-footer-left {
    display: flex;
    align-items: center;
    max-width: calc(100% - 100px);
    i {
      margin: 0 5px;
    }
  }
  .article-footer-right {
  }
}

.more-mask {
  position: absolute;
  background: -webkit-linear-gradient(
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 1)
  );
  width: 100%;
  height: 100px;
  top: -102px;
}
.article-tags {
  display: flex;
  align-items: center;
  line-height: 24px;
}

.article-categories {
  display: flex;
  line-height: 24px;
  margin-left: 10px;
  align-items: center;
}

.view-more {
  background: #4d4d4d;
  color: #fff;
  font-size: 12px;
  padding: 5px 8px 5px;
  line-height: 16px;
  cursor: pointer;
  border-radius: 2px;
  border: none;
  transition: background 0.3s;
  i {
    font-size: 12px;
    margin-left: 3px;
  }
  &:focus {
    outline: none;
  }
}

@media screen and (max-width: 800px) {
  .article-footer {
    display: flex;
    padding: 10px 0 10px;
    border-left: none;
    border-top: 1px dotted $light-border-color;
    margin-bottom: 10px;
    margin: 0;
    margin-top: 10px;
    font-size: 14px;
    .article-footer-left {
      display: block;
      .article-categories {
        margin-left: 0;
      }
    }
    .article-footer-right {
    }
  }
}
</style>
