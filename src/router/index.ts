import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/incompletas",
    name: "NotCompleted",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NotCompleted.vue")
  },
  {
    path: "/completas",
    name: "Completed",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Completed.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
