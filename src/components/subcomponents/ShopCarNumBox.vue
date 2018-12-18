<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" ref="numbox" class="mui-input-numbox" type="number" value="1" @change="countChange">
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
    methods: {
      countChange() {
        this.$emit("getcount", parseInt(this.$refs.numbox.value))
      }
    },
    props: ["maxNum"],
    watch: {
      'maxNum': function (newVal, oldVal) {

        mui('.mui-numbox')
          .numbox()
          .setOption('max',newVal)


      }
    }

  }
</script>

<style scoped>

</style>
