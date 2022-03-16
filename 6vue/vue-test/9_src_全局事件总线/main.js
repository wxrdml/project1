import Vue from 'vue';
import App from './App.vue';
Vue.config.productionTip=false;
// 任何组件都能访问Vue的原型对象
// Vue.prototype.x={a:1,b:2};
// vc
// const demo=Vue.extend({})
// const d=new demo()
// Vue.prototype.x=d

// 创建vm
new Vue({
    el: '#app',
    render: (h) => h(App),
    // 安装全局事件总线 x---$bus
    beforeCreate(){
        // 此期间：无法访问数据和方法，其中this指向vm
        // 在vm上放一个x，这个x的值就是vm
        Vue.prototype.$bus=this
    }
});