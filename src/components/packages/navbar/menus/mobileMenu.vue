<template>
  <ul class="mobile-menus">
    <!-- class="actived" -->
    <li v-for="(menu,name) in menus"
        :key="name"><a :class="{'actived':currentRoute ==name}"
         :href="menu.href">{{menu.name}}</a></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      currentRoute: 'home'
    }
  },
  props: {
    menus: Object
  },
  mounted() {
    this.setActived()
  },
  watch: {
    $route() {
      this.setActived()
    }
  },
  methods: {
    setActived() {
      this.currentRoute = this.$route.fullPath.replace('/', '')
      console.log('this.currentRoute', this.currentRoute)
    }
  }

}
</script>


<style lang="scss" scoped>
@import "~src/styles/_var";

.mobile-menus {
  display: none;
  width: 80%;
  margin: 20px auto;
  border: 1px solid #a0a0a0;
  border-radius: 3px;
  li {
    flex: 1;
    text-align: center;
    display: flex;
    a {
      color: #a0a0a0;
      display: inline-block;
      font-size: 14px;
      width: 100%;
      padding: 5px;
    }
    a.actived {
      background-color: #a0a0a0;
      color: #fff;
    }
  }
  li + li {
    border-left: 1px solid #a0a0a0;
  }
}

@media screen and (max-width: 800px) {
  .mobile-menus {
    display: flex;
  }
}
</style>
