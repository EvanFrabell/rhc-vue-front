export default {
  name: 'summary',
  props: [],
  data() {
    return {};
  },
  computed: {
    average() {
      const average =
        this.$store.state.features.reduce((acc, feat) => feat.rhcPsf + acc, 0) /
        this.$store.state.features.length;
      return parseInt(average) || 0;
    },
    max() {
      const values = this.$store.state.features.map((feat) =>
        feat.rhcPsf && feat.rhcPsf > 0 ? feat.rhcPsf : this.average
      );
      return Math.max(...values) || 0;
    },
    min() {
      const values = this.$store.state.features.map((feat) =>
        feat.rhcPsf && feat.rhcPsf > 0 ? feat.rhcPsf : this.average
      );
      return Math.min(...values) || 0;
    },
  },
};
