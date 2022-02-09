<template>
  <div v-if="options">
    <b-row>
      <b-col cols="5">
        <!--    <label for="form-input">Search Home to Compare: </label>-->
        <b-input-group>
          <!-- <p class="h5 pr-2 mb-2 mt-2">
            <b-icon-plus-square
              :class="[{ rounded: isHovering, 'bg-info': isHovering }]"
              :variant="isHovering ? 'light' : 'primary'"
              @mouseover="isHovering = true"
              @mouseout="isHovering = false"
            ></b-icon-plus-square>
          </p>  -->

          
          <b-form-input
            id="form-input"
            name="form-input"
            type="text"
            :placeholder="inputPlaceHolder"
            v-model.trim="inputValue"
            :disabled="inputDisabled"
            @keypress.enter="performSearch"
          ></b-form-input>
          <b-input-group-append>
            <b-button
              :disabled="inputDisabled"
              @click="performSearch"
              type="button"
            >
              <b-icon-search></b-icon-search>
              <!--          <svg-->
              <!--            xmlns="http://www.w3.org/2000/svg"-->
              <!--            width="16"-->
              <!--            height="16"-->
              <!--            fill="currentColor"-->
              <!--            class="bi bi-search"-->
              <!--            viewBox="0 0 16 16"-->
              <!--          >-->
              <!--            <path-->
              <!--              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"-->
              <!--            />-->
              <!--          </svg>-->
              <!--          <i class="bi bi-search"></i>-->
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
      <b-col cols="1" class="search-by">
        <label>Search By:</label>
      </b-col>
      <b-col cols="5">
        <b-form-group>
          <b-form-checkbox-group
            class="pt-2"
            id="checkbox-group-1"
            @change="toggleCheckboxDisabled"
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            name="flavour-1"
          ></b-form-checkbox-group>
        </b-form-group>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { asBoolean } from "@/utils/type-utils";



export default {
  name: "map-search",
  props: {
    options: {
      type: Array,
      required: true,
      default: function () {
        return [];
      },
    },
    placeHolderText: {
      type: String,
      default: "Find Properties",
    },
    usePlaceHolderFunction: {
      type: Boolean,
      default: true,
    },
  },
  data: function () {
    return {
      isHovering: false,
      inputValue: "",
      inputDisabled: true,
      selected: [], // Must be an array reference!
      autoAddress: [],
    };
  },
 
  computed: {
    inputPlaceHolder() {
      if (this.usePlaceHolderFunction && asBoolean(this.selected[0])) {
        const selectedOption = this.options.find(
          (option) => option.value === this.selected[0]
        );
        return `By ${selectedOption.text}`;
      } else {
        return this.placeHolderText;
      }
    },
  },
  methods: {
    toggleCheckboxDisabled(selection) {
      if (asBoolean(selection[0])) {
        this.inputDisabled = false;
        this.options.forEach((option) => {
          if (option.value !== selection[0]) {
            option.disabled = true;
          }
        });
      } else {
        this.inputDisabled = true;
        this.clearInput();
        this.options.forEach((option) => (option.disabled = false));
      }
    },
    clearInput() {
      this.inputValue = null;
    },
    performSearch() {
      this.$emit("execute-search", this.inputValue, this.selected[0]);
    },
    addressSelected(addrss) {
      console.log(`Customer Selected:\nid: ${addrss.id}\nname: ${addrss.name}`);
    },
    
    // onChange(value) {
    //   // do something with the current value
    // },
  },
};
</script>

<style scoped>
  .search-by {
    display: flex;
    align-items: center;
    justify-content: right;
    font-weight: bold;
  }
</style>
