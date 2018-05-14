import { Component, OnInit } from '@angular/core';
import { Lessons } from './book-items/lessons';
import { checkServer } from './check-server';
import { lessonType } from './book-types/lesson-types';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Lessons,lessonType,checkServer]
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit(){

  }
}
