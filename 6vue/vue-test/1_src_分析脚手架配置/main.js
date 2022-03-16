import Vue from 'vue'
// 残缺版vue：runtime，没有模板解析器
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 箭头函数和普通函数
  // render(createElement){
    // return createElement('h2','你好')
  // }
}).$mount('#app')
// render函数：帮忙渲染页面app，因为引入的vue是精简版