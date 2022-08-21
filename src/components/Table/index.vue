<template>
  <div class="result-table">
    <q-icon
      name="fas fa-filter"
      color="secondary"
      size="1.5rem"
      style="float: left; margin-bottom: 1rem"
      class="filter-icon"
      @click="filterDialog = !filterDialog"
    />
    <q-dialog
      class="search-popup"
      :dark="true"
      v-model="filterDialog"
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <TableFilters @update:filters="updateTable" />
    </q-dialog>
    <q-table
      class="my-sticky-header-table"
      title="Results"
      :rows="tableData"
      :columns="columns"
      :rows-per-page-options="[11]"
      :row-key="name"
      binary-state-sort
      flat
      bordered
      ref="grid"
    />
    <div class="result-table_btns">
      <div class="table_btns_search">
        <q-btn
          flattened
          color="primary"
          :size="md"
          label="Search"
          @click="$emit('openSearch')"
        />
      </div>
      <div class="result-table_btns_excel-export">
        <q-btn
          flattened
          color="primary"
          label="Export to Excel"
          @click="exportAsExcel"
        />
      </div>
    </div>
    <!-- <table ref="exportable_table" class="" id="sortTable">
      <thead>
        <tr id="tr-head">
          <th class="align-middle" style="cursor: pointer" id="nameClick">
            <b-button class="" @click="sortTable(0)">Address</b-button>
          </th>
          <th class="align-middle">
            <b-button class="" @click="sortTable(1)">Finished sqft</b-button>
          </th>
          <th class="align-middle">
            <b-button
              class=""
              @click="sortTable(2)"
              v-b-popover.hover.top="'Real Home Compare Price per Sq.Ft.'"
              title="Real Home Compare PsF"
              >RHC-PsF</b-button
            >
          </th>
          <th class="align-middle">
            <b-button
              class="btn btn-dark font-weight-bold"
              @click="sortTable(3)"
              v-b-popover.hover.top="'Last Sale Price per Sq.Ft.'"
              title="Last Sale PsF"
              >LS-PsF</b-button
            >
          </th>
          <th class="align-middle">
            <b-button
              class="btn btn-dark font-weight-bold"
              @click="sortTable(4)"
              >Last Sale Amount</b-button
            >
          </th>
          <th class="align-middle">
            <b-button
              class="btn btn-dark font-weight-bold"
              @click="sortTable(5)"
              >Last Sale Date</b-button
            >
          </th>
          <th class="align-middle">
            <b-button
              class="btn btn-dark font-weight-bold"
              @click="sortTable(6)"
              v-b-popover.hover.top="'Appraisal Price per Sq.Ft.'"
              title="Appraisal PsF"
              >A-PsF</b-button
            >
          </th>
          <th class="align-middle">
            <b-button
              class="btn btn-dark font-weight-bold"
              @click="sortTable(7)"
              >Appraisal Sale Amount</b-button
            >
          </th>
          <th class="align-middle">
            <b-button
              class="btn btn-dark font-weight-bold"
              @click="sortTable(8)"
              >Last Appraisal Date</b-button
            >
          </th>
          <th class="align-middle">
            <b-button
              class="btn btn-dark font-weight-bold"
              @click="sortTable(9)"
              >Zip Code</b-button
            >
          </th>
          <th class="align-middle" style="display: none">
            <b-button
              class="btn btn-dark font-weight-bold"
              @click="sortTable(10)"
              >Year Built</b-button
            >
          </th>
          <th class="align-middle">
            <b-button
              class="btn btn-dark font-weight-bold"
              @click="sortTable(11)"
              >Total Rooms</b-button
            >
          </th>
          <th class="align-middle" style="display: none">Bedrooms</th>
          <th class="align-middle">
            <b-button
              class="btn btn-dark font-weight-bold"
              @click="sortTable(12)"
              >Baths</b-button
            >
          </th>
          <th class="align-middle">
            <b-button
              class="btn btn-dark font-weight-bold"
              @click="sortTable(13)"
              >Auditor Link</b-button
            >
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          :class="highLighter(`${propy.address}`)"
          id="tr-body"
          v-for="propy in propyData"
          :key="propy.id"
        >
          <td class="">{{ propy.address }}</td>
          <td class="text-center">{{ propy.finishedSqFt }}</td>
          <td class="text-center">{{ propy.rhcPsf }}</td>
          <td class="text-center">{{ propy.lastSalePsf }}</td>
          <td class="text-center">{{ propy.lastSaleAmount }}</td>
          <td class="text-center">{{ propy.lastSaleDate }}</td>
          <td class="text-center">{{ propy.appraisalPsf }}</td>
          <td class="text-center">{{ propy.appraisalSale }}</td>
          <td class="text-center">{{ propy.appraisalDate }}</td>
          <td class="text-center">{{ propy.zipCode }}</td>
          <td class="text-center" style="display: none">
            {{ propy.yearBuilt }}
          </td>
          <td class="text-center">{{ propy.totalRooms }}</td>
          <td class="text-center" style="display: none">
            {{ propy.bedrooms }}
          </td>
          <td class="text-center">{{ propy.fullBath }}</td>
          <td class="text-center">
            <a
              v-bind:href="
                'https://wedge.hcauditor.org/view/re/' +
                propy.parcelId +
                '/2021/summary'
              "
              target="_blank"
              >{{ propy.parcelId }}</a
            >
          </td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script src="./table.js"></script>
<style src="./table.scss" lang="scss"></style>
