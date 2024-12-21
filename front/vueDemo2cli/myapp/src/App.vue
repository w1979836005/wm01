<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>父组件中接受的数据:{{childData}}</h1>
<!--    3.如果我们希望多次使用子组件
          并且除了核心功能点，还有一些不同的东西的时候，我们可以使用插值-->
    <HelloWorld msg="Welcome to Your Vue.js App"
                :count="parenCount"
                @AAA="hander"
                                  >
      <template v-slot:footer>第1个footer</template>
    </HelloWorld>

<!--    在父组件中使用子组件插槽中的值-->
<!--    绑定作用域-->
    <HelloWorld>
      <template v-slot:footer="data">第2个footer: {{data.childCount}}</template>
    </HelloWorld>

    <HelloWorld>
      这是默认内容3
      <template #footer="data">第3个footer:{{data.childCount}}</template>
    </HelloWorld>

  </div>
</template>

<script>
//这里的组件都是 new 出来的
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
   return {
     parenCount:1000,
     childData:0
   }
  },
  methods:{
    hander(childCount){
      this.childData = childCount
    }
  }
}
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
