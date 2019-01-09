<template>
  <div class="tag">
    <a class="tag-link"
       :style="{
        'background-color':color
      }"
       @click="go">
      <span class="before"
            :style="{'border-right-color':color}"></span>
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    router: String,
    label: String,
    color: String
  },
  computed: {
    colorSchemes() {
      return this.$store.getters.colorSchemes;
    }
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

<style lang="scss">
.tag {
  & + .tag {
    margin-left: 5px;
  }
  padding-left: 12px;
  height: 18px;
  line-height: 14px;
}

.tag-link {
  .before {
    width: 0px;
    height: 0px;
    position: absolute;
    top: 0;
    left: -18px;
    border: 9px solid transparent;
  }

  &::after {
    content: " ";
    width: 4px;
    height: 4px;
    border-radius: 4px;
    position: absolute;
    top: 7px;
    left: 0;
    background-color: #fff;
  }

  &:hover {
    color: white;
  }

  display: inline-block;
  position: relative;
  background: red;
  border-radius: 0px 4px 4px 0px;
  color: white;
  font-size: 12px;
  height: 14px;
  padding: 2px 8px;
}
</style>
