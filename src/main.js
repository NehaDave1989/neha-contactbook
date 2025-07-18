import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './route.js'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

createApp(App).use(router).use(ElementPlus).mount('#app')
