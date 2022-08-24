<template>
  <div class="dashboard">
    <q-dialog
      class="search-popup"
      v-model="dialog"
      persistent
      full-width
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card>
        <q-bar class="bg-primary">
          <q-space />

          <q-btn
            dense
            flat
            icon="minimize"
            @click="maximizedToggle = false"
            :disable="!maximizedToggle"
          >
            <q-tooltip v-if="maximizedToggle" class="bg-black text-white"
              >Minimize</q-tooltip
            >
          </q-btn>
          <q-btn
            dense
            flat
            icon="crop_square"
            @click="maximizedToggle = true"
            :disable="maximizedToggle"
          >
            <q-tooltip v-if="!maximizedToggle" class="bg-black text-white"
              >Maximize</q-tooltip
            >
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-black text-white">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section class="q-pt-none q-mt-lg">
          <search-bar
            @closeDialog="handleSearchRequest"
            @coordUpdate="updateMarkers($event)"
          />
          <!-- <map /> -->
        </q-card-section>
      </q-card>
    </q-dialog>

    <div v-if="!dialog">
      <Summary />
      <Table
        propyData="tableData"
        selectedSearchOptionType="searchType"
        @openSearch="dialog = true"
      />
      <map-test class="dashboard-map" :latlong="coords" />
    </div>
  </div>
</template>

<script src="./dashboard.js"></script>
<style src="./dashboard.scss" lang="scss"></style>
