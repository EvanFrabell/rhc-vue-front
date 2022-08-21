export default {
  name: 'summary',
  props: [],
  data() {
    return {};
  },
  computed: {
    average() {
      return (
        this.$store.state.features.reduce((acc, feat) => feat.rhcPsf + acc, 0) /
        this.$store.state.features.length
      );
    },
    max() {
      const values = this.$store.state.features.map((feat) =>
        feat.rhcPsf && feat.rhcPsf > 0 ? feat.rhcPsf : this.average
      );
      return Math.max(...values);
    },
    min() {
      const values = this.$store.state.features.map((feat) =>
        feat.rhcPsf && feat.rhcPsf > 0 ? feat.rhcPsf : this.average
      );
      return Math.min(...values);
    },
  },
};
