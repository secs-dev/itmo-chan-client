import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from 'pinia'
import { router } from '@/app/providers'

export const app = createApp(App)
    .use(createPinia())
    .use(router)
