import { createApp } from "vue";
import App from "./App.vue";
import vClickOutside from "click-outside-vue3";

import "./assets/sass/main.sass";

const app = createApp(App);

app.use(vClickOutside);
app.mount("#app");
