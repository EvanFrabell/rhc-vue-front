<template>
  <b-container fluid>
    <Map />
  </b-container>
</template>

<script>
import Map from "@/components/Map/index.vue";

export default {
  name: "Main",
  components: {
    Map,
  },
};
</script>

<style scoped>
/*.wrapper {*/
/*  display: grid;*/
/*  grid-template-columns: 1fr 1fr;*/
/*  grid-column-gap: 1px;*/
/*  background-color: black;*/
/*}*/

/*.letter {*/
/*  background-color: #0069b3;*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  padding: 20px;*/
/*  font-size: 70px;*/
/*  color: white;*/
/*  line-height: 1;*/
/*  font-family: 'hobeaux-rococeaux-background', Helvetica;*/
/*  font-weight: 200;*/
/*  cursor: pointer;*/
/*  transition: all .3s ease;*/
/*}*/
</style>
