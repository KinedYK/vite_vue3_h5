import { defineStore } from "pinia";
import { getToken, removeToken } from "@/utils/token";
import { store } from "@/store";

export const useUserStore = defineStore("user", {
  state: () => ({
    token: getToken(), // 默认token不走权限
    // userInfo: InitUserInfo,
  }),
  getters: {
    // roles: (state) => {
    //   return state.userInfo?.roles;
    // },
  },
  actions: {
    async removeToken() {
      this.token = "";
    },
  },
});

export function getUserStore() {
  return useUserStore(store);
}
