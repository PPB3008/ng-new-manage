import { Component, OnInit, Input ,Output ,OnChanges  } from '@angular/core';
import { Book } from '../book-items/books';
import { BookItemsComponent } from '../book-items/book-items.component';
import { ChangeDetectorRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-book-infomation',
  templateUrl: './book-infomation.component.html',
  styleUrls: ['./book-infomation.component.css']
})

@Injectable()

export class BookInfomationComponent implements OnInit {
  @Input() useCollect:string = "";
  public Books;
  public stateBook={ID:0,name:"",left:0,read:0,picURL:"",types:""};
  public books=[];
  public stateID=0;
  public ID=3;
  public collectState;
  
  takeData(){
    this.books=this.Books.getBooks();
    this.books.filter(bookIn=>{
      (bookIn.ID==this.Books.state)&&(this.stateBook={ID:bookIn.ID,name:bookIn.name,left:bookIn.left,read:bookIn.read,picURL:bookIn.picURL,types:bookIn.types});
    })
      this.render();
      return;
  }

  getData(ID,Books){
    // this.collectState=collectState;
    this.Books=Books;
    let stateID=ID;
    this.takeData();
  }

  render(){
    document.querySelector(".book-info-type").innerHTML=this.stateBook.types;
    document.querySelector(".book-info-title").innerHTML=this.stateBook.name;
    document.querySelector(".book-info-ID").innerHTML=this.stateBook.ID.toString();
    document.querySelector(".book-info-left").innerHTML=this.stateBook.left.toString();
    document.querySelector(".book-info-read").innerHTML=this.stateBook.read.toString();
    
    document.querySelector(".book-info-img-de").setAttribute("src",this.stateBook.picURL);
    console.log(this.useCollect);  
  }
  t1(){
    setInterval(()=>{console.log(this.info_book.state+"test!")},5000);
  }
  
  constructor(private info_book:Book,
    private ref: ChangeDetectorRef,
    private http:HttpClient) {

  }
  ngOnInit() {
    
  }
  ngOnChanges(){
  }
}
