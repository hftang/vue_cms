<template>
  <div class="photo-container">

    <h3>{{msg.title}}</h3>
    <div class="subtitle">
      <span>发表时间：{{msg.add_time|dateFormat}}</span>
      <span>点击：{{msg.click}}次数</span>
    </div>
    <hr>

    <!--缩图区-->
    <div class="thumb">
      <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>

    <!--图片内容区-->
    <div class="content" v-html="msg.content">

    </div>

    <!--现成的图片评论区-->
    <Comment :id="id"></Comment>

  </div>
</template>

<script>
  import Comment from "../../components/subcomponents/comment"
  import {reqImageInfos} from '../../api/index'
  import {Toast} from 'mint-ui'


  export default {
    data() {
      return {
        id: this.$route.params.id,//图片id
        msg: Object,
        slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 80,
            h: 200
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 80,
            h: 200
          },
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 80,
            h: 200
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 80,
            h: 200
          }, {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 80,
            h: 200
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 80,
            h: 200
          }
        ]
      }
    },
    components: {
      Comment
    },
    mounted() {
      this.getPhotoInfos(this.id)
    },
    methods: {
      async getPhotoInfos(imageId) {

        const result = await reqImageInfos(imageId)
        if (result.code === 0) {
          this.msg = result.data
          Toast('成功')
        } else {
          Toast('获取imageInfo失败')
        }
      },
      handleClose() {
        console.log('close event')
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .photo-container {
    padding 0px 4px

    h3 {
      font-size 16px
      text-align center
      color #007aff

    }
    .subtitle {
      margin-top 10px
      color #cacaca
      font-size 10px
      display flex
      justify-content space-between

    }
    .content {
      img {
        width: 100%
      }
    }
    .thumb {

      image {
        margin 10px
        box-shadow 0 0 12px #999
      }

    }

  }

</style>
