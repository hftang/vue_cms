<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr/>
    <textarea placeholder="请输入要评论的内容" maxlength="120">

    </textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>

    <!--评论列表-->
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in mements" :key="index">

        <div class="cmt-title">
          第{{index+1}}楼 &nbsp; &nbsp;用户名称：{{item.user_name}} &nbsp; &nbsp;发表时间：{{item.add_time|dateFormat}}
        </div>
        <div class="cmt-body">
          {{item.content === 'undefined'?'没有内容':item.content}}
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
  import {reqMementLists} from '../../api/index'
  import {Toast} from 'mint-ui'

  export default {
    data() {
      return {
        mements: [],
        pageIndex: 1
      }
    },
    created() {
      this.getMements()
    },

    methods: {
      async getMements() {

        const result = await  reqMementLists(this.id, this.pageIndex)
        if (result.code === 0) {
          //不要覆盖 要累加
          this.mements = this.mements.concat(result.data)
          Toast('获取评论成功')
        } else {
          Toast('获取评论列表失败')
        }

      },
      getMore() {
        this.pageIndex++
        this.getMements()
      }
    },
    props: ["id"]


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .cmt-container {
    h3 {
      font-size 16px
    }
    textarea {
      font-size 14px
      height 85px
      margin 0px
    }
    .cmt-list {
      margin 10px 0px

      .cmt-item {
        font-size 10px
        .cmt-title {
          background-color: #ccc
          text-align center
          line-height 30px

        }

        .cmt-body {
          line-height 45px
          text-indent 2em
        }

      }
    }

  }

</style>
