import { Sealed } from '../../utils/sealed-class';
import { MapMutations } from './mutations';
import _ from 'lodash';
import axios from 'axios';
import { httpClient } from '../../utils/httpClient';

function areFeaturesStale(lastUpdate) {
  //fifteen minutes in milliseconds ->  900000;
  return Date.now() - lastUpdate > 15000;
}

function canMakeApiCall(state, predicate) {
  const result =
    state.features.length === 0 ||
    !_.find(state.features, predicate) ||
    areFeaturesStale(state.lastUpdate);

  console.log('CAN MAKE API CALL', result);
  return result;
}

export class MapActions {
  static FEATURES_BY_ADDRESS = new Sealed('FEATURES_BY_ADDRESS').value;
  static FEATURES_BY_CITY_AND_STATE = new Sealed('FEATURES_BY_CITY_AND_STATE')
    .value;
  static FEATURES_BY_ZIPCODE = new Sealed('FEATURES_BY_ZIPCODE').value;
  static FEATURE_SELECTED = new Sealed('FEATURE_SELECTED').value;
  static GEO_DATA_BY_ZIPCODE = new Sealed('GEO_DATA_BY_ZIPCODE').value;
  static GEO_DATA_BY_ADDRESS = new Sealed('GEO_DATA_BY_ADDRESS').value;
  static GEO_DATA_BY_CITY_STATE = new Sealed('GEO_DATA_BY_CITY_STATE').value;
}

export const actions = {
  async [MapActions.GEO_DATA_BY_ZIPCODE]({ commit, state }, zipcodeUrl) {
    console.log('CALLING GEODATA ZIPCODE ACTION', state);

    return new Promise(async (resolve, reject) => {
      await axios
        .get(zipcodeUrl, { headers: { 'x-rhc-projection': 'MAP' } })
        .then((response) => {
          console.log('from geo_data_by_zipcode action', response.data);
          commit(
            MapMutations.SET_GEO_DATA,
            response.data.features.map((f) => f.geometry)
          );
          resolve(response.data.features.map((f) => f.geometry));
        });
    });
  },
  async [MapActions.GEO_DATA_BY_ADDRESS]({ commit, state }, url) {
    console.log('CALLING GEODATA ADDRESS ACTION', state);
    return new Promise(async (resolve, reject) => {
      await axios
        .get(url, { headers: { 'x-rhc-projection': 'MAP' } })
        .then((response) => {
          console.log('from geo_data_by_address action', response.data);
          commit(
            MapMutations.SET_GEO_DATA,
            response.data.features.map((f) => f.geometry)
          );
          resolve(response.data.features.map((f) => f.geometry));
        });
    });
  },
  async [MapActions.GEO_DATA_BY_CITY_STATE]({ commit, state }, url) {
    console.log('CALLING GEODATA CITY STATE ACTION', state);
    return new Promise(async (resolve, reject) => {
      await axios
        .get(url, { headers: { 'x-rhc-projection': 'MAP' } })
        .then((response) => {
          console.log('from geo_data_by_city_state action', response.data);
          commit(
            MapMutations.SET_GEO_DATA,
            response.data.features.map((f) => f.geometry)
          );
          resolve(response.data.features.map((f) => f.geometry));
        });
    });
  },
  async [MapActions.FEATURES_BY_ZIPCODE]({ commit, state }, zipcodeUrl) {
    console.log('CALLING ZIPCODE ACTION', state);
    return new Promise(async (resolve, reject) => {
      await axios
        .get(zipcodeUrl, { headers: { 'x-rhc-projection': 'TABLE' } })
        .then((response) => {
          console.log('from action', response.data);
          commit(MapMutations.SET_FEATURES, {
            features: response.data.features.map((f) => f.properties),
          });
          resolve(response.data.features.map((f) => f.properties));
        });
    });
  },
  async [MapActions.FEATURES_BY_ADDRESS]({ commit }, addressUrl) {
    return new Promise(async (resolve, reject) => {
      await axios
        .get(addressUrl, { headers: { 'x-rhc-projection': 'TABLE' } })
        .then((response) => {
          console.log('from features_by_address action', response.data);
          commit(MapMutations.SET_FEATURES, {
            features: response.data.features.map((f) => f.properties),
          });
          resolve(response.data.features.map((f) => f.properties));
        });
    });
  },
  async [MapActions.FEATURES_BY_CITY_AND_STATE]({ commit }, cityStateUrl) {
    return new Promise(async (resolve, reject) => {
      await axios
        .get(cityStateUrl, { headers: { 'x-rhc-projection': 'TABLE' } })
        .then((response) => {
          console.log('from action', response.data);
          commit(MapMutations.SET_FEATURES, {
            features: response.data.features.map((f) => f.properties),
          });
          resolve(response.data.features.map((f) => f.properties));
        });
    });
  },
  [MapActions.FEATURE_SELECTED]({ commit }, feature) {
    commit(MapMutations.SET_SELECTED_FEATURE, feature);
  },
};
