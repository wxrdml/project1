<template>
     <div id="root">
    <div @click="showName">学校名称{{name}}</div>
    <div>学校地址{{address}}</div>
  </div>
</template>

<script>
// 局部引入
import {mixin,hunhe} from '../mixin'
export default {
    data(){
        return{
            name:'XXX',
            address:'BBBB',
        }
    },
    name:'School-hah',
    mixins:[mixin,hunhe],
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

</style>