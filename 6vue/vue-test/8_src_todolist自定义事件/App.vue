import { json } from 'body-parser';
<template>
<div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 父给子传递数组和函数 -->
        <Header @receive="receive"></Header>
        <!-- change事件 仅适用于表单元素 元素的值改变时发生 change 事件 -->
        <List  :todos="todos" @change="checkTodo(todos.id)" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></List>
        <Footer  :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
// list包含item，所以光写list就行了
import List from './components/List.vue'
import Footer from './components/Footer.vue'
export default {
    name: 'App_app',

    data() {
        return {
          todos:JSON.parse(localStorage.getItem('todos'))||[]
            // todos:[
            //   {id:'001',title:'吃饭',done:true},
            //   {id:'002',title:'睡觉',done:true},
            //   {id:'003',title:'工作',done:false}
            // ]
        };
    },
    methods: {
      // 添加一个事项
        receive(todoObj){
          // console.log(todoObj);
          this.todos.unshift(todoObj);
        },
        // 再父组件中定义函数传到子组件，子组件想要传递参数，就将参数放到函数中传递回来，再将传递回来的参数放到数组的首行

        // 勾选or取消勾选
       // 传参 app--list--item
        checkTodo(id){
          // 遍历数组的每一项，如果id重合那么选项框就是需要更改的
          this.todos.forEach(todo => {
            if(todo.id==id){
              todo.done=!todo.done
            }
          });

        },


        // 删除todo,this.todos.id===id
        deleteTodo(id){
          this.todos=this.todos.filter((todo)=>{
            return todo.id!==id
          })
        },


        // 全选 全部不选
        checkAllTodo(done){
          this.todos.forEach((todo)=>{
            // 不管原来的done是什么，都赋值成全选框的done
            todo.done=done
          })
        },
        
        // 清除已完成的todo
        clearAllTodo(){
          return this.todos=this.todos.filter((todo)=>{
            return !todo.done
          })
        }
    
    },
    components:{
        Header,Footer,List
    },
    watch:{
      todos:{
        // 开启深度监视，让done也跟着改变
        deep:true,
        handler(newValue){
          localStorage.setItem("todos",JSON.stringify(newValue))
        }
      },
    }
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>