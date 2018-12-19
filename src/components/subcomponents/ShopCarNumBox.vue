<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" ref="numbox" class="mui-input-numbox" type="number" :value="initNum" readonly @change="numchange">
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
  import mui from '../../lib/mui/js/mui'

  export default {

    mounted() {
      //初始化numbox
      mui('.mui-numbox').numbox()
    },
    props: ["initNum", "goodsid"],

    methods: {

      numchange() {
        console.log('触发')

        this.$store.commit("updateGoodsInfo", {
          id: this.goodsid,
          count: this.$refs.numbox.value
        })
      }

    },


  }
</script>

<style scoped>

</style>
