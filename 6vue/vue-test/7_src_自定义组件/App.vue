<template>
    <div>
        <!-- <Student v-on:xuesheng="StudentName"></Student><hr/> -->
        <!-- 
            自定义事件：给谁绑定事件，就在哪触发事件
            v-on给student的实例对象vc绑定事件xuesheng，只要xuesheng事件被触发了，就调用StudentName
            @xuesheng="StudentName"
         -->
        <h2>学生的名字：{{SName}}</h2>
         <Student ref="student" @click.native="show"></Student><hr/>
         <!-- 
            ref绑定该组件的实例对象，on定义该组件的触发事件和名字
          -->

        <School :SchoolName="SchoolName"></School>
        <!-- 
            插值语法的来源：data props computed
         -->
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
        SchoolName(name){
            console.log("schoolname:"+name);
        },
        // StudentName(name){
        //     console.log('studentName:'+name);
        //     this.SName=name
        // }
        // 正确，显示学生姓名到页面
        show(){
            // 加上修饰符把show当作内置点击事件
            console.log('123')
        }
    },
    mounted(){
        // on：在事件名为xuesheng时，触发StudentName事件
        // this.$refs.student.$on('xuesheng',this.StudentName)
        this.$refs.student.$on('xuesheng',function(name){
            console.log('studentName:'+name);
            this.SName=name
            // 错误，此时this指向是student
        })
        this.$refs.student.$on('xuesheng',(name)=>{
            console.log('studentName:'+name);
            this.SName=name
            // 正确，此时this指向是App
        })

        // this.StudentName中的this原本指向触发事件的组件student，因为method定义了该事件所以把this指向改为了app

    },
    components:{
        Student,
        School
    }
};
</script>

<style scoped>

</style>