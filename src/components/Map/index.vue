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
            :data="excelData"
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
                  <td class="text-center"><a v-bind:href="'https://wedge.hcauditor.org/view/re/' + propy.parcelId + '/2021/summary'" target="_blank">{{propy.parcelId}}</a></td>
                </tr>
              </tbody>
            </table>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script src="./map.js"></script>
<style src="./map.scss" lang="scss"></style>
