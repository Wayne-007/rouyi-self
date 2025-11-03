/*
 * @Author: 人工智障 waynehu2014@163.com
 * @Date: 2025-11-03 23:19:35
 * @Description: 仓库配置
 */

import { defineStore } from 'pinia'

// 命名可以是useXxx之类的名字
// defineStore('main', {}) 在devtools中会显示为main这个名字
export const useMain = defineStore('main', {
  // 状态
  state: () => ({
    counter: 0,
    name: 'waynehu',
  }),
  // 计算属性
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  // 方法：相当于vuex的 mutations + actions，可以同时写同步和异步代码
  actions: {
    increment() {
      this.counter++
    },
    randomizeCount() {
      this.counter = Math.round(Math.random() * 100)
    },
  },
})

