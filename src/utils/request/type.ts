/*
 * @Author: 人工智障 waynehu2014@163.com
 * @Date: 2025-11-04 11:02:27
 * @Description: 网络请求的类型文件
 */

export interface RequestOptions {
  // Whether to process the request result
  isTransformResponse?: boolean;
}

// 返回res.data的接口
export interface IResponse<T = any> {
  code: number | string;
  result: T;
  message: string;
  status: string | number;
}

// 用户登录相关
export interface ILogin {
  // 账户名称
  username: string;
  // 账户密码
  password: string;
}
