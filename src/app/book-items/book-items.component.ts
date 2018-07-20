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
// import 'rxjs/add/operator/switchMap';
@Component({
	selector: 'app-book-items',
	templateUrl: './book-items.component.html',
	styleUrls: ['./book-items.component.scss'],
	providers:[Lessons,UserService,UserSelectService]
})
@Injectable()

export class BookItemsComponent implements OnInit {
	public queueState;
	public nowUser;
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
	private nowTypeState;
	private termtype = {"first":[],
						"second":[],
						"third":[],
						"fourth":[]};


	itemClick(lesson) {
	this.generalID=lesson.ID;
	}
	termShow() {
		this.terms=this.lessons.term;
	}
	
	queueJudge(item) {
		this.queueState = item;
	}
	show() {
		return document.cookie.indexOf("ngmy")!=-1?true:false;
	}
	showLesson(type,lesson){
		return type.typeID == lesson.types;
	}
	termType() {
		this.lessons.forEach(ele => {
			switch(ele.term) {
				case 1:
					this.termtype.first.push(ele);
					break;
				case 2:
					this.termtype.second.push(ele);	
					break;
				case 3:
					this.termtype.third.push(ele);	
					break;
				case 4:
					this.termtype.fourth.push(ele);	
					break;
			}
		})
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
		lessonSub.subscribe((data)=>{
			this.lessons=data;
			this.termType();
		});
		userSub.subscribe((data)=>this.userSelect=data);
		typesSub.subscribe((data)=>this.lessonTypes=data);		
	}
}
