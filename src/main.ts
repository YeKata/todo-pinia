import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import App from "./App.vue";

library.add(far, fas);
const pinia = createPinia();
const app = createApp(App);

app.use(pinia).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
