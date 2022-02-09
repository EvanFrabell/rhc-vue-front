import { Sealed } from "@/utils/sealed-class";
import { MapMutations } from "@/modules/leaflet-map/store/mutations";
import _ from "lodash";
import { httpClient } from "@/utils/httpClient";

function areFeaturesStale(lastUpdate) {
  //fifteen minutes in milliseconds ->  900000;
  return Date.now() - lastUpdate > 15000;
}

function canMakeApiCall(state, predicate) {
  const result =
    state.features.length === 0 ||
    !_.find(state.features, predicate) ||
    areFeaturesStale(state.lastUpdate);

  console.log("CAN MAKE API CALL", result);
  return result;
}

export class MapActions {
  static FEATURES_BY_ADDRESS = new Sealed("FEATURES_BY_ADDRESS").value;
  static FEATURES_BY_CITY_AND_STATE = new Sealed("FEATURES_BY_CITY_AND_STATE")
    .value;
  static FEATURES_BY_ZIPCODE = new Sealed("FEATURES_BY_ZIPCODE").value;
  static FEATURE_SELECTED = new Sealed("FEATURE_SELECTED").value;
}

export const actions = {
  async [MapActions.FEATURES_BY_ZIPCODE]({ commit, state }, zipcode) {
    console.log("CALLING ZIPCODE ACTION", state);
    if (
      canMakeApiCall(
        state,
        (feature) => feature.properties.zipCode === parseInt(zipcode, 10)
      )
    ) {
      await httpClient
        .get(`properties/zipcode`, {
          params: {
            zipcode,
          },
        })
        .then((response) => {
          commit(MapMutations.SET_FEATURES, {
            features: response.data.features,
          });
        });
    }
  },
  async [MapActions.FEATURES_BY_ADDRESS]({ commit }, address) {
    await httpClient
      .get(`properties/address`, {
        params: { address },
      })
      .then((response) => {
        commit(MapMutations.SET_FEATURES, response.data.features);
      });
  },
  async [MapActions.FEATURES_BY_CITY_AND_STATE]({ commit }, cityState) {
    const [city, state] = cityState;
    await httpClient
      .get(`properties/city-state`, {
        params: {
          city: _.trim(city),
          state: _.trim(state),
        },
      })
      .then((response) => {
        commit(MapMutations.SET_FEATURES, response.data.features);
      });
  },
  [MapActions.FEATURE_SELECTED]({ commit }, feature) {
    commit(MapMutations.SET_SELECTED_FEATURE, feature);
  },
};
