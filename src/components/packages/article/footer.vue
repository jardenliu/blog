<template>
  <div class="article-footer">
    <div class="article-footer-left">
      <div class="article-tags"> <i class="iconfont icon-tag"></i><a>标签1</a></div>
      <div class="article-categories"><i class="iconfont icon-category"></i><a>分类1</a></div>
    </div>
    <div class="article-footer-right">
      <button class="view-more">展开全文<i class="iconfont icon-more"></i></button>
    </div>
  </div>
</template>

<script>
import color from 'nice-color-palettes'
export default {

}
</script>

<style lang="scss">
@import "~src/styles/_var";

.article-footer {
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
    i {
      margin: 0 5px;
    }
  }
  .article-footer-right {
  }
}

.article-categories {
  margin-left: 10px;
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
    }
    .article-footer-right {
    }
  }
}
</style>
