import { isWxMini, isAndroid } from "@/utils/device";

const TOKEN_KEY = "token";

const getToken = () => {
  if (isWxMini) {
    // alert("isWxMini");
    return localStorage.getItem(TOKEN_KEY);
  }
  if (isAndroid) {
    // alert("isAndroid");
    return window.bridge.call("getToken");
  }
  // alert("PC");
  return localStorage.getItem(TOKEN_KEY);
};

const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

const setToken = (token) => {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    removeToken();
  }
};

export { setToken, getToken, removeToken };
