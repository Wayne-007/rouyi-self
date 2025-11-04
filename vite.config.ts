/*
 * @Author: 人工智障 waynehu2014@163.com
 * @Date: 2025-11-03 20:48:53
 * @Description: vite配置文件
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 配置@别名
import { resolve } from 'path'

// 自动导入vue中hook、reactive、ref等
import AutoImport from 'unplugin-auto-import/vite'
// 自动导入UI组件
import Components from 'unplugin-vue-components/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      // 存放的位置
      dts: 'src/auto-import.d.ts',
    }),
    Components({
      // 引入组件，包括自定义组件
      // 存放的位置
      dts: 'src/components.d.ts',
    }),
  ],
  // 解析配置
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '#': resolve(__dirname, 'types'),
    },
  },
})
