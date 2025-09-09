import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import Profile from '../views/Profile.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue';
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue';

const routes = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: LoginView
  // },
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },
    {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
    {
  path: '/',
  name: 'FireLogin',
  component: FirebaseSigninView
},
{
  path: '/FireRegister',
  name: 'FireRegister',
  component: FirebaseRegisterView
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router