<template>
    <div class="todo-header">
        <!-- keyup:键盘按下+回上----触发事件  enter按下回车才出发键盘事件 -->
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" v-model="title"/>
    </div>
</template>

<script>
// nanoid采用的是分别暴露的方式，所以使用花括号进行引入
import {nanoid} from 'nanoid'
export default {
  name: "Header",

  data() {
    return {
        title:''
    };
  },

  mounted() {},
    // props:['receive'],
  methods: {
    add(event){
        // 1 console.log(event.target.value);
        // 获取输入框内容
        // 2 双向绑定
        // console.log(this.title);

        // uuid生成全球唯一id，引入库，引入就行
        // 将用户的输入包装成一个tobj对象------交给数组里，放在list组件展示
        // 这两个组件是兄弟组件：通过父组件交互
        const todoObj={id:nanoid(),title:this.title,done:false}
        // this.receive(todoObj)
        this.$emit('receive',todoObj)
        // 添加完数组后，让header的输入框为空,两个方法
        // event.target.value=''
        this.title=''
    },
  },
};
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>