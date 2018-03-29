import { Component, OnInit,Input } from '@angular/core';
import { Book } from './books';
// import { BookInfomationComponent } from '../book-infomation/book-infomation.component';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
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
  public books=[];
  generalID:number;
  public collect;
  public collectState:string;
  private picURL:string;
  // public useCollect:string="yes";
  itemClick(book) {
    this.generalID=book.ID;
    this.Books.changeState(book.ID);
    // this.bookInfomationComponent.getData(book.ID,this.Books);
  }
  // collectJudge(ID){
  //     this.collectState=undefined;
  //     for(let x in this.collect){
  //       let hasCollect=this.collect[x].includes(element => {       
  //         return element==ID;
  //       });
  //       hasCollect==ID?this.collectState="您已定":this.collectState="您未定";
  //     }
  //     return this.collectState;
  // }


  constructor(public Books:Book,
    // public bookInfomationComponent:BookInfomationComponent,
    private userService:UserService,
    private route:ActivatedRoute,
    private router:Router,
    private http:HttpClient) { 
  }
  ngOnInit() {
    let userCollect=this.userService.getUsersCollect();
    this.books=this.Books.getBooks();
    // this.route.paramMap.switchMap((params: ParamMap)=>params.get('type'));
    userCollect.subscribe((data)=>this.collect=data);
    // setInterval(()=>{
    //   userCollect.subscribe((data)=>this.collect=data);
    //   // console.log(this.collect);
    // },5000);
    }
    
}
