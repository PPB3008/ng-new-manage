import { Component, OnInit,OnChanges, SimpleChange,Input } from '@angular/core';
import { UserService } from './user-service';
import { BookInfomationComponent } from '../book-infomation/book-infomation.component';
import { Lessons } from '../book-items/lessons';
import { Injectable } from '@angular/core';
@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css'],
	providers: [UserService,Lessons]
})
@Injectable()
export class UsersComponent implements OnInit {
	private user;
	private nowUser;
	private userCollect;
	private userCollectKeys;
	private userLesson;
	private userState:any = 111;
	private lessonGroup = {};
	private generalID;
	cacelCollect() {
	}

	itemClick(lesson) {
		this.generalID = lesson.ID;
	}
	takeKeys() {
		this.userCollectKeys = Object.keys(this.userCollect);
	}
	returnUser() {
		
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
			this.returnUser();
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
