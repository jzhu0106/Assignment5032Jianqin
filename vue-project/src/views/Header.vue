<template>
  <!-- <header v-show="$route.name !== 'Login'"> -->
    <header v-show="$route.name !== 'FireLogin' && $route.name !== 'FireRegister'">
    <div class="container">
      <div class="bg-white shadow-sm rounded-3" style="padding: 15px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; gap: 15px; margin: 0 auto;">
            <router-link to="/DessertTutorial" class="nav-button">
              Dessert Tutorial
            </router-link>
            <router-link to="/activity" class="nav-button">
              Activity
            </router-link>
            <router-link to="/home" class="nav-button">
              Home
            </router-link>
            <router-link to="/my-activity" class="nav-button">
              My Activity
            </router-link>
          </div>
          
<div style="display: flex; align-items: center; gap: 10px;">
  <router-link to="/" class="nav-button">Sign out</router-link>
  <router-link to="/profile">
    <img
      src="@/components/icons/user.png" 
      alt="User Icon"
      class="rounded-circle user"
    />
  </router-link>
</div>
        </div>
      </div>
    </div>
  </header>
</template>



<style scoped>
.nav-button {
  background-color: #f8f9fa;
  border: 2px solid #dee2e6;
  border-radius: 25px;
  padding: 8px 20px;
  color: #495057;
  font-weight: 500;
  text-decoration: none;
}

.nav-button:hover {
  background-color: #e9ecef;
  border-color: #adb5bd;
  color: #495057;
  text-decoration: none;
}

.nav-button.router-link-active {
  background-color: #fbbf24;
  border-color: #007bff;
  color: white;
}

.user {
  width: 40px;
  height: 40px;
  border: 2px solid #dee2e6;
}


</style>