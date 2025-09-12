<template>
  <div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-12 col-md-6 col-lg-4">
  <h1>Create an Account</h1>
  <div class="mb-3">
  <label class="form-label">Email</label>
  <input type="text" class="form-control" placeholder="Email" v-model="formData.email" />
</div>
<div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
  <div class="mb-3">
  <label class="form-label">Password</label>
  <input type="password" class="form-control" placeholder="Password" v-model="formData.password" />
</div>
<div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
  <div v-if="errorMessage" class="text-danger">{{ errorMessage }}</div>
  <button class="btn btn-primary w-100" @click="register">Register</button>
   </div>
  </div>
</div>
</template>

<script setup>
import { ref } from "vue";
import db from '../Firebase/init';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { collection, addDoc } from 'firebase/firestore';


const formData = ref({
  email: '',
  password: ''
});
const errorMessage = ref("");
const router = useRouter();
const auth = getAuth();


const errors = ref({
  email: null,
  password: null,
});

const validateEmail = () => {
  if (!formData.value.email) {
    errors.value.email = "Email is required";
  } else {
    errors.value.email = null;
  }
};

const validatePassword = () => {
  const password = formData.value.password;
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+={}\[\]:;"'<>,.?\/\\|]/.test(password);

  if (password.length < minLength) {
    errors.value.password = `Password must be at least ${minLength} characters long.`;
  } else if (!hasUppercase) {
     errors.value.password = "Password must contain at least one uppercase letter.";
  } else if (!hasLowercase) {
     errors.value.password = "Password must contain at least one lowercase letter.";
  } else if (!hasNumber) {
     errors.value.password = "Password must contain at least one number.";
  } else if (!hasSpecialChar) {
    errors.value.password = "Password must contain at least one special character.";
  } else {
    errors.value.password = null;
  }
};


const register = () => {
validateEmail();
validatePassword();

if (errors.value.email || errors.value.password) {
  return;
}

  errorMessage.value = "";

  createUserWithEmailAndPassword(auth, formData.value.email, formData.value.password)
    .then(async (data) => {
      console.log("Firebase Register Successful!");


    //create user doc
    await addDoc(collection(db, 'users'), {
      email: formData.value.email,
      role: 'user', //default as user
    });


      router.push("/");
    })
    .catch((error) => {
      console.log(error.code);
      errorMessage.value = 'Registration failed. Please try again.';
    });
};
</script>