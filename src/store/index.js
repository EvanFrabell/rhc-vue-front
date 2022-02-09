import Vue from "vue";
import Vuex from "vuex";
import leafletMap, { CacheUpdate } from "@/modules/leaflet-map/store";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [CacheUpdate],
  modules: {
    map: leafletMap,
  },
});
