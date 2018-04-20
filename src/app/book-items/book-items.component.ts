import { Component, OnInit, Input } from '@angular/core';
import { Lessons } from './lessons';
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
  providers:[Lessons,UserService]
})
@Injectable()

export class BookItemsComponent implements OnInit {
  public type:string="4";
  private lessons;
  generalID:number;
  public collect;
  public collectState:string;
  private picURL:string;
  itemClick(book) {
    this.generalID=book.ID;
    // this.Lessons.changeState(book.ID);
  }


  constructor(public Lessons:Lessons,
    private userService:UserService,
    private route:ActivatedRoute,
    private router:Router,
    private http:HttpClient) { 
  }
  ngOnInit() {
    let userCollect=this.userService.getUsersCollect();
    let lessonSub=this.Lessons.getLessons();
    // this.route.paramMap.switchMap((params: ParamMap)=>params.get('type'));
    userCollect.subscribe((data)=>this.collect=data);
    lessonSub.subscribe((data)=>this.lessons=data);
    }
    
}
