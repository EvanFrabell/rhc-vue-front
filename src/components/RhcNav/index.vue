<template>
  <nav class="nav bg-primary">
    <div class="nav_logo">
      <router-link to="/" class="navbar-brand"
        ><q-icon name="home" size="lg" />
      </router-link>
    </div>
    <ul class="nav_options">
      <li v-if="loggedIn">
        <router-link to="/dashboard" class="">Map</router-link>
      </li>
      <li>
        <router-link to="/account" class="">Account</router-link>
      </li>
      <li>
        <router-link to="/contact" class="">Contact</router-link>
      </li>
      <li v-if="!loggedIn">
        <router-link to="/login" class="">Login</router-link>
      </li>
      <li v-if="!loggedIn">
        <router-link to="/register" class="">Register</router-link>
      </li>
      <li v-if="loggedIn">
        <q-btn
          flat
          rounded
          size="sm"
          label="Logout"
          class="text-white"
          @click="signOut"
        />
      </li>
    </ul>
  </nav>
</template>

<script src="./rhcNav.js"></script>
<style src="./rhcNav.scss" lang="scss"></style>
