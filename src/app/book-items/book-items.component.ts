import { Component, OnInit, Input } from '@angular/core';
import { Lessons } from './lessons';
// import { BookInfomationComponent } from '../book-infomation/book-infomation.component';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../users/user-service';
import { lessonType } from '../book-types/lesson-types';
import { UserSelectService } from '../manage-page/user-lens/user-select.service';
// import { BookItemsRouting } from './book-items-router';
import 'rxjs/add/operator/switchMap';
@Component({
	selector: 'app-book-items',
	templateUrl: './book-items.component.html',
	styleUrls: ['./book-items.component.css'],
	providers:[Lessons,UserService,UserSelectService]
})
@Injectable()

export class BookItemsComponent implements OnInit {
	private shown;
	public type:string="4";
	private lessons;
	private lessonTypes;
	private userSelect;
	generalID:number;
	public collect;
	public collectState:string;
	private picURL:string;
	private terms=[1,2,3,4,5,6,7,8];
	itemClick(lesson) {
	this.generalID=lesson.ID;
	// this.Lessons.changeState(book.ID);
	}
	termShow() {
		this.terms=this.lessons.term;
	}
	
	queueJudge(queueValue) {
		// switch (queueValue){
		// 	case "lessonTypes":
		// 		return this.lessonTypes;
				
		// 	case "terms":
		// 		return this.terms;
				
		// }
		
	}
	reset(value){
		console.log(value);
		return value;
	}
	show(lesson,type){
		// lesson==type?this.shown=true:this.shown=false;
		console.log(type);
		console.log(lesson);
		console.log(lesson==type);
		return lesson==type;
	}

	constructor(public Lessons:Lessons,
		private userService:UserService,
		private route:ActivatedRoute,
		private router:Router,
		private http:HttpClient,
		private lessontype:lessonType,
		private userSelectService:UserSelectService) { 
	}
	ngOnInit() {
		let userCollect=this.userService.getUsersCollect();
		let lessonSub=this.Lessons.getLessons();
		// this.route.paramMap.switchMap((params: ParamMap)=>params.get('type'));
		let userSub=this.userSelectService.getUserSelect();
		let typesSub=this.lessontype.getTypes();
		userCollect.subscribe((data)=>this.collect=data);
		lessonSub.subscribe((data)=>this.lessons=data);
		userSub.subscribe((data)=>this.userSelect=data);
		typesSub.subscribe((data)=>this.lessonTypes=data);
	}
}
