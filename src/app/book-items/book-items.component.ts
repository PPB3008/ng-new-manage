import { Component, OnInit, Input } from '@angular/core';
import { Book } from './books';
// import { BookInfomationComponent } from '../book-infomation/book-infomation.component';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../users/user-service';
// import { BookItemsRouting } from './book-items-router';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-book-items',
  templateUrl: './book-items.component.html',
  styleUrls: ['./book-items.component.css'],
  providers:[Book,UserService]
})
@Injectable()

export class BookItemsComponent implements OnInit {
  public type:string="4";
  private books;
  generalID:number;
  public collect;
  public collectState:string;
  private picURL:string;
  itemClick(book) {
    this.generalID=book.ID;
    this.Books.changeState(book.ID);
  }


  constructor(public Books:Book,
    private userService:UserService,
    private route:ActivatedRoute,
    private router:Router,
    private http:HttpClient) { 
  }
  ngOnInit() {
    let userCollect=this.userService.getUsersCollect();
    let bookSub=this.Books.getBooks();
    // this.route.paramMap.switchMap((params: ParamMap)=>params.get('type'));
    userCollect.subscribe((data)=>this.collect=data);
    bookSub.subscribe((data)=>this.books=data);
    }
    
}
