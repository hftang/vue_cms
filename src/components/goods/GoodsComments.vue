<template>
 <vcomment :id="this.$route.params.id"></vcomment>
</template>

<script>
  import vcomment from '../subcomponents/comment'
  export default {

    components:{
      vcomment
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">



</style>
