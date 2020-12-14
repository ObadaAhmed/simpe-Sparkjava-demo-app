import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
  // options here
  dark : true
})

new Vue({
  render: h => h(App),
}).$mount('#app')
