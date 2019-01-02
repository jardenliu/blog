<template>
  <div class="app">
    <navbar :config="headerConfig"></navbar>
    <div class="content">
      <nuxt />
      <copyright></copyright>
    </div>
  </div>
</template>


<script>
import Logo from '~/components/Logo.vue'
import Navbar from '~/components/packages/navbar'
import copyright from '~/components/packages/copyright'
import config from '~/config/config.yml'

import 'reset-css/reset.css'
import '~/assets/styles/app.scss'

export default {
  components: {
    Logo,
    Navbar,
    copyright
  },
  data() {
    return {
      headerConfig: config.header || {}
    }
  },
  created() {
    this.$store.dispatch('getBlogData')
  }
}
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
