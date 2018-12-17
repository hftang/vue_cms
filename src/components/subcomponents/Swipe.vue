<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item,index) in lubotuList" :key="index">
      <img :src="item.url" alt="" :class="{full:isfull}">
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
  export default {

    props: ['lubotuList', 'isfull'],


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mint-swipe-items-wrap {
    height: 200px;
    .mint-swipe-item {
      text-align center
      img {
        height: 100%
      }
    }
  }

  .full {
    width: 100%
  }
</style>
