import { Component, OnInit, Input ,Output  } from '@angular/core';
import { Book } from '../book-items/books';
import { BookItemsComponent } from '../book-items/book-items.component';
import { ChangeDetectorRef } from '@angular/core';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-book-infomation',
  templateUrl: './book-infomation.component.html',
  styleUrls: ['./book-infomation.component.css'],
})

@Injectable()
export class BookInfomationComponent implements OnInit {
  public Books;
  public stateBook={ID:0,name:"",left:0,read:0,src:""};
  public books=[];
  public stateID=0;
  public ID=3;
  takeData(){
    this.books=this.Books.getBooks();
    this.books.filter(bookIn=>{
      (bookIn.ID==this.Books.state)&&(this.stateBook={ID:bookIn.ID,name:bookIn.name,left:bookIn.left,read:bookIn.read,src:bookIn.src});
    })
      this.ref.reattach();
      this.render();
      return;
  }

  getData(ID,Books){
    this.Books=Books;
    let stateID=ID;
    this.takeData();
  }

  render(){
    console.log(this.stateBook.name);
    let info_nodes=document.querySelector(".book-info-title");
    info_nodes.innerHTML=this.stateBook.name;
    // Array.prototype.forEach.call((ele)=>{
    //   ele.innerHTML=
    // });
  }
  t1(){
    setInterval(()=>{console.log(this.info_book.state+"test!")},5000);
  }
  
  constructor(private info_book:Book,private ref: ChangeDetectorRef) {

  }
  ngOnInit() {
    
  }
  ngDoCheck(){

  }
}
