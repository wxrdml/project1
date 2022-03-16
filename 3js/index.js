//console.log(123456)
//document.write('123456')
// function add(a,b){
//     return a+b;
// }
// function Math(){
//     return function(){
//         return a+b;
//     }
// }//声明math（），函数作为返回值
//module.exports=add;
//module.exports=Math;//函数名
//index.js定义 作为一个module导出


var Math=function(){//函数表达式
    return function(){
        return a+b;
    }
}
module.exports=function(){//Math
    return function(){
        return a+b;
    }
}