/*
 * @Author: 人工智障 waynehu2014@163.com
 * @Date: 2025-11-04 11:01:46
 * @Description: 网络请求封装
 */
import axios from 'axios'
import { ElNotification, ElMessageBox, ElMessage, ElLoading } from 'element-plus'
import { getToken } from '@/utils/auth'
import errorCode from '@/utils/errorCode'

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios'

export const isRelogin = { show: false }

// 创建axios实例
const request: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // api的base_url
  timeout: 80000, // 请求超时时间（毫秒）
  withCredentials: true,  // 允许携带cookie
  // headers: {
  // 设置后端需要的传参类型
  // 'Content-Type': 'application/json',
  // 'token': x-auth-token',//一开始就要token
  // 'X-Requested-With': 'XMLHttpRequest',
  // },
})

// request拦截器
request.interceptors.request.use(config => {

  return config
}, error => {
  // 处理请求错误
  Promise.reject(error)
})

// response拦截器
request.interceptors.response.use(
  response => {
    // 响应成功
    return response.data
  },
  error => {
    // 响应错误
    return Promise.reject(error)
  }
)

export default request
