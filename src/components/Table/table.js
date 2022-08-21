import axios from 'axios';
import _, { partition } from 'lodash';
import _filter from 'lodash/filter';
import TableFilters from '../TableFilters/index.vue';

export default {
  name: 'table',
  data() {
    return {
      filterDialog: false,
      maximizedToggle: false,
      columns: [
        {
          name: 'Address',
          required: true,
          label: 'Address',
          align: 'left',
          field: (tableData) => tableData.address,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          label: 'Finished SqFt',
          field: (tableData) => tableData.finishedSqFt,
          format: (val) => `${val}`,
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
        },
        {
          label: 'RHC Price per SqFt',
          field: (tableData) => tableData.rhcPsf,
        },
        {
          label: 'Last Sale Price per SqFt',
          field: 'lastSalePsf',
          format: (val) => '$' + val.toLocaleString('en-Us'),
        },
        {
          label: 'Last Sale Amount',
          field: 'lastSaleAmount',
          format: (val) => '$' + val.toLocaleString('en-Us'),
        },
        { label: 'Last Sale Date', field: 'lastSaleDate' },
        {
          label: 'Appraisal Price per SqFt',
          field: 'appraisalPsf',
          format: (val) => '$' + val.toLocaleString('en-Us'),
        },
        {
          label: 'Appraisal Sale Amount',
          field: (tableData) => tableData.appraisalSale,
          format: (val) => '$' + val.toLocaleString('en-Us'),
        },
        { label: 'Last Appraisal Date', field: 'appraisalDate' },
        { label: 'Zip Code', field: 'zipCode' },
        {
          label: 'Total Rooms',
          field: (tableData) => tableData.totalRooms,
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
        },
        {
          label: 'Baths',
          field: (tableData) => tableData.fullBath,
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
        },
        {
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
    exportAsExcel() {},
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
          property.totalRooms === filterOptions.numOfBeds &&
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
    _filter,
  },
  computed: {
    tableData() {
      return this.filteredFeatures;
    },
  },
};
