<template>
  <b-container fluid>
		<b-row class='search-row'>
      <div class="container search-block">
            <div class="form-row justify-content-center align-items-center">
              <div class="col-sm-2 col-xs-3">
                <select v-model="selectedOption" @change="toggleOptions" class="form-control mb-2">
                  <option v-for="sOption in searchOptions" :key="sOption" >{{ sOption }}</option>
                </select>
              </div>
              <div class="col-sm-6 col-xs-5">
								<div v-if="selectedOption === 'Address'">
										<Autocomplete :items="autoAddress"
											filterby="name"
											@change="onChange"
											@selected="addressSelected"
                      @keypress.enter="addressSelected"/>
									</div>
									<div v-else-if="selectedOption === 'Zip Code'">
										<input type="text" class="form-control mb-2" v-model="searchText" placeholder="By Zip Code" @keypress.enter="callSelector">
									</div>
									<div v-else-if="selectedOption === 'City, State'">
										<input type="text" class="form-control mb-2" v-model="searchText" placeholder="By City, State" @keypress.enter="callSelector">
									</div>
              </div>
              <div class="col-auto">
                <button type="button" class="btn btn-primary mb-2" @click="callSelector">Search</button>
              </div>  
              <div class="col-auto">
                <button type="button" class="btn btn-primary mb-2" @click="clearMap" style="background-color: black;">Reset Map</button>
              </div>  
            </div>
      </div>
       <!-- <div class="justify-content-right align-items-right">
          <div class="rhc-box">
            <h4 id="rhc-banner">RHC VALUE</h4>
            <h3 id="banner-num">{{rhcValue}}</h3>
            <h4 id="value-banner">{{selectedOption}}</h4>
          </div>	
      </div> -->
		</b-row>

		<b-row class="map-row">
      <b-col>
        <div align-v="center"  id="property-map">
          <l-map
            :options="{ preferCanvas: true, boxZoom: true }"
            :center="[39.2, -84.56]"
            style="height: 70vh"
            :zoom="zoom"
            :rendererer="renderer"
            @ready="mapReady"
          >
            <l-tile-layer :url="tileLayer.url" :options="tileLayer.options">
            </l-tile-layer>
            <template v-if="geoData.length <= 100">
              <l-marker
                v-for="feature in geoData"
                :key="feature.properties.parcelId"
                :lat-lng="feature.geometry.coordinates"
                @click="setSelectedFeature(feature)"
              >
                <!--                <l-icon icon-url="assets/blue-icon.png"></l-icon>-->
                <l-tooltip :content="addPopups(feature)"></l-tooltip>
              </l-marker>
            </template>
            <template v-else-if="geoData.length > 100">
              <v-marker-cluster>
                <v-marker
                  v-for="feature in geoData"
                  :key="feature.properties.id"
                  :lat-lng="feature.geometry.coordinates"
                  :icon="icon"
                  @click="setSelectedFeature(feature)"
                >
                  <!--                  <l-icon icon-url="assets/blue-icon.png"></l-icon>-->
                  <v-tooltip :content="addPopups(feature)"></v-tooltip>
                </v-marker>
              </v-marker-cluster>
            </template>
          </l-map>
        </div>
      </b-col>
    </b-row>
	
		<b-row>
      <b-col>
        <div class="table-margin">
          <vue-excel-xlsx class="alert alert-success" id="export-excel"
            :data="propyData"
            :columns="columns"
            :filename="searchText"
            :file-type="'xlsx'"
            :sheetname="'Real Home Compare'"
            >
            Export to Excel
          </vue-excel-xlsx>
            <table ref="exportable_table" class="table table-dark" id="sortTable">
              <thead>
                <tr id="tr-head">
                  <th class="align-middle" style="cursor:pointer" id="nameClick">
                    <b-button class="btn btn-dark font-weight-bold" @click="sortTable(0)">Address</b-button>
                  </th>
                  <th class="align-middle"> 
                    <b-button class="btn btn-dark font-weight-bold" @click="sortTable(1)">Finished sqft</b-button>
                  </th>
                  <th class="align-middle">
                    <b-button class="btn btn-dark font-weight-bold" @click="sortTable(2)" v-b-popover.hover.top="'Real Home Compare Price per Sq.Ft.'" title="Real Home Compare PsF">RHC-PsF</b-button>
                  </th>
                  <th class="align-middle">
                    <b-button class="btn btn-dark font-weight-bold" @click="sortTable(3)" v-b-popover.hover.top="'Last Sale Price per Sq.Ft.'" title="Last Sale PsF">LS-PsF</b-button>
                  </th>
                  <th class="align-middle">
                    <b-button class="btn btn-dark font-weight-bold" @click="sortTable(4)">Last Sale Amount</b-button></th>
                  <th class="align-middle">
                    <b-button class="btn btn-dark font-weight-bold" @click="sortTable(5)">Last Sale Date</b-button></th>
                  <th class="align-middle">
                    <b-button class="btn btn-dark font-weight-bold" @click="sortTable(6)" v-b-popover.hover.top="'Appraisal Price per Sq.Ft.'" title="Appraisal PsF">A-PsF</b-button>
                  </th>
                  <th class="align-middle">
                    <b-button class="btn btn-dark font-weight-bold" @click="sortTable(7)">Appraisal Sale Amount</b-button>
                  </th>
                  <th class="align-middle">
                    <b-button class="btn btn-dark font-weight-bold" @click="sortTable(8)">Last Appraisal Date</b-button>
                  </th>
                  <th class="align-middle">
                    <b-button class="btn btn-dark font-weight-bold" @click="sortTable(9)">Zip Code</b-button>
                  </th>
                  <th class="align-middle" style="display:none;">
                    <b-button class="btn btn-dark font-weight-bold" @click="sortTable(10)">Year Built</b-button>
                  </th>
                  <th class="align-middle">
                    <b-button class="btn btn-dark font-weight-bold" @click="sortTable(11)">Total Rooms</b-button>
                  </th>
                  <th class="align-middle" style="display:none;">Bedrooms</th>
                  <th class="align-middle">
                    <b-button class="btn btn-dark font-weight-bold" @click="sortTable(12)">Baths</b-button>
                  </th>
                  <th class="align-middle">
                    <b-button class="btn btn-dark font-weight-bold" @click="sortTable(13)">Auditor Link</b-button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr :class="highLighter(`${propy.address}`)" id="tr-body" v-for="propy in propyData" :key="propy.id">
                  <td class="">{{propy.address}}</td>
                  <td class="text-center">{{propy.finishedSqFt}}</td>
                  <td class="text-center">{{propy.rhcPsf}}</td>
                  <td class="text-center">{{propy.lastSalePsf}}</td>
                  <td class="text-center">{{propy.lastSaleAmount}}</td>
                  <td class="text-center">{{propy.lastSaleDate}}</td>
                  <td class="text-center">{{propy.appraisalPsf}}</td>
                  <td class="text-center">{{propy.appraisalSale}}</td>
                  <td class="text-center">{{propy.appraisalDate}}</td>
                  <td class="text-center">{{propy.zipCode}}</td>
                  <td class="text-center" style="display:none;">{{propy.yearBuilt}}</td>
                  <td class="text-center">{{propy.totalRooms}}</td>
                  <td class="text-center" style="display:none;">{{propy.bedrooms}}</td>
                  <td class="text-center">{{propy.fullBath}}</td>
                  <td class="text-center"><a v-bind:href="'https://wedge.hcauditor.org/view/re/' + propy.parcelId + '/2020/summary'" target="_blank">{{propy.parcelId}}</a></td>
                </tr>
              </tbody>
            </table>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios';
