<template>
  <div class="container">
    <h3>{{result.title}}</h3>
    <hr>
    <div v-html="result.content"></div>
  </div>
</template>

<script>
  import {reqGoodsDesc} from "../../api";

  export default {

    data() {
      return {
        result: Object,
        id: this.$route.params.id
      }
    },
    mounted() {
      this.getGoodsDesc()
    },
    methods: {
      async getGoodsDesc() {

        const result = await  reqGoodsDesc(this.id)
        if (result.code === 0) {
          this.result = result.data
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .container{
    padding 0px 5px

    h3{
      padding 8px

      color: blue
      font-weight bold
      font-size 16px
      text-align center
    }
    img{
      width: 100%
    }
  }

</style>
