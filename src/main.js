import {createApp} from 'vue'
import {createPinia} from "pinia"
import router from './router'
import App from './App.vue'
import Toast from "vue-toastification"
import { plugin, defaultConfig } from '@formkit/vue'
import './axios'
import './assets/main.css'
import config from "./formkit.config"

const app = createApp(App)

app.use(createPinia())
app.use(Toast)
app.use(plugin, defaultConfig(config))
app.use(router)

app.mount('#app')
