import Vue from "vue";
import VueRouter from "vue-router";
// import { getAuth } from "firebase/auth";

Vue.use(VueRouter);

const Login = () => {
  return import(/* webpackChunkName: "users" */ "@/views/Login.vue");
};
const Register = () => {
  return import(/* webpackChunkName: "users" */ "@/views/Register.vue");
};
const Home = () => {
  return import(/* webpackChunkName: "users" */ "@/views/Home.vue");
};
const Contact = () => {
  return import(/* webpackChunkName: "users" */ "@/views/Contact.vue");
};
const Main = () => {
  return import(/* webpackChunkName: "users" */ "@/views/Main.vue");
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    meta: { requiresAuth: true },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   const isAuthenticated = getAuth().currentUser;
//   console.log("isauthenticated", isAuthenticated);
//   console.log('requiresAuth', requiresAuth);
//   if (requiresAuth && !isAuthenticated) {
//     next("/login");
//   } else {
//     next();
//   }

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     next("/login");
//   } else {
//     next("/login")
//     // User is signed out
//     // ...
//   }
// });

// });

export default router;
