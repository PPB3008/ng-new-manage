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
  public stateBook={ID:0,name:"",left:0,read:0,picURL:"",types:""};
  public books=[];
  public stateID=0;
  public ID=3;
  takeData(){
    this.books=this.Books.getBooks();
    this.books.filter(bookIn=>{
      (bookIn.ID==this.Books.state)&&(this.stateBook={ID:bookIn.ID,name:bookIn.name,left:bookIn.left,read:bookIn.read,picURL:bookIn.picURL,types:bookIn.types});
    })
      this.render();
      return;
  }

  getData(ID,Books){
    this.Books=Books;
    let stateID=ID;
    this.takeData();
  }

  render(){
    console.log(this.stateBook.types);
    document.querySelector(".book-info-type").innerHTML=this.stateBook.types;
    document.querySelector(".book-info-title").innerHTML=this.stateBook.name;
    document.querySelector(".book-info-ID").innerHTML=this.stateBook.ID.toString();
    document.querySelector(".book-info-left").innerHTML=this.stateBook.left.toString();
    document.querySelector(".book-info-read").innerHTML=this.stateBook.read.toString();
    
    document.querySelector(".book-info-img-de").setAttribute("src",this.stateBook.picURL);  
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
