import { Component, OnInit,Input } from '@angular/core';
import { Book } from './books';
import { BookInfomationComponent } from '../book-infomation/book-infomation.component';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-book-items',
  templateUrl: './book-items.component.html',
  styleUrls: ['./book-items.component.css'],
  providers:[BookInfomationComponent,Book]
})
@Injectable()

export class BookItemsComponent implements OnInit {
  public type:string="4";
  public books=[];
  public generalID:number;
  picURL:string;
  @Input() name:string;
  @Input() ID:number;
  constructor(public Books:Book,public bookInfomationComponent:BookInfomationComponent,private route:ActivatedRoute,private router:Router) { 
      
  }

  itemClick(book){
    this.generalID=book.ID;
    this.Books.changeState(book.ID);
    this.bookInfomationComponent.getData(book.ID,this.Books);
  }

  ngOnInit() {
    this.books=this.Books.getBooks();
      this.route.paramMap.switchMap((params: ParamMap) =>
      params.get('type'));
    }
  
}
