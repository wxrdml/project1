<template>
    <div>
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
            SName:''
        };
    },
    methods: {
    },
    mounted(){
    },
    components:{
        Student,
        School
    }
};
</script>

<style scoped>

</style>