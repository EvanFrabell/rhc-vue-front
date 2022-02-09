<template>
  <div>
    <template v-if="shouldDisplay() && display.parcelId != null">
      <b-input-group
        class="pb-1"
        v-for="(value, property) in display"
        :key="property.parcelId"
        :prepend="upperCase(property)"
      >
        <b-form-input
          class="bg-light"
          id="formId"
          :readonly="true"
          :value="`${value}`"
        ></b-form-input>
      </b-input-group>
    </template>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "map-selected-object-details",
  props: {
    display: {
      type: Object,
      required: true,
      default: () => ({}),
      validator: (obj) => _.values(obj).every((v) => v !== null),
    },
  },
  methods: {
    shouldDisplay() {
      return !!this.display;
    },
    upperCase(property) {
      return _.capitalize(_.upperCase(property));
    },
  },
};
</script>

<style scoped></style>
