import { Component, OnInit,OnChanges, SimpleChange,Input } from '@angular/core';
import { UserService } from './user-service';
import { BookInfomationComponent } from '../book-infomation/book-infomation.component';
import { Lessons } from '../book-items/lessons';
import { Injectable } from '@angular/core';
@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss'],
	providers: [UserService,Lessons]
})
@Injectable()
export class UsersComponent implements OnInit {
	public collectState = false;
	public user;
	public nowUser;
	public userCollect;
	public userCollectKeys;
	public userLesson;
	public userState:any = 111;
	public lessonGroup = {};
	public generalID;
	public inputUsername;
	public nowUsers;
	public infoUser;
	onKey(event : any){
		
	}
	openCollect(){
		if(this.collectState) {
			this.collectState = false;

		}
		else {
			this.collectState = true;
		}
	}
	returnNowUser() {
		if(document.cookie.indexOf("ngmy")!=-1) {
			let cStart = document.cookie.indexOf("ngmy:")+5;
			let cEnd = document.cookie.indexOf("=",cStart);
			this.nowUser = document.cookie.substring(cStart,cEnd);
		}	
	}
	loginJudge(){
	 	return document.cookie.indexOf("ngmy")==-1? true:false;
	}
	exitLogin() {
		this.setCookie(this.nowUser,"",-1);
	}
	tekeUserInfo() {
		this.returnNowUser();
		console.log(this.nowUsers)
		this.infoUser = this.nowUsers.filter(ele => {
			console.log(ele.username == this.nowUser);
			return ele.username == this.nowUser;
		})[0];
	}
	setCookie(user,value : string,days){
		let exdate = new Date();
		exdate.setDate(exdate.getDate()+days);
		document.cookie = "ngmy:"+user+"="+value+";expires="+exdate.toUTCString();
		console.log(exdate.toUTCString());
	}
	onSubmit(username,password){
		if(		
			this.nowUsers.some(ele => {
			return ele.username == username;
		})){
			this.nowUsers.forEach(ele => {
				if(ele.username == username) {
					if(ele.password == password){
						this.setCookie(username,ele.authority,8);
						alert("登录成功");
						this.returnNowUser();
						this.tekeUserInfo();
					}
					else{
						alert("密码错误");
					}
				}
			})

		}
		else {
			alert("不存在此用户名!");

		}
	}
	cacelCollect(itemIndex,itemGroup) {
		itemGroup.splice(itemIndex,1);
	}
	addCollectGroup(item) {
		this.userCollect[item] = [];
		this.takeKeys();
	}

	itemClick(lesson) {
		this.generalID = lesson.ID;
	}
	takeKeys() {
		this.userCollectKeys = Object.keys(this.userCollect);
	}
	returnLessons() {
		for(let collectItem in this.userCollect) {
			let tempLessonItem = this.userCollect[collectItem].map(ID => {
				let nowItem = this.userLesson.filter(item => {
					return ID == item.ID;
				})
				return nowItem[0];
			});
			this.userCollect[collectItem] = tempLessonItem;
		}
	}
	constructor(private userService:UserService,
				private lessons:Lessons) {
	 }

	ngOnInit() {
		let userSub = this.userService.getUsers();
		let userCollectsub = this.userService.getUsersCollect();
		let lessonSub = this.lessons.getLessons();
		lessonSub.subscribe((data) => {
			this.userLesson = data;
		});
		userSub.subscribe((data) => {
			this.user = data;
			this.nowUsers = this.user;
			this.tekeUserInfo();
		});
		userCollectsub.subscribe((data) => {
			this.userCollect = data;
			this.returnLessons();
			this.takeKeys();
		});
	}
	ngOnChanges(changes:SimpleChange) {
	}

}
