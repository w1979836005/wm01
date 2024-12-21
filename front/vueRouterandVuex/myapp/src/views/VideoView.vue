<script>
export default {
name: "VideoView",
props:['id']
}
</script>

<template>
  <div id="video">
    <h3>一级组件:视频信息</h3>
    <p>视频id:{{id}}</p>
    <router-link :to="{name:'info1', params:{id:28}}">点赞</router-link>|
    <router-link :to="{name:'info2', params:{id:28}}">收藏</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
