import 'font-awesome/css/font-awesome.css';
import Vue from 'vue'

import App from './App'

import './config/bootstrap';
import store from './config/store';
import router from './config/router';

Vue.config.productionTip = false

// TEMPORÁRIO !
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikxlb25hcmRvIE0uIExlaXTDo28iLCJlbWFpbCI6Imxlb25hcmRvQGNvZDNyLmNvbS5iciIsImFkbWluIjp0cnVlLCJpYXQiOjE3MDE4MjMzODMsImV4cCI6MTcwMjA4MjU4M30.qwQC1-tJmHuNJK_9YrsSPU82uZHpZWthIdcR89utnIM';

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')