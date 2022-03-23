import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import { initializeApp } from "firebase/app";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { Icon } from "leaflet";
import "@/assets/global.css";
import VueExcelXlsx from "vue-excel-xlsx";
import VueAnalytics from 'vue-analytics';



Vue.config.productionTip = false;

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const firebaseApp = initializeApp({
  apiKey: "AIzaSyB9JJr6j9nNq04HqYfrdA7kKCXkWSdLNZk",
  authDomain: "real-home-authentication-5f627.firebaseapp.com",
  projectId: "real-home-authentication-5f627",
  storageBucket: "real-home-authentication-5f627.appspot.com",
  messagingSenderId: "319424790358",
  appId: "1:319424790358:web:b9c750c5c76724850ae0f7",
  measurementId: "G-KL5GJFX30H",
});

Vue.use(VueExcelXlsx);

Vue.use(VueAnalytics, {
  id: 'G-KL5GJFX30H',
  router
});

new Vue({
  router,
  store,
  axios,
  firebaseApp,
  render: (h) => h(App),
}).$mount("#app");

// For Vue 3:
// createApp(App).use(store).use(router).mount('#app')

// const app = createApp(App);
// app.use(firebaseApp);
// app.use(axios);
// app.use(store);
// app.use(router);
// app.mount("#app");

// import { createApp } from "vue";
// import Vue from 'vue';
// import App from "./App.vue";
// import router from "./router";
// import store from "./store";
// import  { axios }  from "axios";
// import  { initializeApp }  from "firebase/app";
// import 'leaflet/dist/leaflet.css';

// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyB9JJr6j9nNq04HqYfrdA7kKCXkWSdLNZk",
//   authDomain: "real-home-authentication-5f627.firebaseapp.com",
//   projectId: "real-home-authentication-5f627",
//   storageBucket: "real-home-authentication-5f627.appspot.com",
//   messagingSenderId: "319424790358",
//   appId: "1:319424790358:web:b9c750c5c76724850ae0f7",
//   measurementId: "G-KL5GJFX30H",
// });
