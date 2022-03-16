const Snake = require('./1-snake');
var food=require('./2-food')
var ground=require('./3-ground');
const Game = require('./4-game');

ground.createMap();
var snake1=new Snake();

ground.createFood();

var game1=new Game();
game1.start();

snake1.moving();
snake1.eating();
snake1.dying();