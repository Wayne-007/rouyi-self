/*
 * @Author: 人工智障 waynehu2014@163.com
 * @Date: 2025-11-04 15:18:20
 * @Description: 
 */
import { API_BASE_URL, API_TARGET_URL } from '../constant';
import type { ProxyOptions } from 'vite';

type ProxyTargetList = Record<string, ProxyOptions>;

const init: ProxyTargetList = {
  // test
  [API_BASE_URL]: {
    target: API_TARGET_URL,
    changeOrigin: true,
    rewrite: (path) => path.replace(new RegExp(`^${API_BASE_URL}`), ''),
  }
};

export default init;
