<template>
  <div class="space-box">
    <div class="child-box">
      <div class="info-container">
        <div class="alert alert-warning" style="color:red" v-if="subscription.cancel_at_period_end">
          This subscription will cancel at the end of the period!
        </div>

        <ul id="fresh">
          <li><b>Status:</b> Active</li>
          <li><b>Subscription:</b> RHC $5/Monthly</li>
          <li><b>Current Period Start:</b> {{new Date(subscription.current_period_start.seconds * 1000 ).toLocaleString()}}</li>
          <li><b>Current Period End:</b> {{new Date(subscription.current_period_end.seconds * 1000 ).toLocaleString()}}</li>
        </ul>
      </div>
    </div>
    <div>
      <button class="button-24"
              :disabled="isLoading"
              @click="openCustomerPortal">
        {{ isLoading ? "Loading..." : "Open Billing Portal" }}
      </button>
    </div>
  </div>
</template>

<script src="./subscribedaccount.js"></script>
<style src="./subscribedaccount.scss" lang="scss"></style>
