import { createRouter, createWebHistory } from 'vue-router';

const Login = () => {
  return import(/* webpackChunkName: "users" */ '../views/Login/index.vue');
};
const Register = () => {
  return import(/* webpackChunkName: "users" */ '../views/Register/index.vue');
};
const Home = () => {
  return import(/* webpackChunkName: "users" */ '../views/Home/index.vue');
};
const Contact = () => {
  return import(/* webpackChunkName: "users" */ '../views/Contact/index.vue');
};
const DashBoard = () => {
  return import(/* webpackChunkName: "users" */ '../views/Dashboard/index.vue');
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashBoard,
    meta: { requiresAuth: true },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

// const BASE_URL = import.meta.env.BASE_URL;
const router = new createRouter({
  // history: createWebHistory(BASE_URL),
  history: createWebHistory(),
  routes,
});

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
