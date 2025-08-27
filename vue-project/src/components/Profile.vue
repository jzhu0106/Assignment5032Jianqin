<template>
  <div class="container">
    <div v-if="!isEditing">
      <h1>
        Name:
        <span>{{ userProfile.name }}</span>
      </h1>

      <p>User ID: {{ userProfile.userId }}</p>

      <p>
        Email:
        <span>{{ userProfile.email }}</span>
      </p>

      <p>
        Birth Date:
        <span>{{ userProfile.birthDate }}</span>
      </p>

      <p>
        Gender:
        <span>{{ userProfile.gender }}</span>
      </p>

      <p>
        Address:
        <span>{{ userProfile.address }}</span>
      </p>

      <p>
        Occupation:
        <span>{{ userProfile.occupation }}</span>
      </p>

      <div>
        <p>Favorite Desserts:</p>
        <span>{{ userProfile.favoriteDesserts }}</span>
      </div>

      <p>
        Bio:
        <span>{{ userProfile.bio }}</span>
      </p>

      <button @click="editProfile">Edit</button>
    </div>

    <div v-else>
      <h1>
        Name:
        <input v-model="userProfile.name"
         @blur="() => validateName(true)"
         @input="() => validateName(false)"
        />
        <div v-if="errors.name" class="text-danger">{{ errors.name }}</div>
      </h1>

      <p>User ID: {{ userProfile.userId }}</p>

      <p>
        Email:
        <input v-model="userProfile.email"
         @blur="() => validateEmail(true)"
         @input="() => validateEmail(false)" 
        />
        <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
      </p>

      <p>
        Birth Date:
        <input v-model="userProfile.birthDate" type="date" />
      </p>

      <p>
        Gender:
        <select v-model="userProfile.gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="other">Other</option>
        </select>
      </p>

      <p>
        Address:
        <input v-model="userProfile.address" />
      </p>

      <p>
        Occupation:
        <input v-model="userProfile.occupation" />
      </p>

      <div>
        <p>Favorite Desserts:</p>
        <select v-model="userProfile.favoriteDesserts">
          <option value="Chocolate Cake">Chocolate Cake</option>
          <option value="Ice Cream">Ice Cream</option>
          <option value="Cheesecake">Cheesecake</option>
          <option value="Donuts">Donuts</option>
          <option value="Brownies">Brownies</option>
        </select>
      </div>

      <p>
        Bio:
        <textarea v-model="userProfile.bio"></textarea>
      </p>

      <button @click="saveProfile">Save</button>
    </div>
  </div>
</template>


<script setup>
import profile from "../assets/json/UserProfile.json";
import { ref, computed } from "vue";


//const userProfile = ref(profile[0]);

const savedProfile = localStorage.getItem("userProfile");
const userProfile = ref(savedProfile ? JSON.parse(savedProfile) : profile[0]);

const isEditing = ref(false);

const editProfile = () => {
  isEditing.value = true;
};

// const saveProfile = () => {
//   localStorage.setItem("userProfile", JSON.stringify(userProfile.value));
//   isEditing.value = false;
// };

const saveProfile = () => {
  validateName(true);
  validateEmail(true);
  if (!errors.value.name && !errors.value.email) {
    localStorage.setItem("userProfile", JSON.stringify(userProfile.value));
    isEditing.value = false;
  }
};


const errors = ref({
  name: null,
  email: null,
  birthDate: null,
  gender: null,
  address: null,
  occupation: null,
  favoriteDesserts: null,
  bio: null,
});


const validateName = (blur) => {
  if (userProfile.value.name.length < 5) {
    if (blur) errors.value.name = "Name must be at least 5 characters";
  } else {
    errors.value.name = null;
  }
};

const validateEmail = (blur) => {
  const email = userProfile.value.email || "";
  if (!email.endsWith("@gmail.com")) {
    if (blur) errors.value.email = "Email must end with @gmail.com";
  } else {
    errors.value.email = null;
  }
};




</script>

<style scoped>

/* h1 {
    text-align: center;
    margin-top: 20px;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
} */


/* .container {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
} */
</style>