import Autocomplete from '@/components/Autocomplete';
import * as Vue2Leaflet from "vue2-leaflet";
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";
// import MapSearch from "@/modules/leaflet-map/components/MapSearch";
import { createNamespacedHelpers } from "vuex";
import { canvas, icon, Icon } from "leaflet";
import blueIconUrl from "@/assets/blue-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import _filter from "lodash/filter";
// import MapSelectedObjectDetails from "@/modules/leaflet-map/components/MapSelectedObjectDetails";
import { MapActions } from "@/modules/leaflet-map/store/actions";
import _ from "lodash";
import { FeatureProperties } from "@/utils/type-definitions";

const { mapState, mapActions, mapGetters } = createNamespacedHelpers("map");

export default {
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
      searchText: null,
			selectedAuto: [],
      autoAddress: [],
      rhcValue: 0,
			geoData: {},
			propyData: [],
			tableDataType: FeatureProperties,
      selectedSearchOptionType: "",
      searchInputValue: "",
      icon: customIcon,
      renderer: canvas({ padding: 0.5 }),
      feature: {},
      zoom: 10,
      searchToggle: false,
      fileName: 'Real Home Compare',
      columns: [
                  {label: "Address", field: "address",},
                  {label: "Finished SqFt", field: "finishedSqFt",},
                  {label: "RHC Price per SqFt", field: "rhcPsf",},
                  {label: "Last Sale Price per SqFt", field: "lastSalePsf",},
                  {label: "Last Sale Amount", field: "lastSaleAmount",},
                  {label: "Last Sale Date", field: "lastSaleDate",},
                  {label: "Appraisal Price per SqFt", field: "appraisalPsf",},
                  {label: "Appraisal Sale Amount", field: "appraisalSale",},
                  {label: "Last Appraisal Date", field: "appraisalDate",},
                  {label: "Zip Code", field: "zipCode",},
                  {label: "Total Rooms", field: "totalRooms",},
                  {label: "Baths", field: "fullBath",},
                  {label: "Auditor Link", field: "parcelId",},
      ],
      tileLayer: {
        url: "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXZhbmZyYWJlbGwiLCJhIjoiY2tqOTM1bzZoMWFnMDJycWd2eGJ4aTJ0MCJ9.r-KG-MMBYVUX3BGbvKLuLQ",
        options: {
          maxZoom: 20,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "pk.eyJ1IjoiZXZhbmZyYWJlbGwiLCJhIjoiY2tqOTM1bzZoMWFnMDJycWd2eGJ4aTJ0MCJ9.r-KG-MMBYVUX3BGbvKLuLQ",
        },
      },
    }
  },
	components: {
    Autocomplete,
		// MapSelectedObjectDetails,
    // MapSearch,
    LMap: Vue2Leaflet.LMap,
    LTileLayer: Vue2Leaflet.LTileLayer,
    LMarker: Vue2Leaflet.LMarker,
    LTooltip: Vue2Leaflet.LTooltip,
    "v-marker-cluster": Vue2LeafletMarkerCluster,
    // "v-popup": Vue2Leaflet.LPopup,
    "v-tooltip": Vue2Leaflet.LTooltip,
    "v-marker": Vue2Leaflet.LMarker,
  },
	mounted() {
		axios.get('https://rhc-backend.herokuapp.com/rhc/api/properties/address').then(response => {  
			let addList = response.data;
			let addresses = [];
			let i = 0, len = addList.length;
			// This is silly, but I didn't want to recreate the API
			while (i < len) {
				addresses.push({id: i, name: addList[i]});
				i++;
			}
			this.autoAddress = addresses;
					
		}).catch(() =>{
			console.log('----ERROR----');
		});
	},

  methods: {
    addressSelected(addrss) {
			console.log(`Address Selected:\nid: ${addrss.id}\nname: ${addrss.name}`);
			this.searchText = addrss.name;
      this.callSelector();
    },
    onChange(value) {
      console.log(value)
    },
		toggleOptions() {
      this.searchText = null;
    },
		callSelector() {
      this.geoData = {};
      this.propyData = [];
      this.rhcValue = 0;

			let url = '';
			if (this.selectedOption == 'Address') {
				url = `https://rhc-backend.herokuapp.com/rhc/api/properties/address-radius?address=${this.searchText}`;
			} else if (this.selectedOption == 'Zip Code') {
				url = `https://rhc-backend.herokuapp.com/rhc/api/properties/zipcode?zipcode=${this.searchText}`
			} else {
				url = `https://rhc-backend.herokuapp.com/rhc/api/properties/city-state?city=Cincinnati&state=OH`;
			}
			console.log(url);
			this.axiosGetter(url);
      
		},
		axiosGetter(path) {
			axios.get(path).then(response => {  
				this.geoData = response.data;
				for (let i = 0; i < this.geoData.features.length; i++) {
					if (this.searchText == this.geoData.features[i].properties.address) {
						this.propyData.unshift(this.geoData.features[i].properties);
					} else if (this.propyData.length > 350) {
            break;
          } else {
						this.propyData.push(this.geoData.features[i].properties);
					}
				}
        console.log(this.propyData.length)
        console.log(this.geoData)
        console.log(this.propyData)
        
        // this.rhcFactor();

			}).catch(() =>{
				console.log('----ERROR----');
			});
		},
		highLighter(address) {
			if(this.searchText == address) {
				return 'featured-row';
			}
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
      // this.rhcValue = 0;
    },
		mapReady(map) {
      console.log("MAP IS LOADED", map);
    },
    normalizedInputValue: function (value) {
      let normalizedInputValue = value.toString();
      if (normalizedInputValue.includes(",")) {
        normalizedInputValue = normalizedInputValue.split(",");
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
        "Address: " +
        feature.properties.address +
        "</br>" +
        "RHC Value: " +
        feature.properties.appraisedValue +
        "</br>" +
        "$/SqFt: " +
        feature.properties.pricePerSqFt +
        "</p>"
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
      console.log("STRATEGY ", strategy);

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
    sortBy: function(sortKey) {
      this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;

      this.sortKey = sortKey;
    },
     sortTable: function (n) {
      var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
      table = document.getElementById("sortTable");
      switching = true;
      // Set the sorting direction to ascending:
      dir = "asc";
      /* Make a loop that will continue until
      no switching has been done: */
      while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
          // Start by saying there should be no switching:
          shouldSwitch = false;
          /* Get the two elements you want to compare,
          one from current row and one from the next: */
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];
          /* Check if the two rows should switch place,
          based on the direction, asc or desc: */
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              // If so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              // If so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          /* If a switch has been marked, make the switch
          and mark that a switch has been done: */
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          // Each time a switch is done, increase this count by 1:
          switchcount ++;
        } else {
          /* If no switching has been done AND the direction is "asc",
          set the direction to "desc" and run the while loop again. */
          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
      }
    },
	},
  computed: {
		...mapGetters(["maxFeatures", "featuresByZipCode"]),
    ...mapState(["features", "selectedFeature"]),
    featuresWithProps: function () {
      console.log("MAP DATA ");
      return {
        ..._filter(this.truncatedData, (it) => {
          return (
            it.properties.zipCode !== null &&
            it.properties.zipCode !== "" &&
            it.properties.pricePerSqFt !== null &&
            it.properties.pricePerSqFt !== ""
          );
        }),
      };
    },
    /**
     *
     * @returns {Feature[]}
     */
    tableData: function () {
      console.log("TABLE DATA");
      return this.truncatedData.map((feature) => feature.properties);
    },
    /**
     * @returns {Feature[]}
     */
    truncatedData: function () {
      console.log("SELECTED SEARCH OPTION", this.selectedSearchOptionType);
      switch (this.selectedSearchOptionType) {
        case "zipCode":
          console.log("INPUT VALUE ", this.inputValue);
          return _.take(this.featuresByZipCode(this.inputValue), 100);
        default:
          return this.maxFeatures(100);
      }
    },

    normalizedSelectedSearchOptionType: function () {
      return _.upperFirst(this.selectedSearchOptionType.toString());
    },
  },
}
</script>


