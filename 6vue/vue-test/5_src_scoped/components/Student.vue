<template>
    <div>
        <h1 v-text="msg"></h1>
        <div>{{name}}</div>
        <!-- 此时的age是字符串，可以强制类型转换 -->
        <div>{{age*1+1}}</div>
        <div>{{sex}}</div>
    </div>
</template>

<script>
export default {
    name: 'Student-haha',

    data() {
        return {
            name:'wxr',
            age:20,
            sex:'female',
            msg:'欢迎你！',
        };
    },
    mounted() {
        
    },

    methods: {

    },
};
</script>

<style scoped>

</style>