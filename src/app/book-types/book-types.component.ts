import { Component, OnInit } from '@angular/core';
import { lessonType } from './lesson-types';
import { Lessons } from '../book-items/lessons';
import { bookTypesRouting } from './book-types-routing';
@Component({
  selector: 'app-book-types',
  templateUrl: './book-types.component.html',
  styleUrls: ['./book-types.component.css'],
})

export class BookTypesComponent implements OnInit {
  private lessonTypes;
  constructor(private lessontype:lessonType,private lessons:Lessons) { }
  typeClick(types){
    
  }
  ngOnInit() {
    let typesSub=this.lessontype.getTypes();
    typesSub.subscribe((data)=>this.lessonTypes=data);
  }

}
