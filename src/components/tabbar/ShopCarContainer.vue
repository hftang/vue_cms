<template>
  <div class="shopcar-container">

    <div class="goods-list">
      <div class="mui-card" v-for="(item,index ) in goodsList" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">

            <mt-switch v-model="$store.getters.getSwitchState[item.id]"
                       @change="onselectchange(item.id,$store.getters.getSwitchState[item.id])"></mt-switch>
            <img :src="item.thumb_path" alt="">
            <div class="info">
              <h3>{{item.title}}</h3>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <shopCarNumBox style="height: 30px" :initNum="$store.getters.getGoodsCount[item.id]"
                               :goodsid="item.id"></shopCarNumBox>
                <a href="#" @click="remove(index,item.id)">删除</a>
              </p>
            </div>


          </div>
        </div>
      </div>

    </div>


    <div class="mui-card goumai">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="left">
            <p>总计（不含运费）</p>
            <p>已勾选商品<span class="red">{{$store.getters.getShopGoodsCountAndPrice.count}}</span>件，总价<span class="red">￥ {{$store.getters.getShopGoodsCountAndPrice.total}}</span></p>
          </div>

          <mt-button type="danger">结算</mt-button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import shopCarNumBox from '../subcomponents/ShopCarNumBox'
  import {reqShopCartGoods} from '../../api/index'

  export default {
    components: {
      shopCarNumBox
    },
    data() {
      return {
        goodsList: []
      }
    },
    mounted() {
      this.reqShopCartContent()
    },
    methods: {
      async reqShopCartContent() {

        var idArr = [];
        this.$store.state.car.forEach(item => idArr.push(item.id))
        if (idArr.length <= 0) {
          result
        }


        const result = await reqShopCartGoods(idArr.join(','))
        if (result.code === 0) {
          this.goodsList = result.data
        }

      },
      //index 是删除 goodlist的 id 是删除store中的
      remove(index, id) {
        this.goodsList.splice(index, 1)
        this.$store.commit("removeGoodsById", id)

      },
      //把switch切换的值跟store联动起来
      onselectchange(idx, statue) {

        this.$store.commit("onchangeSwitch", {
          id: idx,
          selected: statue
        })

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shopcar-container {
    background-color: #eeeeee
    overflow hidden
    .goods-list {
      .mui-card-content-inner {
        display flex
        align-items center
      }

      img {
        width: 60px
        height: 60px
        margin 0px 1px

      }
      h3 {
        font-size 14px

      }
      .info {
        display flex
        flex-direction column
        justify-content space-between
        .price {
          color red
          font-weight bold
        }
      }
    }
    .goumai {
      .mui-card-content-inner {
        display flex
        justify-content space-between
        align-items center

        .red {
          color red
          font-weight bold
          font-size 18px

        }
      }
    }
  }

</style>
