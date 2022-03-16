<template>
    <div>
        <div>学生名字{{studentName}}</div>
        <div>学生年龄{{age}}</div>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data(){
        return{
            studentName:"www", 
            age:30
        }
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>