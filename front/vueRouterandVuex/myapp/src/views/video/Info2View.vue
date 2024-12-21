<script>
export default {
  name: "Info2View",
  created() {
    // console.log(this.$route.query)
    this.handler()
  },
  methods:{
    handler(){
      this.$store.commit('chageCount',1)
      this.$store.commit('chageCount',1)
      this.$store.commit('chageCount',1)
      this.$store.dispatch('delayChangeCount',10)
      console.log(this.$store.getters.len)
    }
  }
}
</script>

<template>
  <div id="video-info1">
    <h3>二级组件:收藏情况分析</h3>
  </div>
</template>

<style scoped>

</style>
