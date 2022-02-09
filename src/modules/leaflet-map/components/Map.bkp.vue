<template>
  <b-container fluid>
    <b-row class="search-row">
      <b-col>
        <map-search
          :options="searchOptions"
          @execute-search="searchForProperties"
        ></map-search>
        <map-selected-object-details
          :display="selectedFeature.properties"
        ></map-selected-object-details>
      </b-col>
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
            <template v-if="features.length <= 100">
              <l-marker
                v-for="feature in featuresWithProps"
                :key="feature.properties.parcelId"
                :lat-lng="feature.geometry.coordinates"
                @click="setSelectedFeature(feature)"
              >
                <!--                <l-icon icon-url="assets/blue-icon.png"></l-icon>-->
                <l-tooltip :content="addPopups(feature)"></l-tooltip>
              </l-marker>
            </template>
            <template v-else-if="features.length > 100">
              <v-marker-cluster>
                <v-marker
                  v-for="feature in featuresWithProps"
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
          <b-button class="alert alert-success" id="export-excel" @click="ExportExcel('xlsx')" v-b-popover.hover.top="'Export to Excel to see more data!'" title="Export to Excel">Export to Excel</b-button>
            <table class="table table-dark" ref="rhc-table">
              <thead>
                <tr id="tr-head">
                  <th class="align-middle">Address</th>
                  <th class="align-middle">Finished sqft</th>
                  <th class="align-middle">
                    <b-button class="btn btn-dark font-weight-bold" v-b-popover.hover.top="'Real Home Compare Price per Sq.Ft.'" title="RHC Price per Sq.Ft.">RHC-PsF</b-button>
                  </th>
                  <th class="align-middle">
                    <b-button class="btn btn-dark font-weight-bold" v-b-popover.hover.top="'Last Sale Price per Sq.Ft.'" title="Last Sale PsF">LS-PsF</b-button>
                  </th>
                  <th class="align-middle">Last Sale Amount</th>
                  <th class="align-middle">Last Sale Date</th>
                  <th class="align-middle">
                    <b-button class="btn btn-dark font-weight-bold" v-b-popover.hover.top="'Appraisal Price per Sq.Ft.'" title="Appraisal PsF">A-PsF</b-button>
                  </th>
                  <th class="align-middle">Appraisal Sale Amount</th>
                  <th class="align-middle">Last Appraisal Date</th>
                  <th class="align-middle">Zip Code</th>
                  <th class="align-middle" style="display:none;">Year Built</th>
                  <th class="align-middle">Total Rooms</th>
                  <th class="align-middle" style="display:none;">Bedrooms</th>
                  <th class="align-middle">Baths</th>
                  <th class="align-middle">Auditor Link</th>
                </tr>
              </thead>
              <tbody>
                <tr id="tr-body">
                  <td class="text-center">3782 SAINT JOHNS TER</td>
                  <td class="text-center">1,264</td>
                  <td class="text-center">$41.25</td>
                  <td class="text-center">$42.25</td>
                  <td class="text-center">$215,000</td>
                  <td class="text-center">6/2/2020</td>
                  <td class="text-center">$52.15</td>
                  <td class="text-center">$185,070</td>
                  <td class="text-center">8/22/2020</td>
                  <td class="text-center">45236</td>
                  <td class="text-center" style="display:none;">1942</td>
                  <td class="text-center">6</td>
                  <td class="text-center" style="display:none;">3</td>
                  <td class="text-center">2</td>
                  <td class="text-center"><a href="https://wedge.hcauditor.org/view/re/6090013026700/2020/summary">6090013026700</a></td>
                </tr>
              </tbody>
            </table>
          <!-- <rhc-table
            :items="tableData"
            :type="tableDataType"
            @row-selected="setFeatureFromTable"
          ></rhc-table> -->
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import * as Vue2Leaflet from "vue2-leaflet";
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";
import MapSearch from "@/modules/leaflet-map/components/MapSearch";
import { createNamespacedHelpers } from "vuex";
import { canvas, icon, Icon } from "leaflet";
import blueIconUrl from "@/assets/blue-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import _filter from "lodash/filter";
// import RhcTable from "@/components/AppTable";
import MapSelectedObjectDetails from "@/modules/leaflet-map/components/MapSelectedObjectDetails";
import { MapActions } from "@/modules/leaflet-map/store/actions";
import _ from "lodash";
import { FeatureProperties } from "@/utils/type-definitions";

const { mapState, mapActions, mapGetters } = createNamespacedHelpers("map");

