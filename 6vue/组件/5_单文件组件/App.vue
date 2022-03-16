<template>
    <div>
        <school></school>
        <student></student>
    </div>
</template>

<script>
// 创建引用使用
import school from '../../../组件/5_单文件组件/School.vue'
import student from '../../../组件/5_单文件组件/Student.vue'
export default {
    name: 'App',
    components:{
        school,student
    },
};
</script>

<style lang="scss" scoped>

</style>