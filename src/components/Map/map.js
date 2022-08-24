import axios from 'axios';
import Autocomplete from './components/Autocomplete/index.vue';
// import * as VueLeaflet from 'vue-leaflet';
// import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster';
import '../../assets/leaflet.css';
import L from 'leaflet';
import '../../assets/Tween.js';
import '../../assets/leaflet.curve.js';
import { createNamespacedHelpers } from 'vuex';
import { canvas, icon, Icon } from 'leaflet';
import blueIconUrl from '../../../src/assets/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import _filter from 'lodash/filter';
import { MapActions } from '../../store/map/actions';
import _ from 'lodash';
import { FeatureProperties } from '../../utils/type-definitions';

const { mapState, mapActions, mapGetters } = createNamespacedHelpers('map');

export default {
  name: 'map',
  props: ['searchText'],
  data() {
    let customIcon = icon(
      Object.assign({}, Icon.Default.prototype.options, {
        blueIconUrl,
        shadowUrl,
      })
    );
    return {
      searchOptions: ['City, State', 'Address', 'Zip Code'],
      selectedOption: 'City, State',
      selectedAuto: [],
      autoAddress: [],
      rhcValue: 0,
      tableDataType: FeatureProperties,
      selectedSearchOptionType: '',
      searchInputValue: '',
      icon: customIcon,
      renderer: canvas({ padding: 0.5 }),
      feature: {},
      zoom: 10,
      searchToggle: false,
      fileName: 'Real Home Compare',
      tileLayer: {
        url: 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXZhbmZyYWJlbGwiLCJhIjoiY2tqOTM1bzZoMWFnMDJycWd2eGJ4aTJ0MCJ9.r-KG-MMBYVUX3BGbvKLuLQ',
        options: {
          maxZoom: 20,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            'pk.eyJ1IjoiZXZhbmZyYWJlbGwiLCJhIjoiY2tqOTM1bzZoMWFnMDJycWd2eGJ4aTJ0MCJ9.r-KG-MMBYVUX3BGbvKLuLQ',
        },
      },
    };
  },
  components: {
    Autocomplete,
  },
  mounted() {
    axios
      .get('https://rhc-backend.herokuapp.com/rhc/api/properties/address')
      .then((response) => {
        let addList = response.data;
        let addresses = [];
        let i = 0,
          len = addList.length;
        // This is silly, but I didn't want to recreate the API
        while (i < len) {
          addresses.push({ id: i, name: addList[i] });
          i++;
        }
        this.autoAddress = addresses;
      })
      .catch(() => {
        console.log('----ERROR----');
      });

    console.log('getters', this.maxFeatures);
  },
  created() {
    this.callSelector();
  },
  methods: {
    axiosGetter(path) {
      axios
        .get(path, { headers: { 'x-rhc-projection': 'TABLE' } })
        .then((response) => {
          this.geoData = response.data;
          for (let i = 0; i < this.geoData.features.length; i++) {
            this.excelData.push(this.geoData.features[i].properties);

            if (
              this.searchText == this.geoData.features[i].properties.address
            ) {
              this.propyData.unshift(this.geoData.features[i].properties);
            } else if (this.propyData.length >= 150) {
              continue;
            } else {
              this.propyData.push(this.geoData.features[i].properties);
            }
          }

          console.log(this.geoData);
          console.log(this.propyData.length);
          console.log(this.propyData);
          console.log(this.excelData.length);
          console.log(this.excelData);

          // this.rhcFactor();
        })
        .catch(() => {
          console.log('----ERROR----');
        });
    },
    callSelector() {
      this.geoData = {};
      this.propyData = [];
      this.rhcValue = 0;

      let url = '';
      if (this.selectedOption == 'Address') {
        url = `https://rhc-backend.herokuapp.com/rhc/api/properties/address-radius?address=${this.searchText}`;
      } else if (this.selectedOption == 'Zip Code') {
        url = `https://rhc-backend.herokuapp.com/rhc/api/properties/zipcode?zipcode=${this.searchText}`;
      } else {
        url = `https://rhc-backend.herokuapp.com/rhc/api/properties/city-state?city=Cincinnati&state=OH`;
      }
      console.log(url);
      this.axiosGetter(url);
    },
    onChange(value) {
      console.log(value);
    },

    // rhcFactor() {
    //   //In future make separate db table for calculations - rhc value per address (last sale amount (if within a year) or mile radius average of all houses sold in past year)
    //   console.log('rhcFactor');
    //   console.log(this.propyData[0]);
    //   let addem = 0;
    //   let divisor = 0;
    //   for (let i = 0; i < this.propyData.length; i++) {
    //     if (this.propyData[i].rhcPsf > 0) {
    //       addem = addem + this.propyData[i].rhcPsf;
    //       divisor ++;
    //     }
    // 	}
    //   if (divisor < 1){
    //     divisor = 1;
    //   }
    //   const rawValue = parseInt((addem / divisor));
    //   this.rhcValue = rawValue;
    // },
    // Design to take map to original load state
    clearMap() {
      this.geoData = {};
      this.propyData = [];
      this.excelData = [];
      // this.rhcValue = 0;
    },
    mapReady(map) {
      console.log('MAP IS LOADED', map);
    },
    normalizedInputValue: function (value) {
      let normalizedInputValue = value.toString();
      if (normalizedInputValue.includes(',')) {
        normalizedInputValue = normalizedInputValue.split(',');
      }
      return normalizedInputValue;
    },
    getPropertyValue(feature, property) {
      return feature[property];
    },
    _filter,
    /**
     * @param {Feature} feature -> The current iterated Feature.
     * @returns {string}
     */
    addPopups(feature) {
      return (
        'Address: ' +
        feature.properties.address +
        '</br>' +
        'RHC Value: ' +
        feature.properties.appraisedValue +
        '</br>' +
        '$/SqFt: ' +
        feature.properties.pricePerSqFt +
        '</p>'
      );
    },
    /**
     * @param {string} inputValue - The value from search input.
     * @param {string} selectedSearchOptionType - The value of selected checkbox from searchOptions.
     **/
    //  Do we need above?
    //  inputType is the value in searchOptions object
    searchForProperties(inputValue, selectedSearchOptionType) {
      this.selectedSearchOptionType = selectedSearchOptionType;
      this.inputValue = inputValue;
      const inputTypeAsPascalCaseString =
        this.normalizedSelectedSearchOptionType;
      const strategy = `getFeaturesBy${inputTypeAsPascalCaseString}`;
      console.log('STRATEGY ', strategy);

      this[strategy](this.normalizedInputValue(inputValue));
    },
    /**
     *  @param {Rows} rows - The Selected Rows in table.
     * **/
    setFeatureFromTable(rows) {
      const found = this.features.find((feature) =>
        rows.some((row) => feature.properties.parcelId === row.parcelId)
      );
      this.setSelectedFeature(found);
    },
    ...mapActions({
      getFeaturesByZipCode: MapActions.FEATURES_BY_ZIPCODE,
      getFeaturesByCityState: MapActions.FEATURES_BY_CITY_AND_STATE,
      getFeaturesByAddress: MapActions.FEATURES_BY_ADDRESS,
      getFeaturesByRadius: MapActions.FEATURES_BY_RADIUS,
      setSelectedFeature: MapActions.FEATURE_SELECTED,
    }),
    parcelLink: function (value) {
      return 'https://wedge.hcauditor.org/view/re/' + value + '/2021/summary';
    },
  },
  computed: {
    ...mapGetters(['maxFeatures', 'featuresByZipCode']),
    ...mapState(['features', 'selectedFeature']),

    geoData() {
      return this.$store.state.features;
    },

    featuresWithProps: function () {
      console.log('MAP DATA ');
      return {
        ..._filter(this.truncatedData, (it) => {
          return (
            it.properties.zipCode !== null &&
            it.properties.zipCode !== '' &&
            it.properties.pricePerSqFt !== null &&
            it.properties.pricePerSqFt !== ''
          );
        }),
      };
    },
    /**
     *
     * @returns {Feature[]}
     */
    tableData: function () {
      console.log('TABLE DATA');
      return this.truncatedData.map((feature) => feature.properties);
    },
    /**
     * @returns {Feature[]}
     */
    truncatedData: function () {
      console.log('SELECTED SEARCH OPTION', this.selectedSearchOptionType);
      switch (this.selectedSearchOptionType) {
        case 'zipCode':
          console.log('INPUT VALUE ', this.inputValue);
          return _.take(this.featuresByZipCode(this.inputValue), 100);
        default:
          return this.maxFeatures(100);
      }
    },

    normalizedSelectedSearchOptionType: function () {
      return _.upperFirst(this.selectedSearchOptionType.toString());
    },
  },
};
