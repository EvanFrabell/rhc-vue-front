<template>
  <div class="map">
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
        <!-- <v-marker-cluster>
          <v-marker
            v-for="feature in geoData"
            :key="feature.properties.id"
            :lat-lng="feature.geometry.coordinates"
            :icon="icon"
            @click="setSelectedFeature(feature)"
          >
            <v-tooltip :content="addPopups(feature)"></v-tooltip>
          </v-marker>
        </v-marker-cluster> -->
      </template>
    </l-map>
  </div>
</template>

<script src="./map.js"></script>
<style src="./map.scss" lang="scss"></style>
