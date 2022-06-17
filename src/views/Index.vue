<template>
  <div class="container" >
    <img alt="bg" src="@/assets/bg@2x.png" />
    <div class="button" @click="show = true">点击获取内测链接</div>   
  </div>
  <HelloWorld v-show="show" @close="show = false"/>
</template>

<script setup>
import { ref } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '@/components/HelloWorld.vue'

const show = ref(false)

</script>

<style lang="less" scoped>
.container {
  position: relative;
  min-height: 100vh;

  .button {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    background-color: #F3644B;
    font-size: 15px;
    height: 60px;
  }
}

img {
    width: 100%;
    padding-bottom: 55px;
  }

</style>