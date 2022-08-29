<template>
  <section class="login">
    <img src="../../assets/login-house.jpg" class="house" rel="preload" />
    <q-card class="login-card text-white">
      <q-card-section>

            <div class="email" style="background-color: white">
                <q-input
                  filled
                  label="Email"
                  v-model="email"
                  type="email"
                  id="login-email"
                />
            </div>
            <br>
            <div>
              <q-btn
                outline
                color="white"
                class="reset-btn"
                label="Reset Password"
                @click="resetPassword"
              />
            </div>

      </q-card-section>

     
    </q-card>
  </section>
</template>

<script src="./forgotpassword.js"></script>
<style src="./forgotpassword.scss" lang="scss"></style>
