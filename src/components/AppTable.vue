<template>
  <div>
    <b-table
      primary-key="parcelId"
      striped
      hover
      sort-icon-left
      selectable
      :outlined="true"
      :tbody-tr-class="rowClass"
      :responsive="true"
      :sticky-header="true"
      :items="items"
      :fields="fields"
      :select-mode="selectMode"
    ></b-table>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "rhc-table",
  props: {
    items: Array,
    type: Function,
  },
  data() {
    return {
      selectMode: "range",
    };
  },
  computed: {
    fields: function () {
      if (this.items.length > 0) {
        return _.keys(this.items[0]).map((value) => {
          return {
            key: value,
            sortable: true,
          };
        });
      } else {
        // return [];
        // console.log("fields", new this.type());
        return [..._.keys(new this.type("", "", "", "", "", ""))];
      }
    },
  },
  methods: {
    rowClass(item, type) {
      if (!item || type !== "row") return;
      if (Object.values(item).some((value) => value === "" || value === null)) {
        return "table-warning";
      }
    },
    selectedRow(rows) {
      this.$emit("row-selected", rows);
    },
  },
};
</script>

<style scoped></style>
