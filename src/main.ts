/*
 * @Author: 人工智障 waynehu2014@163.com
 * @Date: 2025-11-03 20:48:53
 * @Description: 入口文件
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入路由
import router from './router'

// pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)
app.use(pinia)  //  使用pinia
app.use(router) //  使用路由
app.mount('#app')

