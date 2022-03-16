// let a=9,b=1;
// console.log(add(a+b));

// import math from './1_fs.js'
let math=require('./1-引入磁盘.js')
let a=9,b=1;
// 也就是让math=export的函数{
//     add:function(a,b){
//         return a+b;
//     }
// }
console.log(math.add(a,b))