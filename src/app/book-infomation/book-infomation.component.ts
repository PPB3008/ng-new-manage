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
  providers: [Lessons,UserSelectService,lessonType,UserService]
})
@Injectable()
export class BookInfomationComponent implements OnInit,OnChanges{
	@Input() nowState:number;
	public lessons;
	public stateLesson={ID:0,name:"",left:0,read:0,picURL:"",types:"",teacher:"",start:0,end:0,time:""};
	public collectState:string;
	public hasCollect:boolean=false;
	public collect;
	public userSelect;
	public types;
	public select;
	public nowUser;
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
				teacher:lessonIn.teacher,
				start:lessonIn.start,
				end:lessonIn.end,
				time:lessonIn.time});
			})
		}
		return;
	}
	collectJudge(ID) {
		if(this.nowUser){
			this.collectState=undefined;
			this.hasCollect=false;
			for(let x in this.collect){
			this.hasCollect=this.collect[x].includes(ID);
			this.hasCollect?this.collectState="您已收藏":this.collectState="您未收藏";
			}
			return this.collectState;
		}
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
	typeTransform(type) {
		for(let x in this.types) {
			// x.typeID == type
		}
	}
	addSelect() {
		this.returnNowUser();
		let collectItem = this.userSelect.filter(ele => {
			return ele.username == this.nowUser;
		});
		if(!(Array.prototype.includes.call(this.nowState,collectItem.lesson))){
			collectItem[0].lesson.push(this.nowState);
		}
		else{
			return;
		}
	}
	selectJudge() {
		this.returnNowUser();
		let collectItem = this.userSelect.filter(ele => {
			return ele.username == this.nowUser;
		});
		return collectItem[0].lesson.includes(this.nowState);
	}

	selectDisableJudge(id) {
		this.returnNowUser();
		if(this.nowUser) {
			let selectState = this.userSelect.filter(ele => {
				return ele.username == this.nowUser;
			});
			return selectState[0].lesson.includes(id)?"您已选":"您未选";
		}
	}
	returnNowUser() {
		if(document.cookie.indexOf("ngmy")!=-1) {
			let cStart = document.cookie.indexOf("ngmy:")+5;
			let cEnd = document.cookie.indexOf("=",cStart);
			this.nowUser = document.cookie.substring(cStart,cEnd);
		}	
	}
	showSelf() {
		if(this.nowState) {
			return true;
		}
	}
	show() {
		return this.nowUser?true:false;
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
			console.log(this.userSelect)
		});
		userCollect.subscribe((data)=>this.collect=data);
		lessonSub.subscribe((data)=>this.lessons=data);
		// this.disableJudge();
		lessonTypeSub.subscribe(data => {
			this.types=data;
			// this.typeTransform(type);
		});
		this.returnNowUser();
		
	}
	ngOnChanges(){
		this.takeData();
		this.disableJudge();
	}
}
