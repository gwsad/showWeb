
import { defineStore } from "pinia";
import store from "@/store";
import {
  getLogin,
  getUserInfo
} from "@/api/home";
import { setToken, removeToken } from "@/utils/auth";

export const useUserStore = defineStore({
  id: "pure-user",
  state: () => ({
    userInfo: {},
    cashInfo: {
      type: null
    },
  }),
  actions: {
    /** 登入 */
    async loginByUsername(data) {
      return new Promise((resolve, reject) => {
        getLogin(data)
          .then(data => {
            if (data["code"] === 200) {
              setToken(data["data"].token);
              resolve(data);
            } else {
              reject(data);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    // 获取用户信息
    async handleGetUserInfo() {
      return new Promise<void>((resolve, reject) => {
        getUserInfo()
          .then(response => {
            this.userInfo = response.data;
            window.sessionStorage.setItem("userInfo", JSON.stringify(response.data));
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    // 设置提现信息
    setCashInfo(data) {
      this.cashInfo = data;
    }
  }
});
export function useUserStoreHook() {
  return useUserStore(store);
}
