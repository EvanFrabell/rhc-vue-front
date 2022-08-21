import _ from 'lodash';

export const getters = {
  maxFeatures: (state) => (maxFeaturesAllowed) => {
    console.log('Getting state MAX ALLOWED');
    return _.take([...state.features], maxFeaturesAllowed);
  },
  featuresByZipCode: (state) => (zipCode) => {
    const zipCodeAsString = parseInt(zipCode, 10);
    const result = state.features.filter((feature) => {
      return feature.properties.zipCode === zipCodeAsString;
    });
    console.log('RESULT IN FEATURE BY ZIPCODE GETTER', result);
    return result;
  },
  getFeatures: (state) => state.features,
  getFilters: (state) => state.filters,
};
