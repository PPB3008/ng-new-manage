import { Component, OnInit } from '@angular/core';
import { Lessons } from '../book-items/lessons';

@Component({
  selector: 'app-manage-page',
  templateUrl: './manage-page.component.html',
  styleUrls: ['./manage-page.component.css'],
  providers: [Lessons]
})
export class ManagePageComponent implements OnInit {

  constructor(private lessons:Lessons) { }

  ngOnInit() {
  }

}
