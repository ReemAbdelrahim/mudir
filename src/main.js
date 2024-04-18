import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import CanvasJSChart from '@canvasjs/vue-charts';
import router from './router'
import './style.css'
import App from './App.vue'

// createApp(App).use(bootstrap).mount('#app')
// app.use(CanvasJSChart);
// createApp(App).use(bootstrap).mount('#app')
createApp(App).use(router).mount('#app')
