<template>
  <ul class="menus">
    <li v-for="(menu,name) in menus"
      :key="name"><a :href="menu.href">{{menu.name}}</a></li>
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
