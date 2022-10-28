import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import App from './App.vue'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
// import './assets/main.css'
import './assets/index.css'
import 'flowbite';

const app = createApp(App)

const axiosInstance = axios.create({
    baseURL: 'http://localhost/api',
})


app.config.globalProperties.$axios = { ...axiosInstance }
app.use(createPinia())
app.use(router)
app.use(VueSweetalert2)
app.mount('#app')

