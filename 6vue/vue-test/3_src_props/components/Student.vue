<template>
    <div>
        <h1 v-text="msg"></h1>
        <div>{{name}}</div>
        <!-- 此时的age是字符串，可以强制类型转换 -->
        <!-- <div>{{age*1+1}}</div> -->
        <div >{{myAge+1}}</div>
        <div>{{sex}}</div>
        <button @click="AddAge">点我年龄加一</button>
    </div>
</template>

<script>
export default {
    name: 'Student-haha',

    data() {
        return {
            // name:'wxr',
            // age:20,
            // sex:'female',
            msg:'欢迎你！',
            myAge:this.age
        };
    },
    // 简单声明接受
    // props:["name","age","sex"],
    // 接受的同时进行数据类型限制
//    props:{
//         // kv形式
//         "name":String,
//         age:Number,
//         sex:String,
//     },
// 接受数据的同时，类型限制 默认值指定 必要性显示
    props:{
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            default:99
        },
        sex:{
            type:String,
            required:true
        },
    },
    mounted() {
        
    },

    methods: {
        AddAge(){
            this.myAge++
        }
    },
};
</script>

<style scoped>

</style>