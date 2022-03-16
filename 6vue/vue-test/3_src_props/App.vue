<template>
    <div>
        <!-- 此时的age是字符串90，加个冒号，按照表达式运算 -->
        <Student name="王五" :age="90" sex="male"></Student><hr/>
        <!-- <Student name="王五" :age="90" sex="male"></Student><hr/>
        <Student name="王五" sex="male"></Student> -->
    </div>
</template>

<script>
import Student from './components/Student.vue'
export default {
    name: 'App_app',

    data() {
        return {
            
        };
    },
    mounted() {
        
    },

    methods: {
        
    },
    components:{
        Student
    }
};
</script>

<style scoped>

</style>