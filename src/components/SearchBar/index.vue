<template>
  <div class="searchbar">
    <div class="searchbar-searchFields">
      <div class="inputs">
        <q-select
          square
          outlined
          v-model="selectedOption"
          @change="toggleOptions"
          :options="searchOptions"
          label="Search By"
        />
      </div>
      <div class="inputs">
        <div v-if="selectedOption === 'Address'">
          <q-input
            square
            outlined
            v-model="searchText"
            @keypress.enter="searchAddress"
          >
            <!-- <q-autocomplete
              @search="autoAddress"
              :min-characters="3"
              @selected="addressSelected"
              @keypress.enter="addressSelected"
            /> -->
          </q-input>
        </div>
        <div v-else-if="selectedOption === 'Zip Code'">
          <q-input
            square
            outlined
            v-model="searchText"
            placeholder="By Zip Code"
            @keypress.enter="searchAddress"
            label="Zip Code"
          />
        </div>
        <div v-else-if="selectedOption === 'City, State'">
          <q-input
            square
            outlined
            label="City, State"
            v-model="searchText"
            @keypress.enter="searchAddress"
          />
        </div>
      </div>
      <div class="btn_actions">
        <q-btn
          id="search-btn"
          round
          color="black"
          icon="my_location"
          @click="updateMap"
        />
        <q-btn flattened color="primary" label="Reset Map" @click="resetMap" />
      </div>
    </div>
    <div class="searchbar-map">
      <map-test :latlong="coordList" :hasReset="hasReset" />
    </div>
    <q-btn
      id="search-btn"
      flattened
      color="primary"
      label="Search"
      size="1rem"
      @click="searchAddress"
    />
  </div>
</template>
<script src="./searchbar.js"></script>
<style src="./searchbar.scss" lang="scss"></style>
