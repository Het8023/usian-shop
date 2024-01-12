import { createSSRApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import PiniaPlugin from 'pinia-plugin-persistedstate'
export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()
  pinia.use(PiniaPlugin)
  app.use(pinia)
  return {
    app,
  }
}
