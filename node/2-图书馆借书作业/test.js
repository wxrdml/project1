// 将四个模块引入
var p=require('./2-Person');//Person
var b=require('./1-Book')
var l=require('./3-图书馆')
var lm=require('./4-图书馆管理');
const Person = require('./2-Person');
const Book = require('./1-Book');
const Library = require('./3-图书馆');
const libraryManage = require('./4-图书馆管理');


// 给四个类赋值
var person=new Person('wxr','123456');
var book=new Book('红楼',108)
var library=new Library('学府书店','学府路')
var libraryMge=new libraryManage();
libraryMge.register(person,book);