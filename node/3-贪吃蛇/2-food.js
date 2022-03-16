class Food{
    position={
        top:0,
        left:0,
    }
    constructor(position){
        this.position=position;
        console.log('food has created, left: '+position.top+',top: '+position.left);
    }
}
module.exports=Food;