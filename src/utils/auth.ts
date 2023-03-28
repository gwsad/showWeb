import Cookies from "js-cookie";

export interface DataInfo<T> {
  /** token */
  access_token: string;
  /** `access_token`的过期时间（时间戳） */
  expires_in: T;
  /** 用于调用刷新accessToken的接口时所需的token */
  refreshToken: string;
  /** 用户名 */
  username?: string;
  /** 当前登陆用户的角色 */
  roles?: Array<string>;
  /** 跨平台登录 */
  domain?: string;
}

export const sessionKey = "user-info";
export const TokenKey = "token";

/** 获取`token` */
export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(data: string) {
  Cookies.set(TokenKey, data);
}

/**
 * @description 设置`token`以及一些必要信息并采用无感刷新`token`方案
 * 无感刷新：后端返回`access_token`（访问接口使用的`token`）、`refreshToken`（用于调用刷新`access_token`的接口时所需的`token`，`refreshToken`的过期时间（比如30天）应大于`access_token`的过期时间（比如2小时））、`expires_in`（`access_token`的过期时间）
 * 将`access_token`、`expires_in`这两条信息放在key值为authorized-token的cookie里（过期自动销毁）
 * 将`username`、`roles`、`refreshToken`、`expires_in`这四条信息放在key值为`user-info`的sessionStorage里（浏览器关闭自动销毁）
 */


/** 删除`token`以及key值为`user-info`的session信息 */
export function removeToken() {
  Cookies.remove(TokenKey)
}
