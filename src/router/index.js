import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { useErrors } from "../stores/errors";
import { Notify } from "quasar";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

// export default route(function (/* { store, ssrContext } */) {
const createHistory = process.env.SERVER
  ? createMemoryHistory
  : process.env.VUE_ROUTER_MODE === "history"
  ? createWebHistory
  : createWebHashHistory;

const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,

  // Leave this as is and make changes in quasar.conf.js instead!
  // quasar.conf.js -> build -> vueRouterMode
  // quasar.conf.js -> build -> publicPath
  history: createHistory(process.env.VUE_ROUTER_BASE),
});

Router.beforeEach(async (to, from) => {
  const errors = useErrors();
  // to reset error every route change
  errors.resetErrors();

  const isLoggedIn = !!localStorage.getItem("token");
  if (isLoggedIn) {
    if (to.name === "login") {
      Notify.create({
        type: "negative",
        message: "Sudah login",
      });
      return { path: "/" };
    }
  } else {
    if (!to.meta.isPublic) {
      Notify.create({
        type: "negative",
        message: "Perlu login",
      });
      return { name: "login" };
    }
  }
});

export default Router;
