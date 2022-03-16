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
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang='less' scoped>
div{
    background: pink;
}
</style>