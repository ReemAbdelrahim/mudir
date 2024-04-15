import { createApp } from 'vue'
import './bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import router from './router'
import './style.css'
import App from './App.vue'

// createApp(App).use(bootstrap).mount('#app')
createApp(App).use(router).mount('#app')
