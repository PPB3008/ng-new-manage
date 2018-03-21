import { Component, OnInit,OnChanges } from '@angular/core';
import { FormsModule,ReactiveFormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  mail;
  address;
  country;
  countrys;
  reg=new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
  constructor(private router:Router) { 
    this.countrys=["china","america","japan"];
  }
  closeContact(){
    this.router.navigate([{ outlets: {contactUs: null}}]);
    // console.log(this.NgModel);
  }
  onSubmit(){
    //upload data
  }
  ngOnInit() {
    // let ng=new NgModel;
    // setInterval(
    //   ()=>{console.log(this.mail,this.address,this.country)},3000);
  
  }
  ngOnchanges(){
    // console.log(this.mail,this.address,this.country);
  }

}
