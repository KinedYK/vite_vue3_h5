import { createRouter, createWebHashHistory } from "vue-router";

// 路由懒加载
const Index = () => import("@/views/Index.vue");

const routes = [
  {
    path: "/",
    component: Index,
    meta: {
      requiresAuth: false,
      title: "邀请码",
    },
  },
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  // 将匹配以 `/user-` 开头的所有内容，并将其放在 `$route.params.afterUser` 下
  // { path: '/user-:afterUser(.*)', component: UserGeneric },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  routes, // `routes: routes` 的缩写
  history: createWebHashHistory(),
  scrollBehavior() {
    return {
      el: "#app",
      top: 0,
      behavior: "smooth",
    };
  },
});

router.beforeEach(async (to, from) => {
  document.title = to.meta.title || "活动";
  if (to.query.token) {
    console.log("beforeEach:", to);
    setToken(to.query.token);
  }
});

export default router;
