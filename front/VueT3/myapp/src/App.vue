<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld />
</template>

<script setup>
/*
使用setup语法糖
也就是使用组合式api
可以分开不同的逻辑和变量
 */
import HelloWorld from './components/HelloWorld.vue'

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
