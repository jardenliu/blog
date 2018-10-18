<template>
  <a class="tag-link"
     @click="go">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    router: String,
    label: String
  },
  methods: {
    go() {
      this.$router && this.label && this.$router.push({
        name: this.router,
        params: {
          name: this.label
        }
      })
    }
  }
}
</script>

<style>
</style>
