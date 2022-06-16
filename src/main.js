import { createApp } from 'vue'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'

/**
 * link(https://github.com/duskload/mobile-device-detect/blob/master/README.md)
 * 设备信息
 */ 
import { isMobile, getUA } from 'mobile-device-detect'
console.log(isMobile)
console.log(getUA)

import '@/utils/device.js'

import 'normalize.css'

const app = createApp(App)

app.mount('#app')
