import SearchBar from '@/components/SearchBar/index.vue';
import Summary from '@/components/Summary/index.vue';
import Table from '@/components/Table/index.vue';
import TableFilters from '@/components/TableFilters/index.vue';
import MapTest from '@/components/MapTest/index.vue';

export default {
  name: 'dashboard',
  data() {
    return {
      coords: [],
      dialog: true,
      maximizedToggle: false,
      searchType: null,
      showTable: true,
      tableData: [],
    };
  },
  components: {
    MapTest,
    SearchBar,
    Summary,
    Table,
    TableFilters,
  },
  methods: {
    displayTable() {
      this.showTable = !this.showTable;
    },
    handleSearchRequest(data) {
      this.dialog = false;
      this.tableData = data.tableData;
      this.searchType = data.searchType;
    },
    updateMarkers(event) {
      console.log('updateMarkers', event);
      this.coords = event;
    },
  },
};
