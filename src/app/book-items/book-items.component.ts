import { Component, OnInit,Input } from '@angular/core';
import {Book} from './books'
@Component({
  selector: 'app-book-items',
  templateUrl: './book-items.component.html',
  styleUrls: ['./book-items.component.css']
})
export class BookItemsComponent implements OnInit {
  books=[];
  @Input() name:string;
  @Input() ID:number;
  @Input() srcnum:number;
  constructor() { 
    this.books=[
      new Book("angular",12333,3058,"..\assets\images\working-with-data-in-wordpress-introduction-database-tables.jpg"),
      new Book("angular2",12335,1207,"..\assets\images\working-with-data-in-wordpress-introduction-database-tables.jpg"),
      new Book("angular3",12337,2636,"..\assets\images\working-with-data-in-wordpress-introduction-database-tables.jpg")
    ]
  }

  ngOnInit() {
    // document.querySelector("img").setAttribute("src",this.books[this.srcnum].picURL)
  }

}
