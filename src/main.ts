import { createApp } from "vue";
import App from "./App.vue";
import VueI18n from "./plugins/VueI18n";
import Vuetify from "./plugins/Vuetify";

createApp(App).use(Vuetify).use(VueI18n).mount("#app");
