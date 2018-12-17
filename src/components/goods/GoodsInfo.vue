<template>

  <div class="goodsinfo-container">
    <!--卡片式布局-->

    <div class="mui-card first">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <Swipe :lubotuList="lubotuList"></Swipe>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
        </div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>


  </div>

</template>

<script>
  import Swipe from '../subcomponents/Swipe'
  import {reqluobotu}from'../../api/index'

  export default {
    data() {
      return {
        lubotuList: []
      }
    },
    components: {
      Swipe
    },
    created() {
      this.getlunbotu()
    },
    methods: {
      async getlunbotu() {

        const result = await  reqluobotu()
        if (result.code === 0) {
          this.lubotuList = result.data
        }

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .goodsinfo-container {
    background-color: #eee
    overflow hidden
  }

  .goodsinfo-container{
    .first{
      .mui-card-content-inner{
        padding 0px
        
      }
    }
  }

</style>
