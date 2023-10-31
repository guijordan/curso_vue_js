import App from './App';
import Vue from 'vue';

new Vue({
    render: h => h(App),
    // render(createElement){
    //     return createElement(App);
    // }
}).$mount("#app");