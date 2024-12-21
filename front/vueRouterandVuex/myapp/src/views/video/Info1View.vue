<script>
export default {
  name: "Info1View",
  created() {
    if(this.$store.state.loginStatus)
      console.log('用户已登录');
    else
      console.log('用户未登录')

    // setTimeout(()=>{
    //   // this.$router.push({name:'home'})
    //   this.$router.push({name:'info2', query:{someData:'info1的数据'}})
    // }, 3000)
  }
}
</script>

<template>
<div id="video-info1">
  <h3>二级组件:点赞情况分析</h3>
</div>
</template>

<style scoped>

</style>
