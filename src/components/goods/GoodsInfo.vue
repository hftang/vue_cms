<template>
  <div class="goodsinfo-container">
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter">

      <div class="ball" v-show="ballFrag" ref="ball"></div>

    </transition>

    <!--卡片式布局-->
    <div class="mui-card first">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <Swipe :lubotuList="lubotuList" isfull="false"></Swipe>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">{{goods.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥{{goods.market_price}}</del>
            &nbsp,&nbsp;销售价：<span class="now_price">￥{{goods.sell_price}}</span>
          </p>

          <p>
            购买数量：
            <GoodsInfosNumBox @getcount="getSelectCount" :maxNum="goods.stock_quantity"></GoodsInfosNumBox>
          </p>

          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addShopCart"> 加入购物车</mt-button>
          </p>

        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goods.goods_no}}</p>
          <p>库存情况：{{goods.stock_quantity}}件</p>
          <p>上架时间：{{goods.add_time|dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button size="large" type="primary" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button size="large" type="danger" plain @click="goComment(id)">商品评论</mt-button>
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
        id: this.$route.params.id,
        goods: Object,
        ballFrag: false,
        selectCount: 1
      }
    },
    components: {
      Swipe,
      GoodsInfosNumBox
    },
    created() {
      this.getlunbotu(),
        this.getGoodsInfos()
    },
    methods: {
      async getlunbotu() {

        const result = await  reqluobotu02()
        if (result.code === 0) {
          this.lubotuList = result.data
        }

      },
      async getGoodsInfos() {
        const result = await reqGoodsInfos(this.id)
        if (result.code === 0) {
          this.goods = result.data
        }
      },

      //使用编程导航的方式 跳转到商品描述 和 评论页面
      goDesc(id) {
        this.$router.push({name: "goodsdesc", params: {id}})
      },
      goComment(id) {
        this.$router.push({name: "goodscomment", params: {id}})
      },
      addShopCart() {
        this.ballFrag = !this.ballFrag
        //创建一个商品信息
        const goods = {
          id: this.id,
          count: this.selectCount,
          price: this.goods.sell_price,
          selected: true
        }

        //调用
        this.$store.commit("addToCar", goods)



      },

      beforeEnter: function (el) {
        el.style.transform = "translate(0px, 0px)"
      },

      afterEnter(el) {
        this.ballFrag = !this.ballFrag
      },
      enter(el, done) {
        el.offsetWidth;
        const ballPosition = this.$refs.ball.getBoundingClientRect();
        const badgePosition = document.getElementById('badge').getBoundingClientRect();

        const xDist = badgePosition.left - ballPosition.left;
        const yDist = badgePosition.top - ballPosition.top;

        el.style.transform = `translate(${xDist}px,${yDist}px)`;
        el.style.transition = 'all 1s ease';
        done()
      },
      getSelectCount(count) {
        this.selectCount = count
        console.log("父组件拿到的值：" + count)
      }

    }

  }
</script>

<style>
  /*.goodsinfo-container {
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
    .ball {
      width: 15px
      height: 15px
      background-color: red
      border-radius 50%
      position absolute
      z-index 199
      left: 154px
      top: 409px
    }
  }
*/
  .goodsinfo-container {
    background-color: #eee;
    overflow: hidden;
  }

  .goodsinfo-container .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold
  }

  .goodsinfo-container .mui-card-footer {

    display: block;

  }

  .goodsinfo-container .mui-card-footer button {
    margin: 10px 0px;
  }

  .goodsinfo-container .ball {
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    z-index: 199;
    left: 154px;
    top: 409px;

  }

</style>
