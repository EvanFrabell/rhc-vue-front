<template>
  <div class="row">
    <div class="col">
      <h2>Subscribed Account</h2>
      
      <div class="alert alert-warning" v-if="subscription.cancel_at_period_end">
        This subscription will cancel at the end of the period.
      </div>
      <p>
      </p>
      <p>
        Current period start:
        {{
          new Date(
            subscription.current_period_start.seconds * 1000
          ).toLocaleString()
        }}
      </p>

      <p>
        Current period end:
        {{
          new Date(
            subscription.current_period_end.seconds * 1000
          ).toLocaleString()
        }}
      </p>

      <button class="btn btn-primary" 
              :disabled="isLoading"
              @click="openCustomerPortal">
        {{ isLoading ? "Loading..." : "Open my billing portal" }}
      </button>
      <button class="btn btn-primary" 
              :disabled="isLoading"
              @click="openCustomerPortal">
        Cancel My Subscription
      </button>
    </div>
  </div>
</template>

<script src="./subscribedaccount.js"></script>
<style src="./subscribedaccount.scss" lang="scss"></style>
