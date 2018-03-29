import { Component, OnInit, Input ,Output ,OnChanges  } from '@angular/core';
import { Book } from '../book-items/books';
import { BookItemsComponent } from '../book-items/book-items.component';
import { ChangeDetectorRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../users/user-service';
@Component({
  selector: 'app-book-infomation',
  templateUrl: './book-infomation.component.html',
  styleUrls: ['./book-infomation.component.css'],
})
export class BookInfomationComponent implements OnInit,OnChanges{
  @Input() nowState:number;
  private Books;
  private stateBook={ID:0,name:"",left:0,read:0,picURL:"",types:""};
  private collectState:string;
  private hasCollect:boolean=false;
  private collect;
  takeData(){
    if(!this.nowState){
      return;
    }
    else{
      this.Books.forEach(bookIn=>{
        (bookIn.ID==this.nowState)&&(this.stateBook={
          ID:bookIn.ID,
          name:bookIn.name,
          left:bookIn.left,
          read:bookIn.read,
          picURL:bookIn.picURL,
          types:bookIn.types});
      })
    }
      return;
  }
  collectJudge(ID){ 
    this.collectState=undefined;
    this.hasCollect=false;
    for(let x in this.collect){
      this.hasCollect=this.collect[x].includes(ID);
      this.hasCollect?this.collectState="您已定":this.collectState="您未定";
    }
    return this.collectState;
}
  disableJudge(){
    this.collectJudge(this.nowState);
    return this.hasCollect;
  }
  order() {
      for(let x in this.collect){
        if(!(Array.prototype.includes.call(this.collect[x],this.stateBook.ID))){
          this.collect[x].push(this.stateBook.ID);
        }
        else{
          return;
        }      
    }
  }
  constructor(private info_book:Book,
    private ref: ChangeDetectorRef,
    private http: HttpClient,
    private userService: UserService) {
  }
  ngOnInit() {
    this.Books=this.info_book.getBooks();
    let userCollect=this.userService.getUsersCollect();
    userCollect.subscribe((data)=>this.collect=data);
    // this.disableJudge();
  }
  ngOnChanges(){
    this.takeData();
    this.disableJudge();
  }
}
