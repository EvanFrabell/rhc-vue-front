<template>
  <div class="summary">
    <div class="summary-min">
      <h3 class="heading">Min</h3>
      <h4>per sq ft</h4>
      <span>${{ min }} </span>
    </div>
    <div class="summary-average">
      <h3 class="heading">Average</h3>
      <h4>per sq ft</h4>
      <span>${{ average }}</span>
    </div>
    <div class="summary-max">
      <h3 class="heading">Max</h3>
      <h4>per sq ft</h4>
      <span>${{ max }} </span>
    </div>
  </div>
  <h4 class="tooltip">Numbers based on square mile radius</h4>
</template>

<script src="./summary.js"></script>
<style src="./summary.scss" lang="scss"></style>
