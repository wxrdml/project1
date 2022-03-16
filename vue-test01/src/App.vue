<template>
  <div id="app">
    <div id="nav">
    <!-- 导航入口：切换不同页面 to属性代表一个页面的路由地址-->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/course">课程分类</router-link>
    <router-link v-bind:to="{path:'/user' ,query:{name:'wxr',age:18}}">用户详情</router-link>
    <!-- <router-link v-bind:to="{name:'user' ,params:{name:'wxr',age:18}}">用户详情</router-link> -->
    <!-- 
      路由传参：
      1、path+query页面刷新后，参数不会丢失query
      2、name+params页面刷新后，参数会丢失params
      3、index.js中的path:' /details/:id/:price'，在app.vue里传参，页面刷新后，参数不会丢失params
     -->
    <router-link to="/details/1001/99">课程详情</router-link>
    <router-link to="/count">vuex-count</router-link>
    </div>
  </div>
  <router-view/>
  <!-- 占位，上面切换不同的地址，router-view显示不同地址的页面 -->
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
