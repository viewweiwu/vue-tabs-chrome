import Vue from 'vue'
import App from './App.vue'
import VueTabsChrome from '../packages'

Vue.use(VueTabsChrome)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
