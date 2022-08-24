<template>
  <section class="login">
    <img src="../../assets/login-house.jpg" class="house" rel="preload" />
    <q-card class="login-card text-white">
      <q-card-section>
        <div>
          <form class="login_form" @submit.prevent="login">
            <h2 class="form-title">Real Home Compare</h2>
            <p class="form-info">Please enter your login and password!</p>

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
                  id="login-password"
                  label="Password"
                />
              </div>
            </div>

            <p class="forgot-password">
              <a href="#!">Forgot password?</a>
            </p>

            <q-btn
              outline
              color="white"
              class="login-btn"
              label="Login"
              type="submit"
            />

            <div class="social-logins">
              <a href="#!"><i class="fab fa-facebook-f fa-lg"></i></a>
              <a href="#!"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
              <a href="#!"><i class="fab fa-google fa-lg"></i></a>
            </div>
          </form>

          <div class="error" v-if="error">{{ error.message }} 1234</div>
        </div>
      </q-card-section>

      <q-card-section>
        <p class="">
          Don't have an account?
          <a href="#!" class="signup">Sign Up</a>
        </p>
      </q-card-section>
    </q-card>
  </section>
</template>

<script src="./login.js"></script>
<style src="./login.scss" lang="scss"></style>
