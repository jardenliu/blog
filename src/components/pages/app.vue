<template>
  <div class="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from 'components/packages/navbar'

export default {
  components: { navbar },
  created() {
  },
  mounted() {
  }
}
</script>

<style>
</style>
