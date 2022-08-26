<template>
  <div class="row">
    <div class="col">
      
      <h2>Subscription Plans</h2>
      
      <hr />

      <div v-for="(product, index) in products" 
            :key="index + '-product'">
        <h3>{{ product.name }}</h3>

        <div
          v-for="(price, priceIndex) in product.prices"
          :key="priceIndex + '-price'">
          <div class="form-check">

            <!-- <input
              type="radio"
              class="form-check-input"
              v-model="selectedPrice"
              :value="price.id"
              :id="price.id" />
            
            <label :for="price.id" class="form-check-label">
              {{ price.interval }}
            </label> -->

          </div>
        </div>
      </div>

      <button
        class="btn btn-primary"
        @click="createSub"
        :disabled="!selectedPrice || isLoading"
      >
        {{ isLoading ? "Loading..." : "Create subscription" }}
      </button>
    </div>
  </div>
</template>

<script src="./priceselection.js"></script>
<style src="./priceselection.scss" lang="scss"></style>
