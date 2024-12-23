<template>
  <div class="about">
    <p>Counter: {{ counterStore.count }}</p>
    <p>2*Count:{{counterStore.doubleCount}}</p>
    <button @click="add">修改</button>
  </div>
</template>

<script setup>
import {useCounterStore} from '../stores/counter.js'
const counterStore = useCounterStore();
function add() {
  counterStore.increment();
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
