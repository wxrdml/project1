<template>
    <div id="user">
        <h1>用户详情页面</h1>
        <p>姓名：{{$route.query.name}}</p>
        <p>年龄：{{$route.query.age}}</p>
        <!-- 取得路由参数 -->
        <!-- <p>姓名：{{$route.params.name}}</p>
        <p>年龄：{{$route.params.age}}</p> -->
        
    </div>
</template>

<script>
import store from '../store/index.js'
export default {
    name: 'Project1User',
    // store：store;
    // 简写  store
    store,
    data() {
        return {
            params:this.$route.query
            // 从query里面取出来放到params
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>