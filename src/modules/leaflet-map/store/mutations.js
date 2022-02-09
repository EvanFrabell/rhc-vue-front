import {asBoolean} from "@/utils/type-utils";
import {Sealed} from "@/utils/sealed-class";
import _ from "lodash";

export class MapMutations {
    static SET_FEATURES = new Sealed("SET_FEATURES").value;
    static SET_LAST_UPDATE = new Sealed("SET_LAST_UPDATE").value;
    static SET_SELECTED_FEATURE = new Sealed("SET_SELECTED_FEATURE").value;
}

export const mutations = {
    [MapMutations.SET_FEATURES](state, payload) {
        if (asBoolean(payload.features)) {
            state.features = _.uniqBy(
                [...state.features, ...payload.features],
                (feature) => feature.properties.parcelId
            );
        }
    },
    [MapMutations.SET_SELECTED_FEATURE](state, feature) {
        if (asBoolean(feature)) {
            state.selectedFeature = {...feature};
        }
    },
    [MapMutations.SET_LAST_UPDATE](state, payload) {
        console.log("PAYLOAD", payload);
        state.lastUpdate = payload.lastUpdate;
    },
};
