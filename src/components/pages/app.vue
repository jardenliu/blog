<template>
  <div class="app">
    <navbar :config="headerConfig"></navbar>
    <div class="content">
      <router-view class="page"></router-view>
      <copyright></copyright>
    </div>
  </div>
</template>

<script>
import navbar from "components/packages/navbar";
import copyright from "components/packages/copyright";
import config from "../../../config.yml";
import { marked } from "src/units";

export default {
  components: { navbar, copyright },
  data() {
    return {
      $scroll: null,
      headerConfig: config.header || {}
    };
  },
  created() {
    this.$store.dispatch("getBlogData");
  },
  computed: {
    blogData() {
      return this.$store.state.blogData || [];
    },
    frist() {
      let f = this.blogData[0] || {};
      return f.content ? marked(f.content) : "";
    }
  },
  mounted() {
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  overflow: hidden;
}

.content {
  width: calc(100vw - 300px);
  margin-left: 300px;
}

.page {
  min-height: calc(100vh - 89px);
}

@media screen and (max-width: 800px) {
  .app {
    display: flex;
    flex-direction: column;
  }

  .page {
    min-height: calc(100vh - 390px);
  }

  .article {
    background: white;
    margin: 10px 0;
    padding: 20px;
  }

  .content {
    width: calc(100vw);
    margin: 0;
  }
}
</style>
