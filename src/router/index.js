import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AttractionView from "@/views/AttractionView.vue";
import BoardView from "@/views/BoardView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/board",
    name: "BoardView",
    component: BoardView,
  },
  {
    path: "/attraction",
    name: "AttractionView",
    component: AttractionView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
