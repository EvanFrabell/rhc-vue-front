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
      <TableFilters
        @update:filters="updateTable"
        @clear:filters="clearFilters"
      />
    </q-dialog>
    <q-table
      class="my-sticky-header-table"
      title="Results"
      :rows="tableData"
      :columns="columns"
      :rows-per-page-options="[10]"
      :row-key="name"
      :pagination="pagination"
      @update:pagination="pagination = $event"
      flat
      bordered
    />
    <div class="result-table_btns">
      <div class="table_btns_search">
        <q-btn
          flattened
          color="primary"
          :size="md"
          label="Search"
          class="mr-lg"
          @click="$emit('openSearch')"
        />
      </div>

      <div class="result-table_btns_excel-export">
        <q-btn
          flattened
          color="primary"
          label="Export to Excel"
          @click="exportExcel('xlsx')"
        />
      </div>
    </div>

    <table
      ref="exportable_table"
      id="excelTable"
      style="display: none"
      border="1"
      cellpadding="1"
    >
      <thead>
        <tr>
          <th v-for="(column, idx) in columns" :key="idx">
            {{ column.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr id="tr-body" v-for="feature in filteredFeatures" :key="feature.id">
          <td class="">{{ feature.address }}</td>
          <td class="text-center">{{ feature.finishedSqFt }}</td>
          <td class="text-center">{{ feature.rhcPsf }}</td>
          <td class="text-center">{{ feature.lastSaleAmount }}</td>
          <td class="text-center">{{ feature.lastSaleDate }}</td>
          <td class="text-center">{{ feature.appraisalSale }}</td>
          <td class="text-center">{{ feature.appraisalDate }}</td>
          <td class="text-center">{{ feature.zipCode }}</td>
          <td class="text-center" style="display: none">
            {{ feature.yearBuilt }}
          </td>
          <td class="text-center">{{ feature.totalRooms }}</td>
          <td class="text-center" style="display: none">
            {{ feature.bedrooms }}
          </td>
          <td class="text-center">{{ feature.fullBath }}</td>
          <td class="text-center">
            <a
              v-bind:href="
                'https://wedge.hcauditor.org/view/re/' +
                feature.parcelId +
                '/2021/summary'
              "
              target="_blank"
              >{{ feature.parcelId }}</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="@/components/Table/table.js"></script>
<style src="./table.scss" lang="scss"></style>
