<template>
  <ul class="mui-table-view">

    <li class="mui-table-view-cell mui-media" v-for="(item,index) in newsList" :key="index">
      <router-link :to="'/home/newsinfo/'+item.id">
        <img class="mui-media-object mui-pull-left" :src="item.img_url">
        <div class="mui-media-body">
          <h1>{{item.title}}</h1>
          <p class="mui-ellipsis">
            <span>发表时间：{{item.add_time|dateFormat('YYYY-MM-DD')}}</span>
            <span>点击：{{item.click}}次</span>
          </p>
        </div>
      </router-link>
    </li>


  </ul>

</template>

<script>
  import {reqNewsList} from '../../api/index'
  import {Toast} from 'mint-ui'

  export default {

    data() {
      return {
        newsList: []
      }
    },
    created() {
      this.getNewsList()
    },
    methods: {

      async getNewsList() {
        const result = await reqNewsList()
        if (result.code === 0) {
          this.newsList = result.data
        } else {
          //失败
          Toast('获取新闻列表失败')
        }
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mui-table-view {
    li {
      h1 {
        font-size: 14px;
      }

      .mui-ellipsis {
        font-size: 12px;
        color: #226aff;
        display flex;
        justify-content space-between
      }
    }
  }
</style>
