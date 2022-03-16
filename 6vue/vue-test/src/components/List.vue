<template>
  <ul class="todo-main">
    <Item
      v-for="tobj in todos"
      :key="tobj.id"
      :chuancan="tobj"
    ></Item>
  </ul>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "List",
  // 给父组件
  // data() {
  //     return {
  //         todos:[
  //           {id:'001',title:'吃饭',done:true},
  //           {id:'002',title:'睡觉',done:true},
  //           {id:'003',title:'工作',done:false}
  //         ]
  //     };
  // },
  props: ["todos"],
  components: {
    Item,
  },
};
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>