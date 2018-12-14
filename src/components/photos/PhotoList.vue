<template>
  <div>

    <!--顶部的tab-->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl"
           class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a :class="['mui-control-item',item.id===0?'mui-active':'']" v-for="(item,index) in cates" :key="item.id"
             @click="getImagelistsById(item.id)">
            {{item.title}}
          </a>
        </div>
      </div>
    </div>

    <!--下面的图片列表-->
    <ul class="photo-list">
      <router-link v-for="(imageObj,index) in images" :key="imageObj.id" tag="li" :to="'/home/photoinfo/'+imageObj.id">
        <img v-lazy="imageObj.img_url">
        <div class="info">
          <h1 class="info-title">
            {{imageObj.title}}
          </h1>
          <div class="info-body">
            {{imageObj.zhaiyao}}
          </div>
        </div>
      </router-link>
    </ul>


  </div>
</template>

<script>
  //引入miu.js
  import mui from '../../lib/mui/js/mui'

  export default {

    data() {
      return {
        cates: [],
        images: []
      }
    },
    created() {
      this.getAllImageCategory()
      this.getImagelistsById(0)
    },
    mounted() {
      // 当 组件中的DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
      // 如果要操作元素了，最好在 mounted 里面，因为，这里时候的 DOM 元素 是最新的
      // 2. 初始化滑动控件
      mui(".mui-scroll-wrapper").scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });

    },

    methods: {
      getAllImageCategory() {
        this.$http.get('/getimagecategorys').then((result) => {
          if (result.body.code === 0) {
            const res = result.body.data
            res.unshift({id: 0, title: '全部'})
            this.cates = res

          }
        })
      },
      getImagelistsById(cateid) {
        console.log("---->")
        this.$http.get('/getimagelist/' + cateid).then((resolve) => {
          console.log("---->111")
          if (resolve.body.code === 0) {
            this.images = resolve.body.data
            console.log("成功" + this.images)
          } else {
            console.log("成功" + resolve)
          }
        }, (reject) => {
          console.log("失败")
        })

      }
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  * {
    touch-action pan-y
  }

  .photo-list {
    list-style none
    margin 0px
    padding 10px
    padding-bottom 0px

    li {
      background-color: #ccc;
      text-align center;
      margin-bottom 10px
      box-shadow 0 0 12px #cccccc
      position relative

      img {
        width: 100%
        vertical-align middle
        max-height 300px
      }

      img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
      }

      .info {
        color white
        text-align left
        position absolute
        bottom 0px
        background-color: rgba(0, 0, 0, 0.4)
        max-height 84px

        .info-title {
          font-size 12px

        }

        .info-body {
          font-size 10px
        }

      }
    }
  }


</style>
