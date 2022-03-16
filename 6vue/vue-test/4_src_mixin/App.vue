<template>
    <div>
        <!-- 此时的age是字符串90，加个冒号，按照表达式运算 -->
        <Student></Student><hr/>
        <Student></Student><hr/>
        <School></School>
    </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'
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
        Student,
        School
    }
};
</script>

<style scoped>

</style>