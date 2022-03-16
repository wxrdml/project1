<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="$router.back()">后退一步</button>
    <button @click="$router.forward()">前进一步</button>
    <button @click="$router.go(-2)">后退两步</button>
    <button @click="goTo">跳转页面</button>
    <p>count:{{$store.state.count}}</p>
  </div>
</template>
<script>
import store from '../store/index'
export default {
  store,
  methods: {
    goTo(){
      this.$router.push({
        // push方法只能用第一种方法传参数,后两种为啥不对呢
        path:'/user',
        query:{name:'wangxinrui' ,age:22}
      });
      // this.$router.push({name:'user',params:{name:'ww',age:10}});
      //  this.$router.push('/user/:"uu"/:100');
    }
  },
  beforeRouteEnter (to, from, next) {
    // 导航守卫，在进行逻辑判断后，在进入页面，一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
    // 在进入路由之前 to去哪  from从哪来 
    console.log('to:'+to,'from:'+from,'next:'+next);
    next();
  }
}
// 过渡模式transition
// 1、在templates标签内写transition标签，让谁过渡谁就写在transition标签体内
// v-enter  v-enter-active  v-enter-to 
</script>
<style scoped>
/* 2、此处引入css样式代码 */
  /* @import 'https://cssyangshi'; */
</style>
