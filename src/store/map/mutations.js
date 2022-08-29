import { asBoolean } from '../../utils/type-utils';
import { Sealed } from '../../utils/sealed-class';
import _ from 'lodash';

export class MapMutations {
  static SET_FEATURES = new Sealed('SET_FEATURES').value;
  static SET_LAST_UPDATE = new Sealed('SET_LAST_UPDATE').value;
  static SET_SELECTED_FEATURE = new Sealed('SET_SELECTED_FEATURE').value;
  static SET_GEO_DATA = new Sealed('SET_GEO_DATA').value;
  static SET_FILTERS = new Sealed('SET_FILTERS').value;
  static SET_ISSUBSCRIBED = new Sealed('SET_ISSUBSCRIBED').value;
}

export const mutations = {
  [MapMutations.SET_FEATURES](state, payload) {
    console.log('mutation passed ', payload);
    if (asBoolean(payload.features)) {
      state.features = _.uniqBy(
        [...state.features, ...payload.features],
        (feature) => feature.parcelId
      );
    }
  },
  [MapMutations.SET_SELECTED_FEATURE](state, feature) {
    if (asBoolean(feature)) {
      state.selectedFeature = { ...feature };
    }
  },
  [MapMutations.SET_LAST_UPDATE](state, payload) {
    console.log('PAYLOAD', payload);
    state.lastUpdate = payload.lastUpdate;
  },
  [MapMutations.SET_GEO_DATA](state, payload) {
    state.geoData = payload;
  },
  [MapMutations.SET_FILTERS](state, payload) {
    state.filters = payload;
  },
  [MapMutations.SET_ISSUBSCRIBED](state, payload) {
    state.isSubscribed = payload;
  }
};
