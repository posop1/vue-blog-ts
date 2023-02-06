import { createApp } from 'vue'
import '@/assets/global.scss'
import App from './App.vue'
import router from './router'
import { store, key } from './store/store'

const app = createApp(App)
app.use(store, key)
app.use(router)
app.mount('#app')
