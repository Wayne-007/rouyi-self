/*
 * @Author: 人工智障 waynehu2014@163.com
 * @Date: 2025-11-04 14:41:05
 * @Description: createVitePlugins,封装plugins数组统一调用
 */

import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { AutoImportDeps } from './auto-import'
import { AutoRegistryComponents } from './components'

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),
    vueJsx(),
  ]
  // 自动按需引入组件
  vitePlugins.push(AutoRegistryComponents())
  // 自动按需引入依赖
  vitePlugins.push(AutoImportDeps())

  return vitePlugins
}
