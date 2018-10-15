<template>
  <div class="app">
    <navbar :config="headerConfig"></navbar>
    <div class="content">
      <div style="background:white;margin:30px;padding:20px;">正文</div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import navbar from 'components/packages/navbar'
import config from '../../../config.yml'

console.log('config', config)

export default {
  components: { navbar },
  data() {
    return {
      headerConfig: config.header || {}
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
}

.content {
  width: calc(100vw - 300px);
}

@media screen and (max-width: 800px) {
  .app {
    display: flex;
    flex-direction: column;
  }

  .content {
    width: calc(100vw);
  }
}
</style>
