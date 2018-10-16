<template>
  <div class="article-footer">
    <div class="article-footer-left">标签1、标签2</div>
    <div class="article-footer-right">
      <button class="view-more">展开全文</button>
    </div>
  </div>
</template>

<script>
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
  }
  .article-footer-right {
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
