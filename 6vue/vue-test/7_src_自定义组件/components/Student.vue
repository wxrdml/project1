<template>
    <div>
        <h1 v-text="msg"></h1>
        <div>{{name}}</div>
        <!-- 此时的age是字符串，可以强制类型转换 -->
        <div>{{age*1+1}}</div>
        <button @click="sendstudentNametoApp">把学生姓名发送给App</button>
        <button @click="unbind">不给发送名字</button>
    </div>
</template>

<script>
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
        sendstudentNametoApp(){
            // 触发student组件实例身上的事件
            this.$emit('xuesheng',this.name)
        },
        unbind(){
            this.$off('xuesheng')
            // this.$off(['xuesheng','demo'])解绑两个事件
            // this.$off()所有事件都是解绑
        }
        // this.$destroy当组件实例对象destroy后，原声的dom事件都能调用，但是实例和实例的自定义事件也会destroy
    },
};
</script>

<style scoped>

</style>