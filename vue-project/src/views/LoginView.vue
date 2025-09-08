<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const password = ref('')
const errorMessage = ref('')

const handleLogin = () => {
  if (username.value === 'monash' && password.value === '123456') {
    router.push('/home')
  } else {
    errorMessage.value = 'your user name/password is wrong'
  }
}
</script>

<template>
  <div class="login-container">
    <h2>Login Page</h2>
    
    <form @submit.prevent="handleLogin">
      <div>
        <label>User Name:</label>
        <input type="text" v-model="username" required>
      </div>
      
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" required>
      </div>
      
      <div v-if="errorMessage">
        {{ errorMessage }}
      </div>
      
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

div {
  margin-bottom: 10px;
}

input {
  margin-left: 10px;
}

button {
  margin-top: 10px;
}
</style>