<style>
  .search-row {
    margin: 0px 2%;
  }
  .search-block {
    margin-top: 40px;
  }
  .reload-box {
    margin-top: 40px;
  }
	input {
    height: 40px;
    border-radius: 3px;
    border: 2px solid lightgray;
    box-shadow: 0 0 10px #eceaea;
    font-size: 25px;
    padding-left: 10px;
    padding-top: 10px;
    cursor: text;
	}
  .rhc-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    column-gap: 0px;
    box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px;
    color: rgb(255, 255, 255);
    text-shadow: 1px 1px 2px black;
    background: rgb(255, 0, 191);
    opacity: 75%;
    border-radius: 25px;
    padding: 6px 16px 0px 16px;
    margin-bottom: 15px; 
  }
  h4 {
    font-weight: bold;
    font-family: "Copperplate";
    font-size: 15px;
  }
  #rhc-banner {
    font-size: 17px;
    margin-bottom: 0px;

  }
  #banner-num {
    margin-bottom: 0px;
    /* font-weight: bold; */
  }
   .map-row {
    margin: 0px 1%;
  }
	.featured-row {
		color: rgb(85, 63, 85);
		background-color: #52f113;
	}
  #export-excel {
    margin-bottom: 4px;
    margin-top: 15px;
  }
</style>
