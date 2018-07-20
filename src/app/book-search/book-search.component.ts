import { Component, OnInit,Input, OnDestroy} from '@angular/core';
import{ Lessons } from '../book-items/lessons'
import { BookItemsComponent } from '../book-items/book-items.component'
@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})


export class BookSearchComponent implements OnInit,OnDestroy {
	bookSearchname: string; 
	classChange: string;
	name: string;
	longerInput(){
	this.classChange="book-search-longer";
	}
	read() {
	// this.name=BookItemsComponent.book[0].name;
	}
  
	constructor() {
	console.log(this.bookSearchname);
	}
 
	ngOnInit(): void {
	}
	ngOnDestroy(): void {

	}

}
