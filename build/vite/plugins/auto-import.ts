/*
 * @Author: 人工智障 waynehu2014@163.com
 * @Date: 2025-11-04 11:46:58
 * @Description: 抽离自动引入
 */

import AntoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
//  Vue 中基于自动文件的路由并支持 TS ✨
import { VueRouterAutoImports } from 'unplugin-vue-router'

export const AutoImportDeps = () => AntoImport({
  dts: 'types/auto-import.d.ts',
  imports: [
    'vue',
    'pinia',
    {
      '@vueuse/core': []
    },
    {
      'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
    },
    VueRouterAutoImports
  ],
  resolvers: [ElementPlusResolver()]
})
