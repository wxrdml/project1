<template>
  <li>
    <label>
      <!-- 初始化：判断每件事是否完成，使用checked -->
      <!-- 变动交互：当勾选时 true，同时修改状态
      @click="handleCheck(chuancan.id)
       -->
      <input type="checkbox" :checked="chuancan.done" @change="handleCheck(chuancan.id)" :checkTodo="checkTodo"/>
      <span>{{chuancan.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(chuancan.id)">删除</button>
  </li>
</template>
<!-- 
  list:[{id:,name:,},{},{}]
  要做的事就是list，每件事情就是一个对象，每个对象包含多个kv属性
 -->
<script>
export default {
  name: "Item",
  // 子组件 声明接收tobj对象
  // chuancan是props接受的数据，此数据是包裹成的对象
  // props最好不要修改：obj.a=1不能监测修改（v-model=‘chuancan.done’），，obj={a=1,b=1}能监测修改
  props:["chuancan",'checkTodo','deleteTodo'],
  methods: {
    // 勾选框
    handleCheck(id){
      // 数据在哪，就在哪对他进行操作
      this.checkTodo(id)
    },
    // 删除
    handleDelete(id){
      if(confirm('你确认吗？')){
        // 数据和函数要加this指向vc
        this.deleteTodo(id)
      }
    }

  },
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background: #ddd;
}
li:hover button{
  display: block;
}
</style>