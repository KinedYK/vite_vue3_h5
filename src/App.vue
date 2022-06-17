<template>
  <router-view v-slot="{ Component, route }">
    <template v-if="Component">
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <keep-alive>
          <suspense>
            <template #default>
              <component
                :is="Component"
                :key="route.meta.usePathKey ? route.path : undefined"
              />
            </template>
            <template #fallback> 
              <div>Loading...</div>
            </template>
          </suspense>
        </keep-alive>
      </transition>
    </template>
  </router-view>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  font-size: 16px;
  /* margin-top: 60px; */
}
</style>
