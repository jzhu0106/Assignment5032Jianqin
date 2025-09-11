import 'bootstrap/dist/css/bootstrap.min.css'

// import './assets/main.css'
// import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import db from './Firebase/init.js';

const app = createApp(App)
app.use(router)
// app.mount('#app')



app.mount('#app')