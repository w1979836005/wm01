<template>
  <div class="hello">
    <!--    加入插值-->
    <slot>基础的默认</slot>
    <h1>{{ msg }}</h1>
    <p>props中的count:{{count}}</p>
    <button @click="hander">按钮</button>

    <!--    加入插值-->
    <slot name="footer" :childCount="childCount">footer默认</slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  //组件通信，
  //1.父传子 通过props进行处理
  //2.子传父 通过自定义事件处理
  //3.通过插槽显示
  props: {
    msg: String,
    count:{
      type:[String, Number],
      default:100,
      //这里表示必须传入值
      // required:true
    }
  },
  data(){
    return {
     childCount:0
    }
  },
  methods:{
    hander(){
      this.childCount ++
      this.$emit('AAA', this.childCount)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
