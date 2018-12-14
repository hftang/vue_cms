<template>
  <div>


    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl"
           class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a :class="['mui-control-item',item.id===0?'mui-active':'']" v-for="(item,index) in cates" :key="item.id">
            {{item.title}}
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  //引入miu.js
  import mui from '../../lib/mui/js/mui'

  export default {
    data() {
      return {
        cates: []
      }
    },
    created() {
      this.getAllImageCategory()
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
          console.log(result)
          if (result.body.code === 0) {
            const res = result.body.data
            res.unshift({id: 0, title: '全部'})
            this.cates = res
            console.log(res[0].id + "----")
          }
        })
      }
    }


  }
</script>

<style>

  * {
    touch-action: pan-y;
  }


</style>
