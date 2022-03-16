<template>
    <div id="category">
        <!-- 默认插槽 -->
        <h3>{{title}}分类</h3>
        <!-- <ul>
            <li title="美食">1</li>
        </ul> -->
        <!-- 如果父组件不向插槽里放东西，那么插槽标签体内就会出现 -->
        <!-- <slot name="first">如果父组件不向插槽里放东西，那么插槽标签体内就会出</slot>
        <slot name="second">如果父组件不向插槽里放东西，那么插槽标签体内就会出</slot> -->
        <slot :games="games" :food="food">默认内容</slot>
    </div>
</template>

<script>
export default {
    name: 'Project1Category',
props:['title'],
    data() {
        return {
            games:['chuan','yue','huo','xian'],
            food:['guo','bao','rou']
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
#category{
    width: 200px;
    height: 300px;
    background: pink;
}
h3{
    text-align: center;
    background: orange;
}
img{
    width: 200px;
    height: 150px;
}
</style>