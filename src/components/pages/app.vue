<template>
  <div class="app">
    <navbar :config="headerConfig"></navbar>
    <div style="width:calc(100vw - 300px)">正文</div>
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
</style>
