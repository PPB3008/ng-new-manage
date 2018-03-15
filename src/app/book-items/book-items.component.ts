import { Component, OnInit,Input } from '@angular/core';
import { Book } from './books';
import { BookInfomationComponent } from '../book-infomation/book-infomation.component';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-book-items',
  templateUrl: './book-items.component.html',
  styleUrls: ['./book-items.component.css'],
  providers:[BookInfomationComponent,Book]
})
@Injectable()
export class BookItemsComponent implements OnInit {
  public books=[];
  public generalID:number;
  picURL:string;
  @Input() name:string;
  @Input() ID:number;
  constructor(public Books:Book,public bookInfomationComponent:BookInfomationComponent) { 

  }

  itemClick(book){
    this.generalID=book.ID;
    this.Books.changeState(book.ID);
    this.bookInfomationComponent.getData(book.ID,this.Books);
    
  //   this.books.filter(bookIn=>{
  //     (bookIn.ID==this.generalID)&&this.bookInfomationComponent.getData(bookIn.ID);
  // })
    // for(let bookIndex in this.books){
    //   if(this.books[bookIndex].ID==this.generalID){
    //     this.bookInfomationComponent.getData(this.Books);
    //     this.Books.state=this.books[bookIndex].ID;
    //     // console.log(this.Books.state);
    //   }
    // }
  }

  ngOnInit() {
    this.books=this.Books.getBooks();
  }

}
