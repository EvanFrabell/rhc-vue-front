<template>
  <div id="app">
    <div id="nav">
      <rhc-nav />
    </div>
    <router-view />
  </div>
</template>

<script>
import RhcNav from '@/components/RhcNav/index.vue';

export default {
  name: 'app',
  components: {
    RhcNav,
  },
};
</script>

<style>
body {
  overflow-x: hidden;
}
</style>
