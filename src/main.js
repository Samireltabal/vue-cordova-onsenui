import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCordova from 'vue-cordova'

import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

Vue.use(VueOnsen)
Vue.use(VueCordova)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
