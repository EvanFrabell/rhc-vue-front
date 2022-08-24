import { createStore } from 'vuex';
import { actions } from './map/actions';
import { getters } from './map/getters';
import { mutations } from './map/mutations';
import { state } from './map/state';

export default createStore({
  state,
  getters,
  actions,
  mutations,
});
