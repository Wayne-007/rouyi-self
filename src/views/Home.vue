<!--
 * @Author: 人工智障 waynehu2014@163.com
 * @Date: 2025-11-03 23:08:20
 * @Description: 一个测试页面
-->
<template>
  <div class="home">
    <h1>欢迎来到首页</h1>
  </div>
  <div>counter: {{ counter }}</div>
  <div>doubleCount: {{ doubleCount }}</div>
  <button @click="main.randomizeCount">counter(round)</button>
  <button @click="main.increment">increment++</button>

  <div>{{ name }}</div>
  <button @click="amend">修改name</button>
</template>

<script lang="ts" setup>
// 引入要使用的pinia文件
import { useMain } from '@/store/home'
import { storeToRefs } from 'pinia'

const main = useMain()

// 解构main里面的state和getter的数据
// 使用storeToRefs解构才有响应式，响应式可直接修改数据
const { counter, doubleCount, name } = storeToRefs(main)

/**
 * 修改数据的三个方法getter
 * 1. main.counter++
 * 2. main.increment()
 * 3. main.$patch({ counter: main.counter + 1 })
 */

// 使用数据
console.log('main store===>', counter.value, doubleCount.value)
main.increment()

// 修改数据
counter.value = 8888

// 使用$patch修改多个数据
const amend = () => {
  main.$patch((state) => {
    state.counter = 9999
    state.name = 'aiWayne'
  })
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}
</style>
