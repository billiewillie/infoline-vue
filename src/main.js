import {createApp} from 'vue'
import {createPinia} from "pinia"
import router from './router'
import App from './App.vue'
import Toast from "vue-toastification";

import './assets/main.css'

const app = createApp(App)
app.use(Toast)
app.use(createPinia())
app.use(router)

app.mount('#app')
