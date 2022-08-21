<template>
  <div class="table-filters">
    <q-card style="width: 500px; height: auto">
      <q-card-section class="bg-primary text-white q-mb-lg">
        <div class="text-h6">Filter Options</div>
      </q-card-section>
      <q-card-section class="sqftRange no-wrap">
        <label class="label label-1">Finished Sq. Foot:</label>
        <div class="q-pa-sm">
          <q-badge color="secondary">
            {{ filters.finishedSquareFtRange.min }} to
            {{ filters.finishedSquareFtRange.max }}
          </q-badge>
          <q-range
            v-model="filters.finishedSquareFtRange"
            :min="0"
            :max="9500"
            :step="10"
          />
        </div>
      </q-card-section>
      <q-card-section class="sqftRange no-wrap">
        <label class="label label-1">Price Per Sq. Foot:</label>
        <div class="q-pa-sm">
          <q-badge color="secondary">
            {{ filters.squareFtRange.min }} to
            {{ filters.squareFtRange.max }}
          </q-badge>
          <q-range
            v-model="filters.squareFtRange"
            :min="0"
            :max="500"
            :step="1"
          />
        </div>
      </q-card-section>
      <q-card-section class="lastPriceRange no-wrap">
        <label class="label label-1">Last Sale Amount:</label>
        <div class="q-pa-sm">
          <q-badge color="secondary">
            {{ filters.lastPriceRange.min }} to
            {{ filters.lastPriceRange.max }}
          </q-badge>
          <q-range
            v-model="filters.lastPriceRange"
            :min="20000"
            :max="1000000"
            :step="10000"
          />
        </div>
      </q-card-section>

      <q-card-section class="beds no-wrap">
        <label class="label"># of Beds</label>
        <q-select
          square
          outlined
          v-model="filters.numOfBeds"
          :options="numRange"
          label="Beds"
        />
      </q-card-section>
      <q-card-section class="bathrooms no-wrap">
        <label class="label"># of Bathrooms</label>
        <q-select
          square
          outlined
          v-model="filters.numOfBathrooms"
          :options="numBathRange"
          label="Bathrooms"
        />
      </q-card-section>
      <!-- <q-card-section class="dateRange no-wrap">
        <label class="label">Last Sale Date</label>
        <div>
          <q-date
            v-model="filters.dateRange"
            range
            :flat="true"
            :landscape="true"
          />
        </div>
      </q-card-section> -->
      <q-card-actions vertical align="center" class="q-mt-md">
        <q-btn
          label="Apply"
          color="black"
          @click="$emit('update:filters', filters)"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>
<script src="./table-filters.js"></script>
<style src="./table-filters.scss" lang="scss"></style>
