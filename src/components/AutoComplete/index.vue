<template>
  <div class="autocomplete">
    <q-input
      square
      outlined
      v-model="query"
      label="By Address"
      @keydown.up="up"
      @keydown.down="down"
      @keydown.enter="selectItem"
      ref="input"
    />
    <div class="placeholder" v-if="selectedItem == null" v-text="title"></div>
    <button class="close" @click="selectedItem = null" v-if="selectedItem">
      x
    </button>
    <div class="popover" v-show="visible">
      <q-input
        square
        outlined
        v-model="query"
        placeholder="Start Typing..."
        @keydown.up="up"
        @keydown.down="down"
        @keydown.enter="selectItem"
        type="text"
        ref="input"
      />
      <div class="options" ref="optionsList">
        <ul>
          <li
            v-for="(match, index) in matches"
            :key="index"
            :class="{ selected: selected == index }"
            @click="itemClicked(index)"
            v-text="match[filterby]"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="@/components/Autocomplete/autocomplete.js"></script>
<style src="./autocomplete.scss" lang="scss"></style>
