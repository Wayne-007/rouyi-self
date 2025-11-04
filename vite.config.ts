/*
 * @Author: 人工智障 waynehu2014@163.com
 * @Date: 2025-11-03 20:48:53
 * @Description: vite配置文件
 */
import { type UserConfig, type ConfigEnv, loadEnv } from 'vite'
import { createVitePlugins } from './build/vite/plugins'
import { fileURLToPath, URL } from 'node:url'
import proxy from './build/vite/proxy';
import { wrapperEnv } from './build/utils'


// https://vite.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)

  return {
    resolve: {
      alias: {
        // '@': resolve(__dirname, 'src'),
        // '#': resolve(__dirname, 'types'),
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '#': fileURLToPath(new URL('./types', import.meta.url)),
      }
    },
    plugins: createVitePlugins(viteEnv, isBuild),
  }
}
