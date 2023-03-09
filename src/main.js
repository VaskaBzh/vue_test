// styles
import "./styles/main.scss";
//========================================================================================================================================================
import { createApp } from "vue";
import App from "./App.vue";
import components from "@/components/UI";
import plugins from "@/components/plugins/plugins.js";
import router from "./router";
import store from "./store";

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});
app
  .use(store)
  .use(router)
  .use(plugins)
  .mount("#app");
