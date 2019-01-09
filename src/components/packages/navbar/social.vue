<template>
  <ul class="social">
    <li class="github"><a :href="config.social.github"
        target="__blank"><i class="iconfont icon-github"></i></a></li>
    <li class="qq"><a :href="config.social.qq"
        target="__blank"><i class="iconfont icon-qq"></i></a></li>
    <li class="wechat"><a :href="config.social.wechat"
        target="__blank"><i class="iconfont icon-wechat"></i></a></li>
    <li class="mail"><a :href="config.social.mail"
        target="__blank"><i class="iconfont icon-mail"></i></a></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/_var';

$github-bg: #24292e;
$qq-bg: #ce2e27;
$wechat-bg: #67c23a;
$mail-bg: #ffd95c;

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

@media screen and (max-width: 800px) {
  .social {
    width: 200px;
    margin: 0 auto;
  }
}
</style>

