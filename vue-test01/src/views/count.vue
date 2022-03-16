<template>
    <div id="count">
        <!-- 取得公共数据count--vuex -->
        <button @click="$store.commit('add')">加一</button>
        <p>{{$store.state.count}}</p>
    </div>
</template>

<script>
import store from '../store/index.js'
export default {
    name: 'Project1Count',
    store
    // 简写 store:store
};
</script>

<style lang="scss" scoped>

</style>