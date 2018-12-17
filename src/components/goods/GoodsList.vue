<template>
  <div class="goodslist">

    <div class="goods-item">
      <img src="http://m.360buyimg.com/babel/jfs/t1/232/35/2468/110752/5b9613a5E5348ee6d/70db14139612b658.jpg!q70.jpg"
           alt="">
      <h3>华为手机为爱国而买，真的爱国哦。前进前进</h3>

      <div class="info">
        <p class="price">
          <span class="now">￥1999</span>
          <span class="old">￥2999</span>
        </p>

        <p class="sell">
          <span>热卖中</span>
          <span>剩90件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img src="http://m.360buyimg.com/babel/jfs/t1/232/35/2468/110752/5b9613a5E5348ee6d/70db14139612b658.jpg!q70.jpg"
           alt="">
      <h3>华为手机为爱国而买，真的sdsdafsdfsadfsadfsdfsdafsdfsdfdsfsadfsdafsdafsdafsdfs
        adfsdfsdfsdfsdfeww
        wesdsDs</h3>

      <div class="info">
        <p class="price">
          <span class="now">￥1999</span>
          <span class="old">￥2999</span>
        </p>

        <p class="sell">
          <span>热卖中</span>
          <span>剩90件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img src="http://m.360buyimg.com/babel/jfs/t1/232/35/2468/110752/5b9613a5E5348ee6d/70db14139612b658.jpg!q70.jpg"
           alt="">
      <h3>华为手机为爱国而买，真的爱国哦。前进前进</h3>

      <div class="info">
        <p class="price">
          <span class="now">￥1999</span>
          <span class="old">￥2999</span>
        </p>

        <p class="sell">
          <span>热卖中</span>
          <span>剩90件</span>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "goods-list"
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
        p{
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
