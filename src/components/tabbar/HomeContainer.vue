<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in lubotuList" :key="index">
        <img :src="item.url" alt="">
      </mt-swipe-item>

    </mt-swipe>
  </div>
</template>

<script>
  import {reqluobotu, reqShopGoods} from '../../api/index'
  import {Toast} from 'mint-ui'

  export default {
    data() {
      return {
        lubotuList: []
      }
    },
    mounted() {
      this.getLunbo()
    },
    methods: {
      async getLunbo() {
        const result = await reqluobotu();
        if (result.code === 0) {
          const data = result.data
          this.lubotuList = data
          Toast('轮播图加载成功')
          // console.log('成功！' + data);
          // if (data) {
          //   for (var i = 0; i < data.length; i++) {
          //     console.log("url:" + data[i].url)
          //   }
          // }
        } else {
          console.log('失败！' + data);
          Toast('轮播图加载失败')
        }
      }
    }
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
