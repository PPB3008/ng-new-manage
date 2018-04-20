import { Component, OnInit, Input ,Output ,OnChanges  } from '@angular/core';
import { Lessons } from '../book-items/lessons';
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
  private lessons;
  private stateLesson={ID:0,name:"",left:0,read:0,picURL:"",types:""};
  private collectState:string;
  private hasCollect:boolean=false;
  private collect;
  takeData(){
    if(!this.nowState){
      return;
    }
    else{
      this.lessons.forEach(lessonIn=>{
        (lessonIn.ID==this.nowState)&&(this.stateLesson={
          ID:lessonIn.ID,
          name:lessonIn.name,
          left:lessonIn.left,
          read:lessonIn.read,
          picURL:lessonIn.picURL,
          types:lessonIn.types});
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
        if(!(Array.prototype.includes.call(this.collect[x],this.stateLesson.ID))){
          this.collect[x].push(this.stateLesson.ID);
        }
        else{
          return;
        }      
    }
  }
  constructor(private info_lesson:Lessons,
    private ref: ChangeDetectorRef,
    private http: HttpClient,
    private userService: UserService) {
  }
  ngOnInit() {
    let lessonSub=this.info_lesson.getLessons();
    let userCollect=this.userService.getUsersCollect();
    userCollect.subscribe((data)=>this.collect=data);
    lessonSub.subscribe((data)=>this.lessons=data);
    // this.disableJudge();
  }
  ngOnChanges(){
    this.takeData();
    this.disableJudge();
  }
}
