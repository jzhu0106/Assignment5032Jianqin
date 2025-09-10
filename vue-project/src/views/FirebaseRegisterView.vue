<template>
  <h1>Register Page</h1>
  <h2>Create an Account</h2>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
  <p><button @click="register">Register</button></p>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errorMessage = ref("");
const router = useRouter();
const auth = getAuth();

const register = () => {
  if (!email.value || !password.value) {
    errorMessage.value = 'please enter the email and password';
    return;
  }

  errorMessage.value = "";

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Firebase Register Successful!");
      router.push("/FireLogin");
    })
    .catch((error) => {
      console.log(error.code);
      errorMessage.value = 'Registration failed. Please try again.';
    });
};
</script>