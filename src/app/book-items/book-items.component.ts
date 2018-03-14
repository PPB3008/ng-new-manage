import { Component, OnInit,Input } from '@angular/core';
import { Book } from './books';
import { BookInfomationComponent } from '../book-infomation/book-infomation.component'
@Component({
  selector: 'app-book-items',
  templateUrl: './book-items.component.html',
  styleUrls: ['./book-items.component.css'],
  providers:[Book,BookInfomationComponent]
})
export class BookItemsComponent implements OnInit {
  public books=[];
  public generalID:number;
  picURL:string;
  @Input() name:string;
  @Input() ID:number;
  constructor(private Books:Book,private bookInfomationComponent:BookInfomationComponent) { 

  }

  itemClick(book){
    this.generalID=book.ID;
    for(let bookIndex in this.books){
      if(this.books[bookIndex].ID==this.generalID){
        this.bookInfomationComponent.getData(this.books[bookIndex].ID);
      }
    }
  }

  ngOnInit() {
    this.books=this.Books.getBooks();
  }

}
