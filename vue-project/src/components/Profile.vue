<template>
  <div class="container">
    <h1>User 001</h1>
<ul>
      <li>Name: {{ profile[0].name }}</li>
      <li>Email: {{ profile[0].email }}</li>
      <li>Birth Date: {{ profile[0].birthDate }}</li>
      <li>Gender: {{ profile[0].gender }}</li>
      <li>Address: {{ profile[0].address }}</li>
      <li>Occupation: {{ profile[0].occupation }}</li>
      <li>Favorite Desserts: 
        <ul>
          <li v-for="dessert in profile[0].favoriteDesserts" :key="dessert">{{ dessert }}</li>
        </ul>
      </li>
      <li>Bio: {{ profile[0].bio }}</li>
    </ul>

  </div>
</template>

<script setup>
import profile from "../assets/json/UserProfile.json";

import { ref, computed } from "vue"

// Our logic will go here
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>
