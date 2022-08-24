<template>
  <div class="register">
    <div v-if="error" class="error">{{ error.message }}</div>
    <main class="form-signin">
      <form @submit.prevent="pressed">
        <h1 class="alert">Registration is closed at this time.</h1>

        <div class="form_inputs">
          <div class="email" style="background-color: white">
            <q-input
              outlined
              label="Email"
              v-model="email"
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
          </div>
          <div class="password" style="background-color: white">
            <q-input
              outlined
              v-model="password"
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              label="Password"
            />
          </div>
        </div>
        <!-- <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button> -->
      </form>
    </main>
  </div>
</template>

<script src="./register.js"></script>
<style src="./register.scss" lang="scss" scoped></style>
