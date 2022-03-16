<template>
    <div class="todo-footer" v-show="todos.length">
          <label>
            <input type="checkbox" :checked="isAll" @click="checkAll"/>
          </label>
          <span> <span>已完成{{todoDone}}</span> / 全部{{todos.length}} </span>
          <!-- null.length报错 空数组.length -->
          <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
        </div>
</template>

<script>
export default {
    name: 'Footer',
    props:[ "todos"],
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        // todoDone(){
        //   let i=0;
        //   this.todos.forEach(todo => {
        //     if(todo.done){
        //       i++;
        //     }
        //   });
        //   return i;
        // }
        checkAll(e){
          // e.target.checked就是每个数组元素的done值
          // this. checkAllTodo(e.target.checked)
          this.$emit('checkAllTodo',e.target.checked)
        },
        clearAll(){
          // this.clearAllTodo()
          this.$emit('clearAllTodo')
        }
    },
    computed:{
      todoDone(){
        return this.todos.reduce((pre,current)=>pre+(current.done?1:0),0)
      },
      isAll(){
        return this.todos.length===this.todoDone&&this.todos.length>0
        // checked勾选==true  取消购销==false
      }
    }
};
</script>

<style lang="scss" scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>