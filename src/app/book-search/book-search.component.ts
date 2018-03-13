import { Component, OnInit,Input} from '@angular/core';
import{ Book } from '../book-items/books'
import { BookItemsComponent } from '../book-items/book-items.component'
@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})


export class BookSearchComponent implements OnInit {
  bookSearchname:string; 
  classChange:string;
  name:string;
  longerInput(){
    this.classChange="book-search-longer";
  }
  read() {
    // this.name=BookItemsComponent.book[0].name;
  }
  
  constructor() {
    console.log(this.bookSearchname);
   }

  ngOnInit() {
  }

}
