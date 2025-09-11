<template>
  <div class="container mt-5">
  <div class="container">
  <div class="row justify-content-center">
    <div class="col-12 col-md-6 col-lg-4">
  <h1>Sign in</h1>
  <div class="mb-3">
  <label class="form-label">Email</label>
  <input type="text" class="form-control" placeholder="Email" v-model="email" />
</div>
  <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
  <div class="mb-3">
  <label class="form-label">Password</label>
  <input type="password" class="form-control" placeholder="Password" v-model="password" />
</div>
  <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
  <div v-if="errorMessage" class="text-danger">{{ errorMessage }}</div>
<div class="d-flex gap-2">
<button class="btn btn-primary" @click="signin">Sign in</button>
<button class="btn btn-primary" @click="goToRegister">Register</button>
</div>
      </div>
  </div>
</div>
</div>
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



const errors = ref({
  email: null,
  password: null,
});

const validateEmail = () => {
  if (!email.value) {
    errors.value.email = "Email is required";
  } else {
    errors.value.email = null;
  }
};

const validatePassword = () => {
  if (!password.value) {
    errors.value.password = "Password is required";
  } else {
    errors.value.password = null;
  }
};

const signin = () => {
  errorMessage.value = "";

validateEmail();
validatePassword();

if (errors.value.email || errors.value.password) {
  return;
}
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
