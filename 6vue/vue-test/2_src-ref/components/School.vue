<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDom">点我输出上方的dom</button>
        <div>{{name}}</div>
        <div>{{address}}</div>
    </div>
</template>

<script>
export default {
    name: 'School-haha',

    data() {
        return {
            name:'一中',
            address:'天津',
            msg:'欢迎你！'
        };
    },

    mounted() {
        
    },

    methods: {
        showDom(){
            // 给哪个标签加上的ref，就可以拿到该标签
            // 该组件的h1的实例对象
            console.log(this.$refs.title);
        }
    },
};
</script>

<style scoped>

</style>