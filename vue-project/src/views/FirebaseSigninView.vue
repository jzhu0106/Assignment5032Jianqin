<template>
  <h1>Sign in</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
  <p><button @click="signin">Sign in</button></p>
  <p><button @click="goToRegister">Register</button></p>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
const errorMessage = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();
const auth = getAuth();

const signin = () => {
  errorMessage.value = "";

    if (!email.value || !password.value) {
    alert('please enter the email and password');
    return;}
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Firebase Register Successful!");
    //   router.push("/");
    router.push("/home"); 
      console.log(auth.currentUser); 
    })
   .catch((error) => {
  console.log(error.code);
  errorMessage.value = 'Please enter correct email and password';
});
};

const goToRegister = () => {
  router.push('/FireRegister');
};
</script>
