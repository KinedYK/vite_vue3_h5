import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index";
import { store } from "@/store";

import "@/utils/extends";

const app = createApp(App);

app.use(store).use(router).mount("#app");
