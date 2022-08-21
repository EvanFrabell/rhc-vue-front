export default {
  name: 'table-filters',
  data() {
    return {
      numBathRange: [1, 2, 3, 4, 5],
      numRange: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
  methods: {},
  computed: {
    filters() {
      return this.$store.state.filters;
    },
  },
};
