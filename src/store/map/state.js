export const state = () => ({
  features: [],
  filters: {
    dateRange: {
      from: '2000/01/01',
      to: '2022/07/30',
    },
    finishedSquareFtRange: {
      min: 0,
      max: 9500,
    },
    squareFtRange: {
      min: 0,
      max: 500,
    },
    lastPriceRange: {
      min: 20000,
      max: 1000000,
    },
    numOfBathrooms: 1,
    numOfBeds: 1,
  },
  bounds: {},
  selectedFeature: {},
  lastUpdate: {},
  geoData: [],
  isSubscribed: false,
});
