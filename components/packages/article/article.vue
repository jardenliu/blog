<template>
  <div class="article">
    <HeaderBar :label="config.name"
               :type="type"
               :view-more="viewMore"
               :is-link="isLink"
               :set-top="config.setTop"
               :is-reprint="config.reprint"
               :author="config.author"
               :root-url="config.root"
               :date="config.updatedDate"></HeaderBar>
    <div class="article-content">
      <slot></slot>
    </div>
    <FooterBar :label="config.name"
               :is-link="isLink"
               :categories="config.categories"
               :tags="config.tags"></FooterBar>
  </div>
</template>

<script>
import HeaderBar from './header.vue'
import FooterBar from './footer.vue'
export default {
  components: { HeaderBar, FooterBar },
  props: {
    config: Object,
    type: String,
    viewMore: Boolean
  },
  computed: {
    isLink() {
      return this.type == "article" && this.viewMore
    }
  }

}
</script>

<style lang="scss">
.article {
  background: white;
  margin: 30px;
  ul {
    list-style-type: disc;
  }
  ol {
    list-style-type: decimal;
  }
}

.article-content {
  padding: 20px 60px;
}

.mix-article {
  margin-top: -30px;
}

@media screen and (max-width: 800px) {
  .article {
    background: white;
    margin: 10px 0;
    padding: 10px;
  }
  .mix-article {
    margin-top: 10px;
  }
  .article-content {
    padding: 10px;
  }
}
</style>
