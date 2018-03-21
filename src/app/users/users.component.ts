import { Component, OnInit } from '@angular/core';
import { UserService } from './user-service';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
@Injectable()
export class UsersComponent implements OnInit {
  users={};
  // this.users.forEach(element => {
    
  // });
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(data => {
        Array.prototype.forEach.call(data,(ele)=>{
          console.log(ele);
        })
    });
  }

}
