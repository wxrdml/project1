<template>
     <div id="root">
    <div>学校名称{{name}}</div>
    <div>学校地址{{address}}</div>
    <button  @click="sendschoolNametoApp">把学校名字发送给app</button>
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
    props:["SchoolName"],
    name:'School-hah',
    methods: {
        sendschoolNametoApp(){
            this.SchoolName(this.name)
        }
    },
};
</script>

<style scoped>

</style>