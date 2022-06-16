import { createApp } from 'vue'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'

// 设备信息 demo
import { isMobile, getUA } from 'mobile-device-detect'
console.log(isMobile)
console.log(getUA)

import '@/utils/device.js'

import 'normalize.css'

const app = createApp(App)

app.mount('#app')
