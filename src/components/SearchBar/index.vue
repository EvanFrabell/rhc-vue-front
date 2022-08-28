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
          <div style="margin-top: 2rem">
            <q-select
              filled
              :model-value="searchText"
              use-input
              hide-selected
              fill-input
              input-debounce="0"
              :options="autoAddressOptions"
              @filter="filterFn"
              @input-value="setSearchText"
              @keypress.enter="searchAddress"
              style="width: 250px; padding-bottom: 32px"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </div>
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
