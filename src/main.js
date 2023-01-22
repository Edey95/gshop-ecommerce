import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css";

import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import "../public/assets/css/style.css";
import "../public/assets/fonts/style.css";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
