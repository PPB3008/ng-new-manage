import { Component, OnInit, OnChanges } from '@angular/core';
import { UserSelectService } from './user-select.service';
import { ChangeDetectorRef } from '@angular/core'; 
import { BookInfomationComponent } from '../../book-infomation/book-infomation.component';
import { Lessons } from '../../book-items/lessons';
import { UserService } from '../../users/user-service';
@Component({
	selector: 'app-user-lens',
	templateUrl: './user-lens.component.html',
	styleUrls: ['./user-lens.component.scss'],
	providers: [UserSelectService,UserService]
})
export class UserLensComponent implements OnInit{
	public generalID;
	public lesson;
	public userSelect;
	public nowUser;
	public nowAuthor;
	public nowSelect;
	public teacherSelect;
	public users;
	itemClick(lesson) {
		this.generalID = lesson.ID;
	}
	returnNowUser() {
		if(document.cookie.indexOf("ngmy")!=-1) {
			let cStart = document.cookie.indexOf("ngmy:")+5;
			let cEnd = document.cookie.indexOf("=",cStart);
			this.nowUser = document.cookie.substring(cStart,cEnd);
		}	
	}
	returnNowAuthor(){
		if(document.cookie.indexOf("ngmy")!=-1) {
			let cOrigin = document.cookie.indexOf("ngmy");
			let cStart = document.cookie.indexOf("=",cOrigin)+1;
			this.nowAuthor = document.cookie.substring(cStart,document.cookie.length);
		}			
	}
	getSelect() {
		let infoSelect = this.userSelect.filter(ele => {
			return ele.username == this.nowUser;
		});	
		this.nowSelect = infoSelect[0].lesson.map(ele => {
			let changeEle = this.lesson.filter(lessonele => {
				return lessonele.ID == ele;
			});
			ele = changeEle;
			return ele; 
		})
		console.log(this.nowSelect);
	}
	getTeacherSelect(){
		if(this.nowAuthor == "teacher"){
			let teacherName = this.users.filter(ele => {
				if(ele.username == this.nowUser) {
					return ele.name;
				}
			})[0]
			this.teacherSelect = this.lesson.filter(ele => {
				return ele.teacher == teacherName.name;
			})
		}
	}
	teacher(){
		this.getTeacherSelect();
		return 
	}
	constructor(private userSelectService:UserSelectService,
				public changeDetectorRef:ChangeDetectorRef,
				private lessons:Lessons,
				private userservice:UserService) { }
	ngOnInit() {
		let lessonsSub = this.lessons.getLessons();
		let userSelectSub = this.userSelectService.getUserSelect();
		let userserviceSub = this.userservice.getUsers();
		lessonsSub.subscribe((data) => { 
			this.lesson = data;
			userSelectSub.subscribe((data) => {
				this.userSelect = data;
				this.getSelect();
				userserviceSub.subscribe(data => {
					this.users = data;
					
					this.getTeacherSelect();
				});
			});
		});
		this.returnNowUser();
		this.returnNowAuthor();
	}
}
