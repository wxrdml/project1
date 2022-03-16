<template>
     <div id="root">
    <div>学校名称{{name}}</div>
    <div>学校地址{{address}}</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name:'XXX',
            address:'BBBB',
        }
    },
    name:'School-hah',
    methods: {
    },
    mounted(){
        console.log('school',this.$bus);
        // 给事件总线绑定hello事件，传递参数是data
        this.$bus.$on('hello',(data)=>{
            console.log('拿到了学生姓名是：',data);
        })
        // x={a=1,b=2}上没有$on 
        // 把x变成一个组件vc，组件身上有$on
    },
    beforeDestroy() {
        // 用完事件hello（傀儡），销毁
        this.$bus.$off('hello')
    },
};
</script>

<style scoped>

</style>