import { actions } from './actions';
import { getters } from './getters';
import { MapMutations, mutations } from './mutations';
import { state } from './state';

export default {
  state,
  getters,
  actions,
  mutations,
};

/**
 * Updates timestamp of map/SET_FEATURES to prevent calling api in rapid succession
 * @param store - the root store, any dispatching has to use namespace prefix
 * @constructor
 */
export const CacheUpdate = (store) => {
  store.subscribe((mutation) => {
    console.log('UPDATING ', mutation);
    console.log('COMPARE MUTATION ', store);
    if (mutation.type === `map/${MapMutations.SET_FEATURES}`) {
      console.log('MUTATION CALLED');
      store.commit(`map/${MapMutations.SET_LAST_UPDATE}`, {
        lastUpdate: Date.now(),
      });
    }
  });
};
