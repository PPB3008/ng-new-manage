import { Injectable } from '@angular/core';
@Injectable()
export class Book {

    books: Array<{  name:string,ID:number,read:number,picURL:string,left:number}> = [
            {name:"iangular", ID:12333,read:3058,picURL:"../assets/images/working-with-data-in-wordpress-introduction-database-tables.jpg",left:50},
            {name:"iangular2",ID:12335,read:1207,picURL:"../assets/images/working-with-data-in-wordpress-introduction-database-tables.jpg",left:12},
            {name:"iangular3",ID:12337,read:2636,picURL:"../assets/images/working-with-data-in-wordpress-introduction-database-tables.jpg",left:10}
    ];

    public state:0;
    getBooks() {
        return this.books;
    }
    changeState(state){
        this.state=state;
    }
    constructor(){
    }
}