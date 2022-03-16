<template>
    <div>
        <h1 v-text="msg"></h1>
        <div @click="showName">{{name}}</div>
        <!-- 此时的age是字符串，可以强制类型转换 -->
        <div>{{age*1+1}}</div>
        <div>{{sex}}</div>
    </div>
</template>

<script>
// 局部引入
import {mixin} from '../mixin'
export default {
    name: 'Student-haha',

    data() {
        return {
            name:'wxr',
            age:20,
            sex:'female',
            msg:'欢迎你！',
            myAge:this.age
        };
    },
    mixins: [mixin],
    mounted() {
        
    },

    methods: {

    },
};
</script>

<style scoped>

</style>