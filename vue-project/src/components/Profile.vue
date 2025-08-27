<template>
  <div class="container">
    <p>User ID: {{ userProfile.userId }}</p>
    
    <p>
      Email: 
      <input v-if="isEditing" v-model="userProfile.email" /> 
      <span v-else>{{ userProfile.email }}</span>
    </p>
    
    <p>
      Birth Date: 
      <input v-if="isEditing" v-model="userProfile.birthDate" type="date" /> 
      <span v-else>{{ userProfile.birthDate }}</span>
    </p>
    
    <p>
      Gender: 
      <select v-if="isEditing" v-model="userProfile.gender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <span v-else>{{ userProfile.gender }}</span>
    </p>

    <p>
      Address: 
      <input v-if="isEditing" v-model="userProfile.address" /> 
      <span v-else>{{ userProfile.address }}</span>
    </p>
    
    <p>
      Occupation: 
      <input v-if="isEditing" v-model="userProfile.occupation" /> 
      <span v-else>{{ userProfile.occupation }}</span>
    </p>

    <p>Favorite Desserts:
      <ul>
        <li v-for="(dessert, index) in userProfile.favoriteDesserts" :key="index">
          <input v-if="isEditing" v-model="userProfile.favoriteDesserts[index]" />
          <span v-else>{{ dessert }}</span>
        </li>
      </ul>
    </p>
    
    <p>
      Bio: 
      <textarea v-if="isEditing" v-model="userProfile.bio"></textarea>
      <span v-else>{{ userProfile.bio }}</span>
    </p>
    <button @click="editProfile" v-if="!isEditing">Edit</button>
    <button @click="saveProfile" v-if="isEditing">Save</button>
  </div>
</template>

<script setup>
import profile from "../assets/json/UserProfile.json";
import { ref, computed } from "vue";


const userProfile = ref(profile[0]);
const isEditing = ref(false);


const editProfile = () => {
  isEditing.value = true;
};


const saveProfile = () => {
  isEditing.value = false;
};
</script>

<style scoped>
.container {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
