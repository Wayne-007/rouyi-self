/*
 * @Author: 人工智障 waynehu2014@163.com
 * @Date: 2025-11-03 22:51:18
 * @Description: 配置路由
 */

import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () => import('@/views/Home.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

// 路由
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 导出
export default router
