<template>
  <div>
    <div class="article tag-page">
      <paragraph label="全部标签">
        <div class="tag-row">
          <tag class="article-tag"
               router="tag"
               :label="tag"
               :color="colorSchemes[tag]"
               v-for="(tag,index) in tags"
               :key="index">{{tag}}</tag>
        </div>
      </paragraph>
      <Classes :artcles="artcles"
               :name="tag"
               v-for="(artcles,tag) in tagArtcles"
               :key="tag">
      </Classes>
    </div>

  </div>
</template>

<script>
import paragraph from 'components/packages/paragraph'
import tag from 'components/packages/tag'
import Classes from 'components/packages/classes'


export default {
  computed: {
    tags() {
      return this.$store.getters.tags;
    },
    colorSchemes() {
      return this.$store.getters.colorSchemes;
    },
    tagArtcles() {
      return this.$store.getters.tagArtcles;
    }
  },
  components: {
    paragraph,
    Classes,
    tag
  }

}
</script>

<style>
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
}
</style>
