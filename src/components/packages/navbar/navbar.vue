<template>
  <div class="navbar" :style="navbarSty">
    <overlay :config="config"></overlay>
    <div class="content">
      <div class="author">
        <div class="title">流君酱</div>
        <div class="subtitle">jardenliu</div>
      </div>
      <pc-menu :menus="menuCfg"></pc-menu>
      <ul class="smart-menu">
        <li><a href="#">所有文章</a></li>
      </ul>
      <social :config="config"></social>
      <mobile-menu :menus="menuCfg"></mobile-menu>
    </div>
    <div class="desc">
      @流君酱的部落阁
    </div>
  </div>
</template>

<script>
import overlay from './overlay'
import social from './social'
import pcMenu from './menus/pcMenu'
import mobileMenu from './menus/mobileMenu'

const MENUS = {
  home: {
    name: '主页',
    href: '#/home'
  },
  tag: {
    name: '标签',
    href: '#/tags'
  },
  category: {
    name: '分类',
    href: '#/categories'
  },
  about: {
    name: '关于',
    href: '#/about'
  }
}

export default {
  components: { overlay, social, mobileMenu, pcMenu },
  data() {
    return {
      menuCfg: MENUS
    }
  },
  props: {
    config: {
      type: Object,
      default: () => { }
    }
  },
  methods: {
  },
  computed: {
    navbarSty() {
      return {
        'background': this.config.bg
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import "~src/styles/_var";

.navbar {
  width: 300px;
  height: 100vh;
  background: #fff;
  position: fixed;
}

.content {
  margin-top: 75px;
}

.author {
  text-align: center;
  margin: 20px 0;
  .title {
    font-family: Roboto, "Roboto", serif;
    font-size: 30px;
    line-height: 60px;
    color: $primary-text-color;
  }
  .subtitle {
    font-size: 14px;
    color: $secondary-text-color;
  }
}

.smart-menu {
  display: flex;
  margin: 30px 30px;
  justify-content: space-around;
  li {
    font-size: 14px;
    line-height: 20px;
  }
}

.desc {
  position: absolute;
  width: 300px;
  font-size: 12px;
  text-align: center;
  bottom: 20px;
  color: #d9d9da;
  user-select: none;
}

@media screen and (max-width: 800px) {
  .navbar {
    width: 100%;
    height: 340px;
    position: relative;
  }
  .content {
    margin-top: 145px;
  }

  .smart-menu {
    display: none;
  }
  .desc {
    display: none;
  }
}
</style>
