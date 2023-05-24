import {createApp} from 'vue'
import {createPinia} from "pinia"
import { setupCalendar } from 'v-calendar';
import router from './router'
import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
