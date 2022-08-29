import axios from 'axios';
import _, { partition } from 'lodash';
import _filter from 'lodash/filter';
import TableFilters from '../TableFilters/index.vue';
import { write, writeFile, utils } from 'xlsx';

export default {
  name: 'table',
  data() {
    return {
      filterDialog: false,
      maximizedToggle: false,
      columns: [
        {
          name: 'address',
          required: true,
          label: 'Address',
          align: 'left',
          field: (tableData) => tableData.address,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: 'finishedSqFt',
          label: 'Finished SqFt',
          field: (tableData) => tableData.finishedSqFt,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: 'rhcPsf',
          label: 'RHC Price per SqFt',
          field: (tableData) => tableData.rhcPsf,
          sortable: true,
        },
        {
          name: 'lastSaleAmount',
          label: 'Last Sale Amount',
          field: 'lastSaleAmount',
          format: (val) => '$' + val.toLocaleString('en-Us'),
          sortable: true,
        },
        {
          name: 'lastSaleDate',
          label: 'Last Sale Date',
          field: 'lastSaleDate',
          sortable: true,
        },
        {
          name: 'appraisalSale',
          label: 'Appraisal Sale Amount',
          field: (tableData) => tableData.appraisalSale,
          format: (val) => '$' + val.toLocaleString('en-Us'),
          sortable: true,
        },
        {
          name: 'appraisalDate',
          label: 'Last Appraisal Date',
          field: 'appraisalDate',
          sortable: true,
        },
        { name: 'Zip Code', label: 'Zip Code', field: 'zipCode' },
        {
          name: 'bedrooms',
          label: 'BedRooms',
          field: (tableData) => tableData.bedrooms,
          sortable: true,
        },
        {
          name: 'fullBath',
          label: 'Baths',
          field: (tableData) => tableData.fullBath,
          sortable: true,
        },
        {
          name: 'Auditor Link',
          label: 'Auditor Link',
          field: 'parcelId',
          dataFormat: this.parcelLink,
        },
      ],
      excelData: [],
      filteredFeatures: this.$store.state.features,
      searchText: null,
      sheet: {},
    };
  },
  components: {
    TableFilters,
  },
  mounted() {
    axios
      .get('https://rhc-backend.herokuapp.com/rhc/api/properties/address')
      .then((response) => {
        let addList = response.data;
        let addresses = [];
        let i = 0,
          len = addList.length;
        // This is silly, but I didn't want to recreate the API
        while (i < len) {
          addresses.push({ id: i, name: addList[i] });
          i++;
        }
        this.autoAddress = addresses;
      })
      .catch(() => {
        console.log('----ERROR----');
      });
  },
  methods: {
    clearFilters() {
      this.filteredFeatures = this.$store.state.features;
      this.filterDialog = false;
    },
    customSort(rows, sortBy, descending) {
      const data = [...rows];

      if (sortBy) {
        data.sort((a, b) => {
          const x = descending ? b : a;
          const y = descending ? a : b;

          if (sortBy === 'name') {
            // string sort
            return x[sortBy] > y[sortBy] ? 1 : x[sortBy] < y[sortBy] ? -1 : 0;
          } else {
            // numeric sort
            return parseFloat(x[sortBy]) - parseFloat(y[sortBy]);
          }
        });
      }

      return data;
    },
    highLighter(address) {
      if (this.searchText == address) {
        return 'featured-row';
      }
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
    parcelLink: function (value) {
      return 'https://wedge.hcauditor.org/view/re/' + value + '/2021/summary';
    },
    getPropertyValue(feature, property) {
      return feature[property];
    },
    updateTable(filterOptions) {
      this.filterDialog = false;
      const [fromYear, fromDay, fromMonth] =
        filterOptions.dateRange.from.split('/');
      const [toYear, toDay, toMonth] = filterOptions.dateRange.to.split('/');
      const formattedFrom = `${fromYear}-${fromMonth}-${fromDay}`;
      const fromDate = new Date(formattedFrom);
      const formattedTo = `${toYear}-${toMonth}-${toDay}`;
      const toDate = new Date(formattedTo);
      this.filteredFeatures = this.$store.state.features.filter((property) => {
        console.log('date', toDate);
        return (
          property.bedrooms === filterOptions.numOfBeds &&
          property.fullBath === filterOptions.numOfBathrooms &&
          property.lastSaleAmount >= filterOptions.lastPriceRange.min &&
          property.lastSaleAmount <= filterOptions.lastPriceRange.max &&
          property.rhcPsf >= filterOptions.squareFtRange.min &&
          property.finishedSqFt >= filterOptions.finishedSquareFtRange.min &&
          property.finishedSqFt <= filterOptions.finishedSquareFtRange.max
          // new Date(property.lastSaleDate) >= fromDate &&
          // new Date(property.lastSaleDate) <= toDate
        );
      });
    },
    exportExcel(type, fn, dl) {
      var elt = this.$refs.exportable_table;
      var wb = utils.table_to_book(elt, { sheet: 'Home Compare' });
      return dl
        ? write(wb, { bookType: type, bookSST: true, type: 'base64' })
        : writeFile(
            wb,
            fn || ('RHC HomeCompare' + '.' || 'HomeCompare.') + (type || 'xlsx')
          );
    },
    _filter,
  },
  computed: {
    tableData() {
      return this.filteredFeatures;
    },
  },
};
