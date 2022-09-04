import axios from 'axios';
import _ from 'lodash';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import MapTest from '../MapTest/index.vue';
import Map from '../Map/index.vue';
import { BASE_COORDS } from '../../constants/map-constants';
import autoCompleteAddresses from './smallset.json';
import { useQuasar } from 'quasar';

export default {
  name: 'search-bar',
  data() {
    return {
      addressFilter: null,
      autoAddressOptions: [],
      coordList: [],
      excelData: [],
      features: [],
      geoData: {},
      hasReset: false,
      map: null,
      searchOptions: ['Address', 'Zip Code'],
      searchText: null,
      selectedFeature: [],
      selectedOption: 'Zip Code',
      url: '',
      $q: null,
    };
  },
  components: {
    Map,
    MapTest,
  },
  created() {
    this.$q = useQuasar();
  },
  mounted() {
    // make reusable used in map table and search
    axios
      .get('https://rhc-backend.herokuapp.com/rhc/api/properties/address')
      .then((response) => {
        let addList = response.data;
        let addresses = [];
        let i = 0,
          len = addList.length;
        // This is silly, but I didn't want to recreate the API
        while (i < len) {
          addresses.push(addList[i]);
          i++;
        }
        this.autoAddressOptions = addresses;
        console.log('addresses', this.autoAddressOptions);
      })
      .catch(() => {
        console.log('----ERROR----');
      });
  },
  methods: {
    ...mapActions([
      'FEATURES_BY_ADDRESS',
      'GEO_DATA_BY_CITY_STATE',
      'FEATURES_BY_ZIPCODE',
      'FEATURES_BY_CITY_AND_STATE',
      'GEO_DATA_BY_ZIPCODE',
      'GEO_DATA_BY_ADDRESS',
    ]),
    async searchAddress() {
      this.rhcValue = 0;
      this.getUrlAndSetFeatures();
      this.setSearchText('');
      this.url = `https://rhc-backend.herokuapp.com/rhc/api/properties/address-radius?address=${this.searchText}`;
      this.FEATURES_BY_ADDRESS(this.url);
      this.closeDialog();
    },
    filterFn(val, update, abort) {
      if (val.length < 4) {
        abort();
        return;
      }

      update(() => {
        const needle = val.toLocaleLowerCase();
        this.addressFilter = this.autoAddressOptions.filter(
          (v) => v.toLocaleLowerCase().indexOf(needle) > -1
        );
      });
    },
    setSearchText(val) {
      this.searchText = val;
    },
    async updateMap() {
      this.hasReset = false;
      // reset results
      this.$store.state.features = [];
      this.geoData = [];
      // fetch new results
      this.getUrlAndSetFeatures();
      switch (this.selectedOption) {
        case 'Address':
          this.geoData = await this.GEO_DATA_BY_ADDRESS(this.url);
          if (this.geoData.length > 0) {
            this.coordList = this.geoData
              .map((data, idx) => ({
                coords: data.coordinates,
                id: idx,
              }))
              .slice(0, 100)
              .reverse();
            this.$emit('coordUpdate', this.coordList);
          } else {
            this.showNotif('center');
          }
          break;
        case 'City, State':
          this.geoData = await this.GEO_DATA_BY_CITY_STATE(this.url);
          this.coordList = this.geoData.map((data, idx) => ({
            coords: data.coordinates,
            id: idx,
          }));
          this.coordList = this.coordList.splice(0, 250);
          this.$emit('coordUpdate', this.coordList);
          break;
        case 'Zip Code':
          this.geoData = await this.GEO_DATA_BY_ZIPCODE(this.url);
          if (this.geoData.length > 0) {
            this.coordList = this.geoData
              .map((data, idx) => ({
                coords: data.coordinates,
                id: idx,
              }))
              .slice(0, 100)
              .reverse();
            this.coordList = this.coordList.splice(0, 250);
            this.$emit('coordUpdate', this.coordList);
          } else {
            console.log('notify!');
            this.showNotif();
          }
          break;
        default:
          break;
      }

      // this.coordList = this.coordList.slice(0, 100);
    },
    showNotif() {
      this.$q.notify({
        message: 'No Results For Search. Try another input',
        color: 'red',
        position: 'top',
      });
    },
    getUrlAndSetFeatures() {
      if (this.searchText) {
        if (this.selectedOption == 'Address') {
          this.url = `https://rhc-backend.herokuapp.com/rhc/api/properties/address-radius?address=${this.searchText}`;
          this.FEATURES_BY_ADDRESS(this.url);
        } else if (this.selectedOption == 'Zip Code') {
          this.url = `https://rhc-backend.herokuapp.com/rhc/api/properties/zipcode?zipcode=${this.searchText}`;
          this.FEATURES_BY_ZIPCODE(this.url);
        } else {
          let city = this.searchText.split(',')[0].trim();
          let state = this.searchText.split(',')[1].trim();
          this.url = `https://rhc-backend.herokuapp.com/rhc/api/properties/city-state?city=${city}&state=${state}`;
          this.FEATURES_BY_CITY_AND_STATE(this.url);
        }
      } else {
        this.showNotif();
      }
    },
    closeDialog() {
      this.$emit('closeDialog', {
        tableData: this.tableData,
        searchType: this.selectedOption,
      });
    },
    onChange(value) {
      console.log(value);
    },
    resetMap() {
      this.coordList = [{ coords: [BASE_COORDS.LAT, BASE_COORDS.LONG], id: 0 }];
      this.hasReset = true;
      this.geoData = {};
      this.excelData = [];
    },
    toggleOptions() {
      this.searchText = null;
    },
    normalizedInputValue: function (value) {
      let normalizedInputValue = value.toString();
      if (normalizedInputValue.includes(',')) {
        normalizedInputValue = normalizedInputValue.split(',');
      }
      return normalizedInputValue;
    },
  },
};
