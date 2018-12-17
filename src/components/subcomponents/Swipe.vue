<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item,index) in lubotuList" :key="index">
      <img :src="item.url" alt="">
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
  export default {

    props:['lubotuList'],


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mint-swipe-items-wrap {
    height: 200px;
    .mint-swipe-item {
      &:nth-child(1) {
        background-color: red
      }
      &:nth-child(2) {
        background-color: yellow
      }
      &:nth-child(3) {
        background-color: blue
      }
      img {
        width: 100%
        height: 100%
      }
    }
  }
</style>
