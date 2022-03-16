<template>
  <div id="app">
    <Category title="美食">
      <!-- 此标签体内写内容，没有效果，因此用slot标签占位 -->
      <!-- <img src="./assets/logo.png" alt="" slot="first">
      <a href="http://www/baidu/com" slot="second">baidu</a> -->
      <template  scope="{food}">
        <!-- at是对象，可以使用花括号，解构赋值，在现在不用写at.games 直接写at 
        但是注意此时的解构赋值，不要和其他scope的属性值重了-->
        <ol slot="first">
          <li v-for="(f,index) in food" :key="index">{{f}}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template  scope="at">
        <ul slot="first">
          <li v-for="(g,index) in at.games" :key="index">{{g}}</li>
        </ul>
      </template>
      <!-- br hr换行不起作用，因此在外面套一层<div slot="second">，在div中操作元素---<template v-slot:second> 包裹元素，但是不显示一层结构 -->
      <!-- <div class="a" slot="second">
        <a href="http://www/baidu/com">baidu</a>
        <a href="http://www/baidu/com">xinlang</a>
      </div> -->
    </Category>
    <!-- <Category title="电影">
      <img src="./assets/logo.png" alt="" slot="first">
      <a href="http://www/baidu/com" slot="second">bilibili</a>
    </Category> -->
  </div>
</template>

<script>
import Category from './components/Category.vue';
export default {
  name: 'App',
  components: {
    Category
  },
  data(){
    return{
      // games:['chuan','yue','huo','xian']
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
}
.a{
  display: flex;
  justify-content: space-around;
}
a{
  display: flex;
  justify-content: space-around;
}
</style>
