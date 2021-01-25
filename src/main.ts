import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheck,
  faEdit,
  faExclamation,
  faSave,
  faTimes,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue from "vue";
import "./app.scss";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

library.add(faTrashAlt);
library.add(faCheck);
library.add(faEdit);
library.add(faSave);
library.add(faTimes);
library.add(faExclamation);

Vue.component("v-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
