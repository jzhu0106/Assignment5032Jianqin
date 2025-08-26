<template>
  <div class="container">
    <h1>{{ profile[0].name }}</h1>
    <ul>
      
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

    <button> Edit </button>
    <button> Save </button>
  </div>
</template>



<script setup>
import profile from "../assets/json/UserProfile.json";

import { ref, computed } from "vue"

// Our logic will go here
</script>

<style scoped>
/* h1 {
  margin-bottom: 20px;
} */


 .container {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  /* background-color: #f4f4f4; */
  /* border-radius: 10px; */
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
}
</style>
