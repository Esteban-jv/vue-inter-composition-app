import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
// app.use(VueQueryPlugin)
VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                cacheTime: 1000 * 120, // 2 minutes
                refetchOnReconnect: 'always', // Si se pierde la conexion, volver a intentar
            },
        },
    },
})

app.mount('#app')
