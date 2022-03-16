class libraryManage{
    register(person,book) {
        console.log(11111);
        console.log(`我是${this.person.name},在图书馆借阅了${this.book.bookName}`);
        //这里为什么找不到person的属性name呢
        // console.log('我是'+person.name+'在图书馆借阅了'+book.bookName);
    }
}
module.exports=libraryManage;