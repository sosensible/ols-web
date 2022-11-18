import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// const app = createApp(App).use(createPinia()).use(router);
const app = createApp(App).use(createPinia()).use(router);

app.mount("#ols_app");
