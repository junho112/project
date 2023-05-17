import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AttractionView from "@/views/AttractionView.vue";
// import AppBoard from "@/views/AppBoard";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/attraction",
    name: "AttractionView",
    component: AttractionView,
  },
  {
    path: "/board",
    name: "board",
    component: () =>
      import(/* webpackChunkName: "board" */ "../views/AppBoard.vue"),
    redirect: "/board/list",
    children: [
      {
        path: "list",
        name: "boardlist",
        // component: BoardList,
        component: () =>
          import(
            /* webpackChunkName: "board" */ "../components/board/BoardList"
          ),
      },
      // {
      //   path: "write",
      //   name: "boardwrite",
      //   // component: BoardWrite,
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "board" */ "../components/board/BoardWrite"
      //     ),
      // },
      // {
      //   path: "view/:articleno",
      //   name: "boardview",
      //   // component: BoardView,
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "board" */ "../components/board/BoardView"
      //     ),
      // },
      // {
      //   path: "modify",
      //   name: "boardmodify",
      //   // component: BoardModify,
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "board" */ "../components/board/BoardModify"
      //     ),
      // },
      // {
      //   path: "delete",
      //   name: "boarddelete",
      //   // component: BoardDelete,
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "board" */ "../components/board/BoardDelete"
      //     ),
      // },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
