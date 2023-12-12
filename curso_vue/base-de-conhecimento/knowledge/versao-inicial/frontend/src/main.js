import 'font-awesome/css/font-awesome.css';
import Vue from 'vue'

import App from './App'

import './config/bootstrap';
import './config/msgs';
import store from './config/store';
import router from './config/router';

Vue.config.productionTip = false

// TEMPORÁRIO !
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikxlb25hcmRvIE0uIExlaXTDo28iLCJlbWFpbCI6Imxlb25hcmRvQGNvZDNyLmNvbS5iciIsImFkbWluIjp0cnVlLCJpYXQiOjE3MDIzMzk1MDgsImV4cCI6MTcwMjU5ODcwOH0.bbMWesZJQekgI_kbO_IFcrLXeOePeIe5gQspfFQpyyQ';

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')