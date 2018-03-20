import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  name="";
  constructor(private router:Router) { }
  closeContact(){
    this.router.navigate([{ outlets: {contactUs: null}}]);
  }
  ngOnInit() {
  }

}
