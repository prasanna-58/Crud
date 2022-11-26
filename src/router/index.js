import Vue from "vue";
import VueRouter from "vue-router";
import ListPages from "../components/ListPage";
import CRUDTable from "../components/CRUDTable";
import Slots from "../components/Slots";
import ButtonSlots from "../components/ButtonSlots";
import Practicse from "../components/Practicse";
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
  },
  {
    path: "/crud",
    name: "Table",
    component: CRUDTable,
    meta: {
      auth: true,
      title: "500apps - Grow like the Fortune 500",
      icon: "",
    },
  },
  {
    path: "/buttonslots",
    name: "ButtonSlots",
    component: ButtonSlots,
    meta: {
      auth: true,
      title: "500apps - Grow like the Fortune 500",
      icon: "",
    },
  },
  {
    path: "/slots",
    name: "Slots",
    component: Slots,
    meta: {
      auth: true,
      title: "500apps - Grow like the Fortune 500",
      icon: "",
    },
  },
  {
    path: "/test",
    name: "Practicse",
    component: Practicse,
    meta: {
      auth: true,
      title: "500apps - Grow like the Fortune 500",
      icon: "",
    },
  },
];
// We set the history mode if normal or hashbang when we have index
let router = null;
router = new VueRouter({
  routes,
  mode: "history",
});
export default router;
