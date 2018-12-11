<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: "home-container"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mint-swipe-items-wrap {
    height: 200px;
    .mint-swipe-item {
      &:nth-child(1) {
        background-color: red
      }
      &:nth-child(2){
        background-color: yellow
      }
      &:nth-child(3){
        background-color: blue
      }
    }
  }

</style>
