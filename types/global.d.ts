/*
 * @Author: 人工智障 waynehu2014@163.com
 * @Date: 2025-11-04 14:44:21
 * @Description: 
 */

import type { VNodeChild, ComponentPublicInstance, FunctionalComponent } from 'vue';

declare global {

  type Recordable<T = any> = Record<string, T>;

  interface ViteEnv {
    VITE_OPEN_PROXY?: Boolean;
    VITE_USE_MOCK: Boolean;
    VITE_USE_COMPRESS: Boolean;
  }
}

declare module 'vue' {
  export type JSXComponent<Props = any> = { new(): ComponentPublicInstance<Props> } | FunctionalComponent<Props>;
}

