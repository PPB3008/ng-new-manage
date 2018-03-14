import { Component, OnInit, Input ,Output  } from '@angular/core';
import { Book } from '../book-items/books';
import {BookItemsComponent} from '../book-items/book-items.component';
@Component({
  selector: 'app-book-infomation',
  templateUrl: './book-infomation.component.html',
  styleUrls: ['./book-infomation.component.css']
})
export class BookInfomationComponent implements OnInit {
  ID:number=0;
  name:string="";
  left:number=0;
  read:number=0;
  src:string="";
  test=111;
  books=[];
  test1(){
    this.test++;
    console.log(this.test);
    this.src=this.books[1].picURL;
  }
  getData(ID:number){
    this.books=this.info_book.getBooks();
    for(let bookIndex in this.books){
      if(this.books[bookIndex].ID==ID){
        this.ID=this.books[bookIndex].ID;
        this.name=this.books[bookIndex].name;
        this.left=this.books[bookIndex].left;
        this.read=this.books[bookIndex].read;
        this.src=this.books[bookIndex].picURL;
        console.log(this.name);
        this.test1()  //=>作用域
      }
    }
  }
  t1(){
    setInterval(()=>{console.log(this.test+"test!",this.books)},10000);
  }
  
  constructor(private info_book:Book) {
    
      // this.getData();
  }
  ngOnInit() {
    this.t1();
  }
  ngOnchange(){

  }

}
