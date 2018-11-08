import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { createStore } from 'redux'
import { counter } from './components/button-counter/counter'

Vue.config.productionTip = false

let store = createStore(counter)
console.log(store)
Vue.use(store)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
