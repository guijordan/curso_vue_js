import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';
import Menu from './Menu';
import Rodape from './Rodape';

Vue.component('app-cabecalho', Cabecalho);
Vue.component('app-conteudo', Conteudo);
Vue.component('app-menu', Menu);
Vue.component('app-rodape', Rodape);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
