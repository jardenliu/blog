<template>
  <div class="app">
    <navbar :config="headerConfig"></navbar>
    <div class="content">
      <div style="background:white;margin-top:10px;padding:20px;">
        正文
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import navbar from 'components/packages/navbar'
import config from '../../../config.yml'
import { throttle, debounce } from 'throttle-debounce';

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
    this.bindWindowScrollEvent()
  },
  methods: {
    bindWindowScrollEvent() {
      window.addEventListener('scroll', throttle(50, this.handleScroll))
    },
    handleScroll(e) {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 110) {
        document.body.classList.add('scrolled-to-body')
      } else {
        document.body.classList.remove('scrolled-to-body')
      }
    }
  },

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
