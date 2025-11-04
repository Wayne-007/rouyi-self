/*
 * @Author: 人工智障 waynehu2014@163.com
 * @Date: 2025-11-04 15:24:56
 * @Description: AutoRegistryComponents,按需加载，自动引入组件
 */

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'

export const AutoRegistryComponents = () => {
  return Components({
    dirs: ['src/components'],
    extensions: ['vue', 'md'],
    deep: true,
    dts: 'types/components.d.ts',
    directoryAsNamespace: false,
    globalNamespaces: [],
    directives: true,
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
    resolvers: [ElementPlusResolver(), VueUseComponentsResolver()],
  })
}

