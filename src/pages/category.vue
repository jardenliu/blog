<template>
  <div>
    <div class="article tag-page">
      <paragraph label="全部分类">
        <div class="tag-row">
          <tag class="article-tag"
            router="category"
            :label="category"
            :color="colorSchemes[category]"
            v-for="(category,index) in categories"
            :key="index">{{category}}</tag>
        </div>
      </paragraph>
      <Classes :artcles="artcles"
        :name="tag"
        v-for="(artcles,tag) in categoryArtcles"
        :key="tag">
      </Classes>
    </div>

  </div>
</template>

<script>
import paragraph from '~/components/packages/paragraph'
import tag from '~/components/packages/tag'
import Classes from '~/components/packages/classes'

export default {
  computed: {
    categories() {
      return this.$store.getters.categories
    },
    colorSchemes() {
      return this.$store.getters.colorSchemes
    },
    categoryArtcles() {
      return this.$store.getters.categoryArtcles
    }
  },
  components: {
    paragraph,
    Classes,
    tag
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

.tag-row {
  line-height: 25px;
  display: flex;
  height: 40px;
  align-items: center;
}
@media screen and (max-width: 800px) {
  .tag-page {
    padding: 10px 0;
  }
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
