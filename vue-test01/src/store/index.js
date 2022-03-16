import { createStore } from 'vuex'

const store= createStore({
  state: {
    // data
    count:0,
  },
  getters: {
  },
  mutations: {
    // 异步操作，改变状态的函数，写在这
    // add(){
    //   this.$store.state.count++;
    // }二者都可
    add(state){
      state.count++;
    }
    // 调用$store.commit('add')
  },
  actions: {
  },
  modules: {
  },
  computed:{
    count(){
      return this.$store.state.count;
      // 上面直接写count就行，不用写$store.state.count;
    }
  }
})
export default store;
