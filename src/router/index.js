import {
  createRouter,
  createWebHashHistory,
} from "vue-router";

// 路由懒加载
const Index = () => import('@/views/Index.vue')

const routes = [
  { path: '/', component: Index },
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  // 将匹配以 `/user-` 开头的所有内容，并将其放在 `$route.params.afterUser` 下
  // { path: '/user-:afterUser(.*)', component: UserGeneric },
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  routes, // `routes: routes` 的缩写
  history: createWebHashHistory(),
  scrollBehavior (to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  }
})

export default router;