export default {
  name: "rhc-map",
  components: {
    // RhcTable,
    MapSelectedObjectDetails,
    MapSearch,
    LMap: Vue2Leaflet.LMap,
    LTileLayer: Vue2Leaflet.LTileLayer,
    LMarker: Vue2Leaflet.LMarker,
    LTooltip: Vue2Leaflet.LTooltip,
    "v-marker-cluster": Vue2LeafletMarkerCluster,
    // "v-popup": Vue2Leaflet.LPopup,
    "v-tooltip": Vue2Leaflet.LTooltip,
    "v-marker": Vue2Leaflet.LMarker,
  },
  data() {
    let customIcon = icon(
      Object.assign({}, Icon.Default.prototype.options, {
        blueIconUrl,
        shadowUrl,
      })
    );
    return {
      tableDataType: FeatureProperties,
      selectedSearchOptionType: "",
      searchInputValue: "",
      icon: customIcon,
      renderer: canvas({ padding: 0.5 }),

      feature: {},
      zoom: 10,
      searchAddress: "3782 St Johns Terr",
      searchToggle: false,
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
      searchOptions: [
        { text: "Zip Code", value: "zipCode", disabled: false },
        { text: "Address", value: "address", disabled: false },
        { text: "City, State", value: "cityState", disabled: false },
      ],
    };
  },

  // mounted() {
  //   // let myMap = L.map("property-map").setView([39.2, -84.56], 12);
  //
  //   // L.tileLayer(
  //   //   "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXZhbmZyYWJlbGwiLCJhIjoiY2tqOTM1bzZoMWFnMDJycWd2eGJ4aTJ0MCJ9.r-KG-MMBYVUX3BGbvKLuLQ",
  //   //   {
  //   //     maxZoom: 18,
  //   //     id: "mapbox/streets-v11",
  //   //     tileSize: 512,
  //   //     zoomOffset: -1,
  //   //     accessToken:
  //   //       "pk.eyJ1IjoiZXZhbmZyYWJlbGwiLCJhIjoiY2tqOTM1bzZoMWFnMDJycWd2eGJ4aTJ0MCJ9.r-KG-MMBYVUX3BGbvKLuLQ",
  //   //   }
  //   // ).addTo(myMap);
  //
  //   // let popup = L.popup();
  //   // let myRenderer = L.canvas({ padding: 0.5 });
  //
  //   console.log("start");
  //   const start1 = performance.now();
  //   // let resp = await axios
  //   //   .get(
  //   //     "http://localhost:8888/rhc/api/properties?lower.lat=39.048306800&lower.lng=-84.363501960&upper.lat=39.123621950&upper.lng=-81.458905140"
  //   //   )
  //   //   .then((response) => {
  //   //     console.log(response);
  //   //     console.log(response.data);
  //   //     return response.data.features;
  //   //   });
  //   //
  //   // console.log(resp);
  //   // console.log("features");
  //   //
  //   // this.$nextTick(function () {
  //   //   L.geoJSON(resp, {
  //   //     style: function () {
  //   //       return {
  //   //         color: "#000",
  //   //         weight: 0.5,
  //   //       };
  //   //     },
  //   //     pointToLayer: function (geoJsonPoint, latlng) {
  //   //       return L.circleMarker(latlng, {
  //   //         renderer: myRenderer,
  //   //       });
  //   //     },
  //   //     onEachFeature: function (feature, layer) {
  //   //       if (feature.geometry.type === "Point" && feature.properties.address) {
  //   //         layer.bindPopup(
  //   //           "Address: " +
  //   //             feature.properties.address +
  //   //             "</br>" +
  //   //             "RHC Value: " +
  //   //             "$100,000" +
  //   //             "</br>" +
  //   //             "$/SqFt: " +
  //   //             feature.properties.pricePerSqFt +
  //   //             "</p>"
  //   //         );
  //   //       }
  //   //     },
  //   //   }).addTo(myMap);
  //   // });
  //
  //   console.log("DONE", performance.now() - start1);
  // },
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
  methods: {
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
  },

  // ExportExcel(type, fn, dl) {
  //   var elt = this.$refs.exportable_table;
  //   var wb = XLSX.utils.table_to_book(elt, { sheet: "Home Compare" });
  //   return dl
  //     ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" })
  //     : XLSX.writeFile(
  //         wb,
  //         fn ||
  //           (this.searchAddress + "." || "HomeCompare.") + (type || "xlsx")
  //       );
  // },
};
</script>
<style>
  .search-row {
    align-items: center;
    margin: 0px 3%;
  }
  .map-row {
    margin: 0px 3%;
  }
  .table-margin {
    margin-top: 20px;
  }
  #export-excel {
    margin-bottom: 5px; 
    padding: 6px;
    font-weight: bold;
  }
</style>
