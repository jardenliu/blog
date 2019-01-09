<template>
  <ul class="menus">
    <nuxt-link tag="li" v-for="(menu,name) in menus" :key="name" :to="menu.href">
      <a >{{menu.name}}</a>
    </nuxt-link>
  </ul>
</template>

<script>
export default {
  props: {
    menus: Object
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/_var';

.menus {
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    margin: 5px 0;
    font-size: 14px;
    line-height: 20px;
  }
}

@media screen and (max-width: 800px) {
  .menus {
    display: none;
  }
}
</style>
