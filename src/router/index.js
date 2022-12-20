import { createRouter, createWebHashHistory } from "vue-router";
import store      from "../store";
import HomeView   from "../views/HomeView.vue";
import About      from "../views/AboutView.vue";
import Profile    from "../views/Profile.vue";
import Login      from "../views/Login.vue";
import Register   from "../views/Register.vue";
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
    meta: { loginRequired: true }
  },
    {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { loginRedirect: true }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { loginRedirect: true }
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
    meta: { loginRequired: true }
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to , form , next) =>{
  if (to.matched.some(record => record.meta.loginRequired)){
    if (store.state.isAuthenticated){
      next()
    } else{
      next("/login")
    }
  } else if (to.matched.some(record => record.meta.loginRedirect)) {
    if (!store.state.isAuthenticated){
      next()
    } else{
      next("/profile")
    }
  }else{
    next()
  }
})
export default router;