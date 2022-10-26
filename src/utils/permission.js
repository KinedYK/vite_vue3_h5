import router from "@/router";
import { getUserStore } from "@/store";

const userStore = getUserStore();

router.beforeEach(async (to, from, next) => {
  // router path 带 token => 更新

  const { token } = userStore;

  if (to.meta.requiresAuth && !token) {
    console.log("请先登录");
    // 将用户重定向到登录页面  并没有写完整
    if (to.path !== "/") {
      next("/");
      return;
    }
  }
  next();
});
