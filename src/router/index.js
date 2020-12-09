import { createRouter, createWebHashHistory } from "vue-router";
function load (path) {
  return () => import(`/@/views/${path}.vue`)
}
const routes = [
  {
    path: "/",
    name: "Home",
    component: load('Home')
  }, {
    path: "/Other",
    name: "Other",
    component: load('Other')
  },
  {
    path: "/Todo",
    name: "Todo",
    component: load('Todo/Index')
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
