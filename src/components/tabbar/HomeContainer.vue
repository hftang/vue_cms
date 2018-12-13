<template>
  <div>
    <!--mint 的 轮播图-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in lubotuList" :key="index">
        <img :src="item.url" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!--mui 的九宫格-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻咨询</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
        <!--<span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>-->
        <img src="../../images/menu2.png" alt="">
        <div class="mui-media-body">图片分享</div>
      </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu3.png" alt="">
        <div class="mui-media-body">商品购买</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu4.png" alt="">
        <div class="mui-media-body">留言反馈</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu5.png" alt="">
        <div class="mui-media-body">视频专区</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu6.png" alt="">
        <div class="mui-media-body">联系我们</div>
      </a></li>

    </ul>
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

  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
    img {
      width: 60px;
      height: 60px;
    }

    .mui-table-view-cell {
      border-right: none;
      border-bottom: none

      .mui-media-body {
        font-size: 12px;

      }
    }
  }


</style>
