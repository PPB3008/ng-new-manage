import { Component, OnInit,OnChanges, SimpleChange,Input } from '@angular/core';
import { UserService } from './user-service';
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
	private userCollect;
	private userLesson;
	private userState:any = 111;
	private lessonGroup = [];
	private generalID;
	onSubmit() {
		
		
	}

	itemClick(lesson) {
		this.generalID=lesson.ID;
		// this.Lessons.changeState(book.ID);
	}
	returnLessons() {
		console.log(this.userLesson);
		// if (Array.prototype.includes.call(this.userCollect,item.ID)){
		// 	this.lessonGroup.push(item);	
		// }
	}
	constructor(private userService:UserService,
				private lessons:Lessons) {
		
	 }

	ngOnInit() {
		let userSub = this.userService.getUsers();
		let userCollectsub = this.userService.getUsersCollect();
		let lessonSub = this.lessons.getLessons();
		lessonSub.subscribe(data =>this.userLesson);
		userSub.subscribe(data => this.user);
		userCollectsub.subscribe(data => this.userCollect);
		this.returnLessons();
		// console.log(this.lesson);
		// this.lesson.forEach(item => {
		// 	this.returnLessons(item); 
		// })
	}
	
	ngOnChanges(changes:SimpleChange) {
	}

}
