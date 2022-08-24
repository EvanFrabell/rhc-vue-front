export default {
  props: {
    items: {
      default() {
        return [];
      },
      type: Array,
    },
    filterby: {
      type: String,
    },
    shouldReset: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      itemHeight: 39,
      selectedItem: null,
      selected: 0,
      query: '',
      visible: false,
    };
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible;

      setTimeout(() => {
        this.$refs.input.focus();
      }, 50);
    },
    itemClicked(index) {
      this.selected = index;
      this.selectItem();
    },
    selectItem() {
      if (!this.matches.length) {
        return;
      }

      this.selectedItem = this.matches[this.selected];
      this.visible = false;

      if (this.shouldReset) {
        this.query = '';
        this.selected = 0;
      }

      this.$emit('selected', JSON.parse(JSON.stringify(this.selectedItem)));
    },
    up() {
      if (this.selected == 0) {
        return;
      }

      this.selected -= 1;
      this.scrollToItem();
    },
    down() {
      if (this.selected >= this.matches.length - 1) {
        return;
      }

      this.selected += 1;
      this.scrollToItem();
    },
    scrollToItem() {
      this.$refs.optionsList.scrollTop = this.selected * this.itemHeight;
    },
  },
  computed: {
    matches() {
      this.$emit('change', this.query);

      console.log(`This query: ${this.query}`);
      if (this.query == '') {
        return [];
      }
      //Forces the user to type in 7 characters first
      if (this.query.length > 7) {
        return this.items.filter((item) =>
          item[this.filterby].toLowerCase().includes(this.query.toLowerCase())
        );
      } else {
        return [];
      }
    },
  },
};
