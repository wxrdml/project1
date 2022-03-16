<template>
     <div id="root">
    <div>学校名称{{name}}</div>
    <div>学校地址{{address}}</div>
    <div>订阅者</div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
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
        // 消息的订阅者-收数据（消息名字，消息）
       const sbs=pubsub.subscribe('hello',function(NAME,data){
        console.log(NAME);
        console.log(data);
       })
    },
    beforeDestroy() {
        // 不在订阅就销毁
        pubsub.unsubscribe(this.sbs)
    },
};
</script>

<style scoped>

</style>