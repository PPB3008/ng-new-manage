import { Component, OnInit, Input } from '@angular/core';
import { Lessons } from './lessons';
// import { BookInfomationComponent } from '../book-infomation/book-infomation.component';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../users/user-service';
import { lessonType } from '../book-types/lesson-types';
// import { BookItemsRouting } from './book-items-router';
import 'rxjs/add/operator/switchMap';
@Component({
	selector: 'app-book-items',
	templateUrl: './book-items.component.html',
	styleUrls: ['./book-items.component.css'],
	providers:[Lessons,UserService]
})
@Injectable()

export class BookItemsComponent implements OnInit {
	private shown;
	public type:string="4";
	private lessons;
	private lessonTypes;
	generalID:number;
	public collect;
	public collectState:string;
	private picURL:string;
	itemClick(book) {
	this.generalID=book.ID;
	// this.Lessons.changeState(book.ID);
	}

	selectLessons() {
		
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
		private lessontype:lessonType) { 
	}
	ngOnInit() {
		let userCollect=this.userService.getUsersCollect();
		let lessonSub=this.Lessons.getLessons();
		// this.route.paramMap.switchMap((params: ParamMap)=>params.get('type'));
		userCollect.subscribe((data)=>this.collect=data);
		lessonSub.subscribe((data)=>this.lessons=data);
		let typesSub=this.lessontype.getTypes();
		typesSub.subscribe((data)=>this.lessonTypes=data);
	}
}
