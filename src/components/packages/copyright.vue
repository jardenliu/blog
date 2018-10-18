<template>
  <div class="copyright">
    <div>
      <a class="record-number"
         href="https://github.com/jardenliu"
         target="_blank">© 2018 流君酱</a></div>
    <div>
      <a class="record-number"
         href="http://www.miibeian.gov.cn"
         target="_blank">粤ICP备18026977号</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "~src/styles/_var";

.copyright {
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  margin: 30px 30px 15px;
  color: #4d4d4d;
  opacity: 0.6;
  a:hover {
    color: $link-color;
  }
}

@media screen and (max-width: 800px) {
  .copyright {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.25;
    margin: 10px;
  }
}
</style>
