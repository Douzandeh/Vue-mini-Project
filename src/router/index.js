import { createRouter, createWebHashHistory } from "vue-router";
import HomeView   from "../views/HomeView.vue";
import About      from "../views/AboutView.vue";
import Profile    from "../views/Profile.vue";
import Login      from "../views/Login.vue";
import Logout     from "../views/Logout.vue";



const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
    {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
