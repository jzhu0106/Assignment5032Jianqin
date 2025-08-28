<template>
  <div v-if="!isEditing" class="container mt-5">
    <div class="row">
        <div class="col-md-8 offset-md-2">
        <h1 class="text-center mb-4">User Profile</h1>


<div class="row text-center mb-3">
  <div class="col-md-6">
          <div>User Name:</div>
          <div>{{ userProfile.name }}</div>
  </div>
  <div class="col-md-6">
          <div>User ID:</div>
          <div>{{ userProfile.userId }}</div>

  </div>
</div>


<div class="row text-center mb-3">
  <div class="col-md-6">
    <div>Email:</div>
    <div>{{ userProfile.email }}</div>
  </div>
  <div class="col-md-6">
    <div>Birth Date:</div>
    <div>{{ userProfile.birthDate }}</div>
  </div>
</div>

       <div class="row text-center mb-3">
  <div class="col-md-6">
    <div>Gender:</div>
    <div>{{ userProfile.gender }}</div>
  </div>
  <div class="col-md-6">
    <div>Address:</div>
    <div>{{ userProfile.address }}</div>
  </div>
</div>

<div class="row text-center mb-3">
  <div class="col-md-6">
    <div>Occupation:</div>
    <div>{{ userProfile.occupation }}</div>
  </div>
  <div class="col-md-6">
    <div>Favorite Desserts:</div>
    <div>{{ userProfile.favoriteDesserts }}</div>
  </div>
</div>

<div class="row">
    <div class="col-md-6 text-center">Bio : </div>
    <div class="col-md-6 text-center">{{ userProfile.bio }}</div>
  </div>


<div class="text-center mt-5">
  <button @click="editProfile">Edit</button>
</div>

      </div>
    </div>
  </div>




      <div v-else class="container2 mt-5">
        <div class="row">
          <div class="col-md-8 offset-md-2">
      <h1 class="text-center">User Profile</h1>
            <h5>User ID: {{ userProfile.userId }}</h5>
      <form @submit.prevent="saveProfile">






        <div class="row mb-3">
          <div class="col-md-6">
            <div class="col-12 col-md-6"></div>
 <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name"
          @blur="() => validateName(true)"
          @input="() => validateName(false)"
          v-model="userProfile.name">
        <div v-if="errors.name" class="text-danger">{{ errors.name }}</div>
</div>
        <div class="col-md-6">
        <label for="email" class="form-label">Email</label>
        <input type="text" class="form-control" id="email"
          @blur="() => validateEmail(true)"
          @input="() => validateEmail(false)"
          v-model="userProfile.email">
        <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
      </div>
      </div>





 <div class="row mb-3">
  <div class="col-md-6">
    <div class="col-12 col-md-6"></div>

<label for="birth date" class="form-label">Birth Date</label>
        <input class="form-control" v-model="userProfile.birthDate" type="date" />
      </div>
      <div class="col-md-6">
        <label for="gender" class="form-label">Gender</label>
        <select class="form-control" v-model="userProfile.gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
</div>






 <div class="row mb-3">
  <div class="col-md-6">
     <div class="col-12 col-md-6"></div>
     <label for="address" class="form-label">Address</label>
        <input type="text" class="form-control" v-model="userProfile.address" />
      </div>

<div class="col-md-6">
   <label for="occupation" class="form-label">Occupation</label>
        <input type="text" class="form-control" v-model="userProfile.occupation" />
      </div>
       </div>




 <div class="row mb-3">
  <div class="col-md-6">
    <div class="col-12 col-md-6"></div>
    <label for="dessert" class="form-label">Favorite Dessert</label>
        <select class="form-control" v-model="userProfile.favoriteDesserts">
          <option value="Chocolate Cake">Chocolate Cake</option>
          <option value="Ice Cream">Ice Cream</option>
          <option value="Cheesecake">Cheesecake</option>
          <option value="Donuts">Donuts</option>
          <option value="Brownies">Brownies</option>
        </select>
      </div>
      
</div>


<div class="mb-3">
      <div>
        <label for="bio">Bio</label>
        <textarea class="form-control" id="bio" rows="3" v-model="userProfile.bio"></textarea>
      
                  </div>
           

</div>






      <button @click="saveProfile">Save</button>
      </form>
    </div>
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
