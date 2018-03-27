import { Component, OnInit,Input } from '@angular/core';
import { Book } from './books';
import { BookInfomationComponent } from '../book-infomation/book-infomation.component';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../users/user-service';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-book-items',
  templateUrl: './book-items.component.html',
  styleUrls: ['./book-items.component.css'],
  providers:[BookInfomationComponent,Book,UserService]
})
@Injectable()

export class BookItemsComponent implements OnInit {
  public type:string="4";
  public books=[];
  public generalID:number;
  public collect;
  // public generalCollect={};
  private collectState:string;
  
  private picURL:string;
  @Input() name:string;
  @Input() ID:number;
  constructor(public Books:Book,
    public bookInfomationComponent:BookInfomationComponent,
    private userService:UserService,
    private route:ActivatedRoute,
    private router:Router,
    private http:HttpClient) { 
      
  }
  
  itemClick(book) {
    this.generalID=book.ID;
    this.Books.changeState(book.ID);
    this.bookInfomationComponent.getData(book.ID,this.Books);
  }
  collectJudge(ID){
      // console.log(this.collect.collect1)
      // let collectState;
      for(let x in this.collect){
        return this.collect[x].forEach(element => {       
          element==ID&&
            this.collectState="您已选"
this.collectState="您未选"
            
          
        });
      }
      // console.log(collectState);
      console.log(this.collectState);
      return this.collectState;
  }
  preOrder() {

  }
  ngOnInit() {
    let userCollect=this.userService.getUsersCollect();
    this.books=this.Books.getBooks();
      this.route.paramMap.switchMap((params: ParamMap) =>
      params.get('type'));
    userCollect.subscribe((data)=>this.collect=data);
    }
    
}
