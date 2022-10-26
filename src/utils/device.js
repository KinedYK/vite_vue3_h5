// 设备信息 https://github.com/duskload/mobile-device-detect/blob/master/README.md
import {
  isMobile,
  getUA,
  isAndroid,
  isIOS,
  isSafari,
  isBrowser,
} from "mobile-device-detect";

const isWxMini = /miniProgram/i.test(getUA) && /micromessenger/i.test(getUA);

const getDeviceStr = () => {
  switch (true) {
    case isWxMini:
      return "wxMini";
      break;
    case isAndroid:
      return "android";
      break;
    case isIOS:
      return "ios";
      break;
    case isMobile:
      return "mobile";
      break;
    case isSafari:
      return "safari";
      break;
    case isBrowser:
      return "browser";
      break;
    default:
      return "";
      break;
  }
};

export {
  isWxMini,
  isMobile,
  isAndroid,
  isIOS,
  getUA,
  isSafari,
  isBrowser,
  getDeviceStr,
};
