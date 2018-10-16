<template>
  <div class="article-header">
    <div class="article-header-label">{{label}}</div>
    <div class="article-header-right">{{displayDate | dateDiff }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    date: [Date, String, Number]
  },
  computed: {
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
