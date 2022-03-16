const ground = require("./3-ground");

class Snake{
    speed=1;
    direction='right';
    constructor(){
        console.log('snake created...');
    }
    // constructor(speed,direction){
    //     this.speed=speed;
    //     this.direction=direction;
    // };
    eating(){
        console.log('eating...');
        // var ground=new Ground();
        ground.createFood();
    };
    moving(){
        console.log('moving...');
    }
    growing(){
        console.log('growing...');
    }
    dying(){
        console.log('died...');
    }
}
module.exports=Snake;