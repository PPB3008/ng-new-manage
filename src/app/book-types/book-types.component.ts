import { Component, OnInit } from '@angular/core';
import { BookTypes } from './book-types';
import { Book } from '../book-items/books';
import { bookTypesRouting } from './book-types-routing';
@Component({
  selector: 'app-book-types',
  templateUrl: './book-types.component.html',
  styleUrls: ['./book-types.component.css'],
})

export class BookTypesComponent implements OnInit {
  bookTypes=[];
  constructor(private BookTypes:BookTypes,private Book:Book) { }
  typeClick(types){
    
  }
  ngOnInit() {
    this.bookTypes=this.BookTypes.getTypes();
  }

}
