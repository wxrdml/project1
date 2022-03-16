import Vue from 'vue';
import App from './App.vue';
// 混入全局引入
// import {mixin,huhe, hunhe} from './mixin'
// Vue.mixin(hunhe)
// Vue.mixin(mixin)
Vue.config.productionTip=false;
const app = new Vue({
    el: '#app',
    render: (h) => h(App),
});