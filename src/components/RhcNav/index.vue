<template>
  <nav class="nav">
    <div class="nav_logo">
      <router-link to="/" class="navbar-brand">Real Home Compare</router-link>
    </div>
    <ul class="nav_options">
      <li v-if="loggedIn">
        <router-link to="/main" class="">Map</router-link>
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
        <button @click="signOut" class="btn">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<script src="./rhcNav.js"></script>
<style src="./rhcNav.scss" lang="scss"></style>
