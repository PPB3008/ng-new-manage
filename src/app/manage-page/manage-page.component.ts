import { Component, OnInit } from '@angular/core';
import { Book } from '../book-items/books';
@Component({
  selector: 'app-manage-page',
  templateUrl: './manage-page.component.html',
  styleUrls: ['./manage-page.component.css'],
  providers: [Book]
})
export class ManagePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
