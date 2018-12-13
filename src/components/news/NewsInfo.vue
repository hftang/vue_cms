<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsObj.title}}</h3>
    <p class="subtitle">
      <span>{{newsObj.add_time}}</span>
      <span>点击：{{newsObj.click}}次</span>
    </p>
    <hr/>
    <div class="content" v-html="newsObj.content">


    </div>
  </div>
</template>

<script>
  import {reqNewsInfos} from "../../api/index"
  import {Toast} from 'mint-ui'

  export default {

    data() {
      return {
        id: this.$route.params.id,
        newsObj: Object
      }
    },

    created() {
      this.getNewsInfo();
    },

    methods: {
      async getNewsInfo() {
        const result = await reqNewsInfos()
        if (result.code === 0) {
          this.newsObj = result.data[0]
        } else {
          Toast('获取新闻详情数据失败')
        }

      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .newsinfo-container {
    padding 0 4px;

    .title {
      font-size: 16px
      color red
      text-align: center
      margin 15px 0px
    }
    .subtitle {
      display: flex;
      justify-content: space-between;
      font-size 12px
      color #007aff
    }
    .content {
      img{
        width: 100%
      }
    }
  }


</style>
