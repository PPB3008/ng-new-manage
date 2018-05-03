import { Component, OnInit } from '@angular/core';
import { BookInfomationComponent } from '../../book-infomation/book-infomation.component';
import { UserService } from '../../users/user-service';
import { UserSelectService } from '../../manage-page/user-lens/user-select.service';
import { Lessons } from '../../book-items/lessons';

@Component({
  selector: 'app-book-manage',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.css'],
  providers: [BookInfomationComponent,UserService,UserSelectService,Lessons]
})
export class BookManageComponent implements OnInit {
	private generalID ;
	public userSelect;
	public lessons;
	public nowUser;
	public nowAuthor;
	public ownSelect;
	constructor(public bookInfomationComponent:BookInfomationComponent,
				public info_lesson:Lessons,
				public userService:UserService,
				public userSelectService:UserSelectService
				 ) { 
	}
	authorJudge(){
		if(document.cookie.indexOf("ngmy")!=-1) {
			let origin = document.cookie.indexOf("ngmy");
			let cStart = document.cookie.indexOf("=",origin)+1;
			let cEnd = document.cookie.length;
			this.nowAuthor = document.cookie.substring(cStart,cEnd);
		}	
		else {
			return "default";
		}
	}
	itemClick(lesson) {
		this.generalID=lesson.ID;
	}
	returnNowUser() {
		if(document.cookie.indexOf("ngmy")!=-1) {
			let cStart = document.cookie.indexOf("ngmy:")+5;
			let cEnd = document.cookie.indexOf("=",cStart);
			this.nowUser = document.cookie.substring(cStart,cEnd);
		}	
	}
	getUserSelect() {
		console.log(this.userSelect);
		this.ownSelect = this.userSelect.filter(ele => {
			return ele.username == this.nowUser;
		});
	}
	ngOnInit() {
		let lessonSub=this.info_lesson.getLessons();
		let userCollect=this.userService.getUsersCollect();
		let selectSub=this.userSelectService.getUserSelect();
		selectSub.subscribe(data => {
			this.userSelect=data;
		});
		lessonSub.subscribe((data)=>this.lessons=data);
		this.returnNowUser();
		this.getUserSelect();
		this.authorJudge();
	}
}
