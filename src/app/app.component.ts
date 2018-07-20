import { Component, OnInit } from '@angular/core';
import { Lessons } from './book-items/lessons';
import { checkServer } from './check-server';
import { lessonType } from './book-types/lesson-types';
import { BookSearchComponent } from './book-search/book-search.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Lessons,lessonType,checkServer]
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit(){

  }
}
