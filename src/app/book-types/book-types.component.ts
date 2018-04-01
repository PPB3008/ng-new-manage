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
  private bookTypes;
  constructor(private BookTypes:BookTypes,private Book:Book) { }
  typeClick(types){
    
  }
  ngOnInit() {
    let typesSub=this.BookTypes.getTypes();
    typesSub.subscribe((data)=>this.bookTypes=data);
  }

}
