## 显示隐藏配置文件
  vue inspect > ouput.js

## 关闭语法检查
  lintOnSave:false,

## ref
  用于给标签注册引用信息（id的替代者）
  注册：</school ref='ss'>
  使用：this.$refs.ss

## 传参props:[]父---子
  子组件：props接收外部参数（这个参数接收到vc中）
  父组件：在子组件使用时标签内传递参数
props:{name:String,age:Number}
props:{
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            default:99
        },
        sex:{
            type:String,
            required:true
        },
    },
type required default

  修改通过外部传递的参数props---不可修改 外部props参数值
  要是想修改
  外部参数优先级 高于 自己写死的data数据---新定义一个变量，让外部参数赋值给新变量，控制改变新变量

## mixin.js混入 混合--
  创建--多个组件中公用的方法和数据选择混合对外暴露：里面写生命钩子函数
  在需要的文件内--引入，使用---// 局部引入
  原则：冲突时，本身有的用本身，本身没有用混合
  在main.js内注册，引入，使用---// 全局引入

## 插件：对象必须包含install(Vue,){}
第一个参数是Vue，第二个以后的参数是插件使用者传递的数据（全局过滤器，全局指令 全局混入 实例方法）
在main文件下使用插件
应用插件：引入、使用
使用vm
vuecomponent.prototype.__proto__===vue.prototype
<!-- 给vue原型上添加一个方法，vm和vc就都能用了 -->


## scoped
样式，根据引入顺序，同样的类名样式会被覆盖
因此使用scoped，本文件下的样式仅仅负责本文件，与同目录下的其他的文件无关
lang='css' scoped
css less
脚手架依赖于webpack@5  less-loader@8 9
webpack4--less-loader7


## map foreach 遍历出已经做完的todos
reduce((pre，current)=>{},i)条件统计--数组:数组长度==遍历几次
第一次，pre是i；第二次，pre是第一次调用的返回值（return），以此类推

## 组件开发流程
拆分静态组件：按功能点
动态组件：数据存放位置---如果是一个组件在用，放在组件自身；一些组件在用，放在共同的父组件中（状态提升）
交互：绑定事件

## v-model不能是props传递的数据，因为props不可以修改
props传递的是对象类型的值，修改对象中的数据不会报错，但是不推荐这样做

## todolist刷新会丢失
watch：todos添加一个 删除一个都会存到本地存储localstorage

## 组件的自定义事件
props 【@ ref】-emit 传递函数三者：
绑定---触发
props父组件给子组件传递函数 props在子组件里接收父组件传递的函数

在父组件中给子组件绑定自定义事件，在子组件中触发，适合子组件给父组件传递（名字）
事件回调在父组件StudentName
emit和ref绑定一个自定义事件：
第一，v-on=或者@绑定自定义事件，第二用ref在组件中打个标识

第一，emit在子组件中触发事件xuesheng(this.$emit('xuesheng'))，在父组件中@事件名=‘事件’--在标签体中绑定事件StudentName
第二，emit在子组件中触发事件xuesheng，在父组件中，ref绑定组件，且在mounted拿到该组件实例对象（this.$refs.*）用on绑定事件名为xuesheng，为了触发StudentName事件，用第二种方法绑定的自定义事件的回调函数要不写在methods里 要不写在mounted 的箭头函数里

自定义事件的修饰符和内置事件修饰符一样

## 解绑事件
绑定---触发---解绑
在触发时间里解绑this.$off('xuesheng')
this.$off(['xuesheng','xuesheng'])
this.$off()
this.$destroy组件销毁，其自定义事件也会销毁，原生的dom事件不受影响，但是没有办法view显示

## 组件的内置事件
@click.native='show'
加上修饰符
把点击事件show当作内置事件 而不是自定义的


## 全局事件总线
x独立于组件外的,让所有组件都能使用
把x放在vue的原型prototype下--main.js所有组件都能看到
在各个组件的mounted上获取x，使用v-on（@） ref emit

让x使用on emit 方法，x必须是vc或者vm
vc---vue.extend
vm--beforeCreated

兄弟组件传递参数
用$on在总线中定义一个傀儡组件，配置组件，--收数据 mounted
用$emit触发组件，传递参数等等---发数据 methods

## todolist--bus
兄弟间传递item app
app--list--item:适用于bus


## 消息订阅与发布  -任意组件中使用（相比总线，总线属于vc内部，订阅发布属于引入第三方库）
订阅报纸--并且提供家庭住址
邮递员送报纸

订阅消息--提供消息名字--收数据subscribe(消息名，回调函数（消息名，参数）) mounted
此回调普通函数this指向undefined（或者回调函数写在methods里，然后在mounted使用），此回调箭头函数this指向vc，
发布消息--消息内容--发数据publish(消息名，参数)
安装pubsub-js -- 引入 -- 使用
同一频道就是消息名，跳到统一频道，再交互

销毁订阅beforedestroy，调动unsubscribe(subobj)方法
## 插槽
父组件向子组件确定位置插入html结构，，父--子
默认插槽：父子组件（子组件写slot，父组件定义slot的标签体内容）
具名插槽:父子组件（子组件的slot标上name属性，让父组件的标签也加slot属性）
作用域插槽：在子组件（slot标签内:chuancan='games'）把数据作为表达式传递给父组件(template组件内控制scope=‘haha’包裹元素)
<template v-slot:second>
子组件复用（数据）---父组件可以自己决定模板，只要用属性scope（slot-scope）接收参数就行


## 下划线_占位
订阅的回调函数参数，第一个是消息名字，第二个是数据，消息名字可以用下划线占位

## 编辑item标签
每个todo项都有一个isedit是否在编辑
--在编辑--input
--不在编辑--文字