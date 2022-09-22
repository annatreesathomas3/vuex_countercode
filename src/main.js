import Vue from 'vue'
import App from './App.vue'
import store from './store';
// import getters from './store'

Vue.config.productionTip = false

new Vue({
  store,
  // getters,
  render: h => h(App),
}).$mount('#app')
