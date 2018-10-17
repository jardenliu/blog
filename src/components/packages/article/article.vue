<template>
  <div class="article">
    <HeaderBar :label="title"
               :type="type"
               :view-more="viewMore"
               :date="updatedDate"></HeaderBar>
    <div class="article-content">
      <slot></slot>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import HeaderBar from './header.vue'
import FooterBar from './footer.vue'
export default {
  components: { HeaderBar, FooterBar },
  props: {
    title: String,
    type: String,
    viewMore: Boolean,
    updatedDate: [Date, String, Number]
  }

}
</script>

<style lang="scss">
.article {
  background: white;
  margin: 30px;
}

.article-content {
  padding: 20px 60px;
}

@media screen and (max-width: 800px) {
  .article {
    background: white;
    margin: 10px 0;
    padding: 10px;
  }
  .article-content {
    padding: 10px 0;
  }
}
</style>
