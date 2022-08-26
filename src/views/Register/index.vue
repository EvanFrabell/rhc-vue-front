<template>      
    <section class="register">

    <q-card class="login-card text-white">
      <q-card-section>
        <div>
          <form class="login_form" @submit.prevent="emailRegister">
            <h2 class="form-title">$5/Month All Access Subscription</h2>
            <p class="form-info">Please fill in registration form!</p>

            <div class="form_inputs">
              <div class="email" style="background-color: white">
                <q-input
                  filled
                  label="Email"
                  v-model="email"
                  type="email"
                  id="login-email"
                />
              </div>
              <div class="password" style="background-color: white">
                <q-input
                  filled
                  v-model="password"
                  type="password"
                  id="registration-password"
                  label="Password"
                />
              </div>
              <br>
              <div class="password-copy" style="background-color: white">
                <q-input
                  filled
                  v-model="passwordCopy"
                  type="password"
                  id="registration-password"
                  label="Re-type Password"
                />
              </div>
            </div>
            <br>
            <q-btn
              outline
              color="white"
              class="email-register-btn"
              label="Email-Password Registration"
              type="submit"
            />
            <p>OR</p>
            <q-btn @click="googleRegister"
              outline
              color="white"
              class="google-register-btn"
              label="Register with Gmail Account"
            />

          </form>

          <div class="error" v-if="error">{{ error.message }} 1234</div>
        </div>
      </q-card-section>

    </q-card>
  </section>

      <!-- <div v-for="(product, index) in products" 
            :key="index + '-product'">
        <h3>{{ product.name }}</h3>

        <div
          v-for="(price, priceIndex) in product.prices"
          :key="priceIndex + '-price'">
          <div class="form-check">

            <input
              type="radio"
              class="form-check-input"
              v-model="selectedPrice"
              :value="price.id"
              :id="price.id" />
            
            <label :for="price.id" class="form-check-label">
              {{ price.interval }}
            </label>

          </div>
        </div>
      </div>

      <button
        class="btn btn-primary"
        @click="createSub"
        :disabled="!selectedPrice || isLoading"
      >
        {{ isLoading ? "Loading..." : "Create subscription" }}
      </button> -->
</template>

<script src="./register.js"></script>
<style src="./register.scss" lang="scss" scoped></style>
