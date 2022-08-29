<template>      
    <section class="register">

    <q-card class="login-card text-white">
      <q-card-section>
        <div>
          <!-- <form class="login_form" @submit.prevent="emailRegister"> -->
            <form class="login_form"> 
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
              @click="emailRegister"
              outline
              color="white"
              class="email-register-btn"
              :disabled="isLoading">{{ isLoading ? "Loading..." : "Register with Email" }}</q-btn>
            <p style="margin-bottom: 0;">OR</p>
            <q-btn 
              @click="googleRegister"
              outline
              color="white"
              class="google-register-btn"
              :disabled="isLoading">{{ isLoading ? "Loading..." : "Register with Gmail Account" }}</q-btn>

          </form>

          <div class="error" v-if="error">{{ error.message }} 1234</div>
        </div>
      </q-card-section>

    </q-card>
  </section>
</template>

<script src="./register.js"></script>
<style src="./register.scss" lang="scss" scoped></style>
