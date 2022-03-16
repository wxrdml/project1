<template>
  <div id="root">
    <div>学校名称{{schoolName}}</div>
    <div>学校地址{{address}}</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            schoolName:'XXX',
            address:'BBBB',
        }
    },
    name:'hahah',

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.root{
    background: pink;
}
</style>