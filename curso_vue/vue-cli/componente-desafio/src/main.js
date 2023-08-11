import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

import Cabecalho from '@/components/template/Cabecalho';
import Conteudo from '@/components/widgets/Conteudo';
import Menu from '@/components/template/Menu';
import Rodape from './components/template/Rodape';

//@ é utilizado para acessaro caminho absoluto. o @ é a pasta src.

Vue.component('app-cabecalho', Cabecalho);
Vue.component('app-conteudo', Conteudo);
Vue.component('app-menu', Menu);
Vue.component('app-rodape', Rodape);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
