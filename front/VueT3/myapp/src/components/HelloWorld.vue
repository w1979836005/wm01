<template>
  <div class="hello">
    <h1>{{ getLen }}</h1>
    <h1>{{ getLen }}</h1>
    <h1>{{ getLen }}</h1>
    <h1>{{ getLen }}</h1>
    <h1>{{ getLen }}</h1>
    <h1>{{ getLen }}</h1>
    <h1>{{ getLen }}</h1>
    <button @click="clickHandlder" >修改</button>
  </div>
</template>

<script setup>
//1.rective （这里是proxy代理实现）传入对象等数据，嵌套数据（全响应式）  shallowReactive（浅响应式，只有根属性为响应式）
// import  {shallowReactive} from "vue";
//
// const myData = shallowReactive({
//   name:'高桥凉介',
//   age:19,
//   friends:['李白','杜甫']
// })
// function clickHandlder() {
//   myData.age++
// }

//2.ref  非对象值操作，帮你创建对象
// import {ref} from "vue";
//
// const count = ref(0)


//3.readonly(全只读) shallowReadonly(根只读）
// import {readonly} from "vue";
//
// const myData = readonly({
//   name:'高桥凉介',
//   age:19,
//   friends:['李白','杜甫']
// })
//
// function clickHandlder() {
//   // myData.age ++;
// }

//4.computed 计算属性
// import {computed, ref} from "vue";
//
// const content = ref('这是一段测试内容')
// const getLen = computed(()=>{
//   console.log('计算属性执行了')
//   return content.value.length
// })
// function clickHandlder() {
//   content.value += '!'
// }


//5.watch 侦听器
// import {reactive, ref, watch} from "vue";
//
// const count = ref(8)
// watch(count,(newValue,oldValue)=>{
//   console.log(newValue, oldValue)
// })
// function clickHandlder() {
//   count.value += 1
// }

// import {reactive, watch} from "vue";
//
// const myData = reactive(
//     {
//       name:'高桥凉介',
//       age:19,
//       friends:['李白','杜甫']
//     }
// )
// function clickHandlder() {
//   myData.name = 'gaoqiao';
// }
// //  对象属性监听，函数对象返回
// watch(()=>myData.name, (newValue, oldValue)=>(
//     console.log(newValue, oldValue)
// ))

//6.watchEffect  只要这里面包裹的响应式数据发生变化就会执行函数
import { ref, watchEffect} from "vue";

function clickHandlder() {
  count.value++
}
const count = ref(0)
watchEffect(()=>{
  console.log('count的值为'+count.value)
})
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
