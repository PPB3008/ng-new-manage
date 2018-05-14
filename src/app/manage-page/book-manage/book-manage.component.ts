import { Component, OnInit } from '@angular/core';
import { BookInfomationComponent } from '../../book-infomation/book-infomation.component';
import { UserService } from '../../users/user-service';
import { UserSelectService } from '../../manage-page/user-lens/user-select.service';
import { Lessons } from '../../book-items/lessons';
import { checkServer } from '../../check-server';
import { lessonType } from '../../book-types/lesson-types';
@Component({
  selector: 'app-book-manage',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.css'],
  providers: [BookInfomationComponent,UserService,UserSelectService]
})
export class BookManageComponent implements OnInit {
	private generalID ;
	public userSelect;
	public lesson;
	public nowUser;
	public nowAuthor;
	public ownSelect;
	public type;
	public stateLesson;
	public tempState;
	public tempLesson = {"name":"","ID":0,"term":0,"teacher":"","read":0,"picURL":"../assets/images/working-with-data-in-wordpress-introduction-database-tables.jpg","left":0,"start":0,"time":"","end":0,"types":0};
	constructor(public bookInfomationComponent:BookInfomationComponent,
				public info_lesson:Lessons,
				public userService:UserService,
				public userSelectService:UserSelectService,
				private lessons:Lessons,
				private LessonType:lessonType) { 
	}
	authorJudge(){
		if(document.cookie.indexOf("ngmy")!=-1) {
			let origin = document.cookie.indexOf("ngmy");
			let cStart = document.cookie.indexOf("=",origin)+1;
			let cEnd = document.cookie.length;
			this.nowAuthor = document.cookie.substring(cStart,cEnd);
		}	
	}
	itemClick(lesson) {
		this.generalID = lesson.ID;
		
		this.stateLesson = this.lesson.filter(ele => {
			return ele.ID == this.generalID;
		})[0]
		this.tempLesson = {"name":"","ID":0,"term":0,"teacher":"","read":0,"picURL":"../assets/images/working-with-data-in-wordpress-introduction-database-tables.jpg","left":0,"start":0,"time":"","end":0,"types":0};
	}
	returnNowUser() {
		if(document.cookie.indexOf("ngmy")!=-1) {
			let cStart = document.cookie.indexOf("ngmy:")+5;
			let cEnd = document.cookie.indexOf("=",cStart);
			this.nowUser = document.cookie.substring(cStart,cEnd);
		}	
	}
	typeTransform(types){

	}

	changeType(item,value){
		if(value != ""){
			alert("您确实要修改吗？");
			item.typeName = value;
		}
		console.log(item,value);
	}
	addType(value) {
		if(value != ""){
			alert("您确实要修改吗？");
			let tempType = {};
			tempType["typeID"] = this.type.length+1
			tempType["typeName"] = value;
			this.type.push(tempType);
		}
		
	}
	// getUserSelect() {
	// 	this.ownSelect = this.userSelect.filter(ele => {
	// 		return ele.username == this.nowUser;
	// 	});
	// }
	getKeys(){
		let keys = []
		for(let x in this.lesson[0]) {
			keys.push(x);
		}
		return keys;
	}
	changeLesson(item) {
		if(this.generalID) {
			let nowItem = this.lesson.filter(ele => {
				return ele.ID == this.generalID;
			})[0];
			for(let x in nowItem) {
				item.name == x&&(nowItem[x] = item.value);
			}
		}
		else {
			let nowItem = this.lesson.filter(ele => {
				return ele.ID == this.generalID;
			})[0];
			for(let x in this.tempLesson) {
				item.name == x&&(this.tempLesson[x] = item.value);
			}
		}
	}
	pushLesson(){
		this.lesson.push(this.tempLesson);
	}
	switchAdd() {
		this.generalID = undefined;
	}	
	
	returnTitle() {
		console.log(111);
		return this.generalID?true:false;
	}

	show(){

	}
	ngOnInit() {
		let lessonSub=this.info_lesson.getLessons();
		let userCollect=this.userService.getUsersCollect();
		let selectSub=this.userSelectService.getUserSelect();
		let typeSub = this.LessonType.getTypes();
		selectSub.subscribe(data => {
			this.userSelect = data;
		});
		lessonSub.subscribe((data)=>{
			this.lesson = data;
		});
		typeSub.subscribe(data => {
			this.type = data;
		})
		this.returnNowUser();
		// this.getUserSelect();
		this.authorJudge();
	}
}
