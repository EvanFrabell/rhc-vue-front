<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-2">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Real Home Compare</router-link>
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li v-if="loggedIn" class="nav-item">
            <router-link to="/main" class="nav-link active">Map</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link active"
              >Contact</router-link
            >
          </li>
          <li v-if="!loggedIn" class="nav-item">
            <router-link to="/login" class="nav-link active">Login</router-link>
          </li>
          <li v-if="!loggedIn" class="nav-item">
            <router-link to="/register" class="nav-link active"
              >Register</router-link
            >
          </li>
          <li v-if="loggedIn" class="nav-item">
            <button @click="signOut" class="btn btn-dark nav-link active">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "rhc-nav",
  data() {
    return {
      loggedIn: false,
    };
  },
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      let auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    signOut() {
      getAuth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "Login" });
        });
    },
  },
};
</script>
<style>

</style>
