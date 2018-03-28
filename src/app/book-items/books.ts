import { Injectable } from '@angular/core';
import { BookTypes } from '../book-types/book-types';
import { Component,OnInit } from '@angular/core';
@Component({
    providers:[BookTypes]
  })

@Injectable()
export class Book {
    public types=[];
    books: Array<{name:string,ID:number,read:number,picURL:string,left:number,types:string}> = [
            {name:"iangular", ID:12333,read:3058,picURL:"../assets/images/working-with-data-in-wordpress-introduction-database-tables.jpg",left:50,types:"A"},
            {name:"iangular2",ID:12335,read:1207,picURL:"../assets/images/working-with-data-in-wordpress-introduction-database-tables.jpg",left:12,types:"C"},
            {name:"iangular3",ID:12337,read:2636,picURL:"../assets/images/working-with-data-in-wordpress-introduction-database-tables.jpg",left:10,types:"D"},
            {name:"iangular4",ID:12338,read:263,picURL:"../assets/images/working-with-data-in-wordpress-introduction-database-tables.jpg",left:10,types:"non"}
    ];

    public state:0;
    getBooks() {
        return this.books;
    }

    changeState(state){
        this.state=state;
    }
    constructor(public BookTypes:BookTypes){
    }
    ngOninit(){
        this.types=this.BookTypes.getTypes();
            for(let typeItem in this.types){
                Array.prototype.forEach.call(this.books,BookItem=>{
                    this.types[typeItem].typeID==BookItem.types?BookItem.types=this.types[typeItem].typeName:this.books.splice(this.books.indexOf(BookItem),1);
                })
            }
    }
}