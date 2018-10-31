<template>
  <div class="paragraph">
    <div class="paragrph-label">
      <span>{{label}}</span>
    </div>
    <div class="paragrph-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String
  }

}
</script>

<style lang="scss">
@import "~src/styles/_var";

.paragraph {
  padding: 0px 60px 10px;
  border-bottom: 1px $base-border-color solid;
  .paragrph-label {
    height: 40px;
    font-size: 35px;
    padding-top: 20px;
    color: #666;
    font-weight: bold;
  }
  .paragrph-content {
    min-height: 40px;
  }
}

@media screen and (max-width: 800px) {
  .paragraph {
    padding: 0;
    .paragrph-label {
      height: 28px;
      font-size: 24px;
      padding: 0;
      color: #666;
      font-weight: bold;
    }
  }
}
</style>
