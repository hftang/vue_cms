<template>
  <div class="shopcar-container">

    <div class="goods-list">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">

            <mt-switch></mt-switch>
            <img src="../../images/menu1.png" alt="">
            <div class="info">
              <h3>华为手机hello huawei</h3>
              <p>
                <span class="price">$2199</span>
                <shopCarNumBox style="height: 30px"></shopCarNumBox>
                <a href="#">删除</a>
              </p>
            </div>


          </div>
        </div>
      </div>
    </div>


    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import shopCarNumBox from '../subcomponents/ShopCarNumBox'

  export default {
    components: {
      shopCarNumBox
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shopcar-container {
    background-color: #eeeeee
    overflow hidden
    .goods-list {
      .mui-card-content-inner{
        display flex
        align-items center
      }

      img {
        width: 60px
        height: 60px
        margin 0px 5px
        
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
  }

</style>
