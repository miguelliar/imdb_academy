import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/details/:id",
    name: "details",
    component: () => import("../views/DetailsView.vue"),
  },
  {
    path: "/about",
    name: "about", //Crear un chunk para cada una de las rutas
    //Leer acerca del pre-fetching --> Cargar antes
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/insights",
    name: "insights",
    component: () =>
      import(/* webpackChunkName: "insights" */ "../views/InsightsView.vue"),
  },

  {
    path: "/:pathMatch(.*)",
    component: () /*webpackChunkName: "pageNotFound"*/ =>
      import("../views/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
