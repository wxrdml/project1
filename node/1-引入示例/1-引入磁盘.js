let fs=require('fs');
// fs==file system 对磁盘文件进行操作的模块
fs.readFile('./a.txt','utf8',function(err,data){
    console.log(data);//undefined
});
// 同于一目录下./  不同目录下../
// 读出文件赋给一个变量
console.log(111);//先输出
// 如何使用系统模块，，如何自定义、调用一个模块
// 1、html文件引入两个js文件
// 2、模块化的调用
// function add(a,b){
//     console.log(a+b);
// }
// export default{
//     add:function(a,b){
//         return a+b;
//     }
// }
// 定义模块：希望此段代码被重用（就把他export）
module.exports={
    add:function(a,b){
        return a+b;
    }
}