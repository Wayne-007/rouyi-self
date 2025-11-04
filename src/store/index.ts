import { createPinia } from 'pinia'
import { useAppStore } from './modules/app'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const store = createPinia()
store.use(piniaPluginPersistedstate)

export { useAppStore }
export default store
