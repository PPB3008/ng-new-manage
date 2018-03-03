import { Component, OnInit,Input } from '@angular/core';
import {Book} from './books'
@Component({
  selector: 'app-book-items',
  templateUrl: './book-items.component.html',
  styleUrls: ['./book-items.component.css']
})
export class BookItemsComponent implements OnInit {
  public books=[];
  public generalID:number;
  picURL:string;
  @Input() name:string;
  @Input() ID:number;
  constructor() { 
    this.books=[
      new Book("angular",12333,3058,"..\assets\images\working-with-data-in-wordpress-introduction-database-tables.jpg",50),
      new Book("angular2",12335,1207,"..\assets\images\working-with-data-in-wordpress-introduction-database-tables.jpg",12),
      new Book("angular3",12337,2636,"..\assets\images\working-with-data-in-wordpress-introduction-database-tables.jpg",10)
    ]
  }
  setSrc(){
    document.querySelector("")
  }
  itemClick(book){
    this.generalID=book.ID;
    for(let bookIndex in this.books){
      if(this.books[bookIndex].ID==this.generalID){
        console.log(this.books[bookIndex]);
      }
    }
  }

  ngOnInit() {
    // document.querySelector("img").setAttribute("src",this.books[this.srcnum].picURL)
  }

}
