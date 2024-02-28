import { createApp } from 'vue'
import { createPinia } from 'pinia'

import TCKNValidation from '@/components/TCKNValidation.vue'
import App from './App.vue'
import router from './router'

import './../node_modules/@picocss/pico/css/pico.min.css'

const app = createApp(App).component('TCKNValidation', TCKNValidation)
app.use(createPinia())
app.use(router)

app.mount('#app')
