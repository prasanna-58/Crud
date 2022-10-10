import Vue from "vue";
import VueRouter from "vue-router";
import ListPages from "../components/ListPage"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: ListPages,
    meta: {
      auth: true,
      title: "500apps - Grow like the Fortune 500",
      icon: "",
    },
  }
]
// We set the history mode if normal or hashbang when we have index
let router = null;
router = new VueRouter({
    routes,
    mode: "history",
  });
export default router;
