<template>

  <div class="goodsinfo-container">
    <!--卡片式布局-->

    <div class="mui-card first">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <Swipe :lubotuList="lubotuList" isfull="false"></Swipe>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品的标题</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥2999</del>
            &nbsp,&nbsp;销售价：<span class="now_price">￥2199</span>
          </p>

          <p>
            购买数量：
            <GoodsInfosNumBox></GoodsInfosNumBox>
          </p>

          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small"> 加入购物车</mt-button>
          </p>

        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：</p>
          <p>库存情况：</p>
          <p>上架时间：</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button size="large" type="primary" plain>图文介绍</mt-button>
        <mt-button size="large" type="danger" plain>商品评论</mt-button>
      </div>
    </div>


  </div>

</template>

<script>
  import Swipe from '../subcomponents/Swipe'
  import {reqluobotu02, reqGoodsInfos} from '../../api/index'
  import GoodsInfosNumBox from '../subcomponents/GoodsInfo-Numbox'


  export default {
    data() {
      return {
        lubotuList: [],
        id: this.$route.params.id
      }
    },
    components: {
      Swipe,
      GoodsInfosNumBox
    },
    created() {
      this.getlunbotu()
    },
    methods: {
      async getlunbotu() {

        const result = await  reqluobotu02()
        if (result.code === 0) {
          this.lubotuList = result.data
        }

      },
      async getGoodsInfos() {
        const result = await reqGoodsInfos()
        if (result.code === 0) {

        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .goodsinfo-container {
    background-color: #eee
    overflow hidden

    .now_price {
      color red
      font-size 16px
      font-weight bold
    }

    .mui-card-footer {
      display block
      button {
        margin 10px 0px
      }
    }
  }


</style>
