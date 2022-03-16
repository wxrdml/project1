var Food=require('./2-food')
module.exports={
    createMap(){
        console.log('create map...');
    },
    createFood(){
        // 在草场每创建一次食物，就new一个Food类的实例
        var food1=new Food({
            top:Math.random(),
            left:Math.random()
        });
        // 蛇吃完食物，会生成一个新的食物，在food下调用createfood
        console.log('create food...');
    }
}