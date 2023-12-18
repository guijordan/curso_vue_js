import 'font-awesome/css/font-awesome.css';
import Vue from 'vue'

import App from './App'

import './config/bootstrap';
import './config/msgs';
import store from './config/store';
import router from './config/router';

Vue.config.productionTip = false

// TEMPORÁRIO !
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikxlb25hcmRvIE0uIExlaXTDo28iLCJlbWFpbCI6Imxlb25hcmRvQGNvZDNyLmNvbS5iciIsImFkbWluIjp0cnVlLCJpYXQiOjE3MDI5MzY5NzgsImV4cCI6MTcwMzE5NjE3OH0.tysDUkQDc8zXLQDcw8ab5LEeCCI1Kn4FU5NYBL7awBo';

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')