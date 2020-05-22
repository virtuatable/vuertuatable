import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import i18n from './i18n'

import './vee-validate.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate: () => store.commit('initialize'),
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
