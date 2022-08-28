<template>
  <div class="sub-container">
    <ul id="fresh">
      <li id="hot-sub"><b>Your Subscription Is Inactive!</b></li>
      <li id="big-banna"><b>WOULD YOU LIKE AN ALL-ACCESS PASS FOR $5 A MONTH?</b></li>
    </ul>
    <div>
      <button class="button-24"
              @click="createSub"
              :disabled="isLoading">
        {{ isLoading ? "Loading..." : "Start Subscription" }}
      </button>
    </div>
  </div>
</template>

<script src="./priceselection.js"></script>
<style src="./priceselection.scss" lang="scss"></style>
