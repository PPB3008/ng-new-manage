import { Component, OnInit, Input ,Output ,OnChanges  } from '@angular/core';
import { Lessons } from '../book-items/lessons';
import { UserSelectService } from '../manage-page/user-lens/user-select.service';
import { BookItemsComponent } from '../book-items/book-items.component';
import { lessonType } from '../book-types/lesson-types';
import { ChangeDetectorRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../users/user-service';
@Component({
  selector: 'app-book-infomation',
  templateUrl: './book-infomation.component.html',
  styleUrls: ['./book-infomation.component.css'],
  providers: [Lessons,UserSelectService,lessonType]
})
export class BookInfomationComponent implements OnInit,OnChanges{
	@Input() nowState:number;
	private lessons;
	private stateLesson={ID:0,name:"",left:0,read:0,picURL:"",types:"",teacher:""};
	private collectState:string;
	private hasCollect:boolean=false;
	private collect;
	private userSelect;
	private types;
	private select;
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
				types:lessonIn.types,
				teacher:lessonIn.teacher});
			})
		}
		return;
	}
	collectJudge(ID) {
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
	addCollect() {
		for(let x in this.collect){
			if(!(Array.prototype.includes.call(this.collect[x],this.stateLesson.ID))){
				this.collect[x].push(this.stateLesson.ID);
			}
			else{
				return;
			}      
		}
	}
	selectJudge() {
		
	}
	typeTransform(type) {
		for(let x in this.types) {
			// x.typeID == type
		}
	}
	addSelect() {
		console.log(this.userSelect.lesson);
		if(!(Array.prototype.includes.call(this.nowState,this.userSelect.lesson))){
			// this.userSelect.lesson.push(this.nowState);
			console.log(this.userSelect.lesson);
		}
		else{
			return;
		}
	}
	constructor(private info_lesson:Lessons,
		private ref: ChangeDetectorRef,
		private http: HttpClient,
		private userService: UserService,
		private userSelectService: UserSelectService,
		private LessonType: lessonType) {
	}
	ngOnInit() {
		let lessonSub=this.info_lesson.getLessons();
		let userCollect=this.userService.getUsersCollect();
		let selectSub=this.userSelectService.getUserSelect();
		let lessonTypeSub = this.LessonType.getTypes();
		selectSub.subscribe(data=>{
			this.userSelect=data;
		});
		userCollect.subscribe((data)=>this.collect=data);
		lessonSub.subscribe((data)=>this.lessons=data);
		// this.disableJudge();
		lessonTypeSub.subscribe((data)=>{this.types=data;
			// this.typeTransform(type);
		});
	}
	ngOnChanges(){
		this.takeData();
		this.disableJudge();
	}
}
