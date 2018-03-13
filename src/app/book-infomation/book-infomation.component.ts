import { Component, OnInit } from '@angular/core';
import {Book} from '../book-items/books';
import {BookItemsComponent} from '../book-items/book-items.component';
@Component({
  selector: 'app-book-infomation',
  templateUrl: './book-infomation.component.html',
  styleUrls: ['./book-infomation.component.css']
})
export class BookInfomationComponent implements OnInit {
  public generalPicURL:string;
  public bookName:string;
  public bookDescrib:string;
  public bookRead:number;
  public bookLeft:number;
  getData(){
    
  }
  constructor() {}
  ngOnInit() {
    // console.log(generalID)
  }

}
