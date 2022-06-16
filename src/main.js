import { createApp } from 'vue'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'

/**
 * link(https://github.com/KinedYK/vite_vue3_h5/blob/master/src/components/HelloWorld.vue)
 * 设备信息
 */ 
import { isMobile, getUA } from 'mobile-device-detect'
console.log(isMobile)
console.log(getUA)

import '@/utils/device.js'

import 'normalize.css'

const app = createApp(App)

app.mount('#app')
