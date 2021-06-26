import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VSwipe from './directives/v-swipe'

const app = createApp(App)

// Automatically import base components.
// prettier-ignore
const requireComponent = require.context('./components', true, /Base[A-Z]\w+\.(vue|js)$/)

// prettier-ignore
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  app.component(baseComponentName, baseComponentConfig)
})

app
  .use(store)
  .use(router)
  .use(VSwipe)
  .mount('#app')
