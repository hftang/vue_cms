<template>
  <div class="goodslist">

    <!--<router-link class="goods-item" v-for="(item,index) in goodsList" :to="'/home/goodsinfo/'+item.id">-->
    <!--<img :src='item.img_url'>-->
    <!--<h3>{{item.title}}</h3>-->
    <!--<div class="info">-->
    <!--<p class="price">-->
    <!--<span class="now">￥{{item.sell_price}}</span>-->
    <!--<span class="old">￥{{item.market_price}}</span>-->
    <!--</p>-->
    <!--<p class="sell">-->
    <!--<span>热卖中</span>-->
    <!--<span>剩{{item.stock_quantity}}件</span>-->
    <!--</p>-->
    <!--</div>-->
    <!--</router-link>-->


    <div class="goods-item" v-for="(item,index) in goodsList" @click="goGoodsInfos(item.id)">
      <img :src='item.img_url'>
      <h3>{{item.title}}</h3>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>
    <!--加载更多按钮-->
    <mt-button type="danger" size="large" @click="loadMore()">加载更多</mt-button>
  </div>
</template>

<script>
  import {reqGoodsList} from '../../api/index'


  export default {
    data() {
      return {
        indexPage: 0,
        goodsList: []
      }
    },
    mounted() {
      this.getGoodsList()

    },
    methods: {

      loadMore() {
        this.indexPage++
        this.getGoodsList()


      },
      async getGoodsList() {
        const result = await reqGoodsList(this.indexPage)
        if (result.code === 0) {
          const dataSource = result.data
          this.goodsList = this.goodsList.concat(dataSource)
        }
      },

      //第二种跳转路由的方法
      goGoodsInfos(id) {
        this.$router.push('/home/goodsinfo/' + id)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .goodslist {
    display flex
    flex-wrap wrap
    padding 8px
    justify-content space-between

    .goods-item {
      width 49%
      border 1px solid #ccc
      box-shadow 0 0 8px #cccccc
      margin 4px 0px
      padding 2px
      display flex
      flex-direction column
      justify-content space-between
      min-height 144px

      img {
        width: 100%
        height: 160px
      }
      h3 {
        font-size 14px
        color #7c7c7c
      }

      .info {
        background-color: #ddd
        p {
          margin 0px
          padding 5px

        }
        .price {

          .now {
            color red
            font-weight bold
            font-size 16px

          }
          .old {
            text-decoration line-through
            font-size 12px
            margin-left 10px

          }

        }
        .sell {
          display flex
          justify-content space-between
          font-size 13px

        }
      }
    }
  }


</style>
