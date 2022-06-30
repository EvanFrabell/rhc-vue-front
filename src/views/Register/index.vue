<template>
  <div>
    <div v-if="error" class="error">{{ error.message }}</div>
    <main class="form-signin">
      <form @submit.prevent="pressed">
        <h1 class="h3 mb-3 fw-normal">Registration is closed at this time.</h1>
        <!-- <div class="form-floating">
            <input v-model="name" class="form-control" id="floatingInput" placeholder="John Doe">
            <label for="floatingInput">Full Name</label>
          </div> -->
        <div class="form-floating">
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <!-- <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button> -->
      </form>
    </main>
  </div>
</template>

<script src="./register.js"></script>
<style src="./register.scss" lang="scss" scoped></style>
