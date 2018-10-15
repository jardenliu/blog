<template>
  <div class="navbar" :style="navbarSty">
    <div class="overlay" :style="overlaySty"></div>
    <div class="user-avatar">
      <img :src="avatarSrc">
    </div>
    <div class="content">
      <div class="author">
        <div class="title">流君酱</div>
        <div class="subtitle">jardenliu</div>
      </div>
      <ul class="menus">
        <li><a href="#">主页</a></li>
        <li><a href="#">标签</a></li>
        <li><a href="#">分类</a></li>
        <li><a href="#">关于</a></li>
      </ul>
      <ul class="smart-menu">
        <li><a href="#">所有文章</a></li>
        <!-- <li><a href="#">标签</a></li> -->
        <!-- <li><a href="#">分类</a></li> -->
        <!-- <li><a href="#">关于</a></li> -->
      </ul>

      <ul class="social">
        <li class="github"><a :href="config.social.github" target="__blank"><i class="iconfont icon-githublogo"></i></a></li>
        <li class="qq"><a :href="config.social.qq" target="__blank"><i class="iconfont icon-qq"></i></a></li>
        <li class="wechat"><a :href="config.social.wechat" target="__blank"><i class="iconfont icon-wechat"></i></a></li>
        <li class="mail"><a :href="config.social.mail" target="__blank"><i class="iconfont icon-mail"></i></a></li>
      </ul>

      <ul class="mobile-menus">
        <li><a class="actived" href="#">主页</a></li>
        <li><a href="#">标签</a></li>
        <li><a href="#">分类</a></li>
        <li><a href="#">关于</a></li>
      </ul>
    </div>
    <div class="desc">
      @流君酱的部落阁
    </div>
  </div>
</template>

<script>
import logoUrl from 'assets/logo.jpg'

export default {
  props: {
    config: {
      type: Object,
      default: () => { }
    }
  },
  computed: {
    navbarSty() {
      return {
        'background': this.config.bg
      }
    },
    overlaySty() {
      return {
        'background-color': this.config.overlay,
        'background-image': this.config.img ? `url(${this.config.img})` : ''
      }
    },
    avatarSrc() {
      return this.config.avatar ? this.config.avatar : logoUrl
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~src/styles/_var";

$github-bg: #24292e;
$qq-bg: #ce2e27;
$wechat-bg: #67c23a;
$mail-bg: #ffd95c;

.navbar {
  width: 300px;
  height: 100vh;
  background: #fff;
  position: relative;
}
.overlay {
  width: 100%;
  height: 180px;
  background-size: 100% 100%;
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

.smart-menu {
  display: flex;
  margin: 30px 30px;
  justify-content: space-around;
  li {
    font-size: 14px;
    line-height: 20px;
  }
}

.social {
  display: flex;
  margin: 30px 30px;
  justify-content: space-around;
  li {
    line-height: 1;
    display: inline-flex;
    padding: 6px;
    border-radius: 50%;
    &.github {
      background: $github-bg;
      &:hover {
        background: tint($github-bg, 70%);
      }
    }

    &.qq {
      background: $qq-bg;
      &:hover {
        background: tint($qq-bg, 70%);
      }
    }

    &.wechat {
      background: $wechat-bg;
      &:hover {
        background: tint($wechat-bg, 70%);
      }
    }

    &.mail {
      background: $mail-bg;
      &:hover {
        background: tint($mail-bg, 70%);
      }
    }

    i {
      font-size: 18px;
      color: white;
    }
  }
}

.user-avatar {
  width: 108px;
  height: 108px;
  border-radius: 50%;
  position: absolute;
  top: 115px;
  left: 50%;
  margin-left: -65px;
  img {
    width: 120px;
    border: 5px solid #fff;
    background-size: 100% 100%;
    height: 120px;
    border-radius: 50%;
  }
}

.content {
  margin-top: 75px;
}

.desc {
  position: absolute;
  width: 300px;
  font-size: 12px;
  text-align: center;
  bottom: 20px;
  color: #d9d9da;
}

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
  .navbar {
    width: 100%;
    height: 340px;
  }
  .overlay {
    height: 110px;
  }

  .content {
    margin-top: 35px;
  }

  .user-avatar {
    top: 10px;
  }
  .social {
    width: 200px;
    margin: 0 auto;
  }
  .smart-menu {
    display: none;
  }
  .desc {
    display: none;
  }
  .menus {
    display: none;
  }
  .mobile-menus {
    display: flex;
  }
}
</style>
