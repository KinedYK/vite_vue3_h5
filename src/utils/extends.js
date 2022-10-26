/**
 * link(https://github.com/duskload/mobile-device-detect/blob/master/README.md)
 * 设备信息
 */
import { isMobile, getUA } from "mobile-device-detect";
console.log(isMobile);
console.log(getUA);

// 剪切板
import VueClipboard from "vue-clipboard2";

// 路由拦截
import "./permission";

// css
import "normalize.css";
// vant
import "vant/lib/index.css";
// vant Toast
import "vant/es/toast/style";
