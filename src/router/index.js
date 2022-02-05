import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Projects from "../views/Projects.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }, {
    path: "/About",
    name: "About",
    component: About,
  }, {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  }, {
    path: "/Projects",
    name: "Projects",
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
