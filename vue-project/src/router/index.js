import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import Profile from '../views/Profile.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue';
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue';
import DessertTutorial from '../views/DessertTutorial.vue' 
import Cake from '../views/Cake.vue';

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
},
{
  path: '/DessertTutorial',
  name: 'DessertTutorial',
  component: DessertTutorial
},
{
  path: '/DessertTutorial/Cake',
  name: 'Cake',
  component: Cake
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router