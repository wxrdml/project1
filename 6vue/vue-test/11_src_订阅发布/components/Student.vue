<template>
    <div>
        <h1 v-text="msg"></h1>
        <div>{{name}}</div>
        <!-- 此时的age是字符串，可以强制类型转换 -->
        <div>{{age*1+1}}</div>
        <div>发布者</div>
        <button @click="sendStudentNametoSchool">把学生姓名给学校</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'Student-haha',

    data() {
        return {
            name:'wxr',
            age:20,
            msg:'欢迎你！'
        };
    },
    methods: {
        sendStudentNametoSchool(){
            // 消息发布者--发数据 消息名字，消息内容
            pubsub.publish('hello',this.msg)
        }
    },
    mounted() {
        // console.log('student',this.x)
    },
};
</script>

<style scoped>

</style>