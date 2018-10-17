<template>
  <div>
    <div class="overlay"
         :style="overlaySty"></div>
    <div class="user-avatar">
      <img :src="avatarSrc"
           :style="avatarSty">
    </div>
  </div>
</template>

<script>
import { throttle, debounce } from 'throttle-debounce';

export default {
  data() {
    return {
      overlayHeight: 110,
      avatarSize: 120
    }
  },
  props: {
    config: {
      type: Object,
      default: () => { }
    }
  },
  mounted() {
    window.addEventListener('scroll', throttle(10, this.handleScroll))
    // setInterval(() => this.handleScroll(), 10)
  },
  methods: {
    handleScroll(e) {
      const el = document.scrollingElement || document.documentElement;

      // let scrollTop = window.pageYOffset || document.scrollingElement.scrollTop || document.documentElement.scrollTop || document.body.scrollTop
      let scrollTop = el.scrollTop
      let top = scrollTop < 60 ? 110 - scrollTop : 50;
      this.overlayHeight = scrollTop < 60 ? 110 - scrollTop : 50;
      this.avatarSize = scrollTop < 80 ? 120 - scrollTop : 40;
    }
  },
  computed: {
    overlaySty() {
      return {
        'height': `${this.overlayHeight}px`,
        'background-color': this.config.overlay,
        'background-image': this.config.img ? `url(${this.config.img})` : ''
      }
    },
    avatarSrc() {
      return this.config.avatar ? this.config.avatar : logoUrl
    },
    avatarSty() {
      return {
        'height': `${this.avatarSize}px`,
        'width': `${this.avatarSize}px`,
        'top': `${5 + (this.avatarSize - 40) / 80 * 5}px`,
        'border-width': `${(this.avatarSize - 40) / 80 * 4 + 1}px`,
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~src/styles/_var";

.overlay {
  width: 100%;
  height: 180px;
  background-size: 100% 100%;
}

.user-avatar {
  width: 100%;
  position: absolute;
  top: 115px;
  display: flex;
  justify-content: center;
  img {
    width: 120px;
    border: 5px solid #fff;
    background-size: 100% 100%;
    height: 120px;
    border-radius: 50%;
  }
}

@media screen and (min-width: 800px) {
  .overlay {
    height: 180px !important;
  }

  .user-avatar {
    img {
      width: 120px !important;
      height: 120px !important;
      border-width: 5px !important;
    }
  }
}

@media screen and (max-width: 800px) {
  .overlay {
    height: 110px;
    position: fixed;
    background-size: 100% 180px;
  }

  .user-avatar {
    top: 0;
    position: fixed;
    img {
      position: absolute;
    }
  }
}
</style>
