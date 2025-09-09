<template>
  <h1>Resgister Page</h1>
  <h2>Create an Account</h2>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Register</button></p>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();
const auth = getAuth();

const register = () => {
if (!email.value || !password.value) {
    alert('please enter the email and password');
    return;
  }

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Firebase Register Successful!");
      router.push("/FireLogin");
    })
    .catch((error) => {
      console.log(error.code);
    });
};


</script>
