import { Component, OnInit,OnChanges, SimpleChange,Input } from '@angular/core';
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
  private username:any;
  private password:any;
  private userState:any=111;
  @Input() dirty:any;
  onSubmit() {
    
  }
  constructor(private userService:UserService) {
    
   }

  ngOnInit() {
    // this.userService.getUsers()
    // .subscribe(data => {
    //     Array.prototype.forEach.call(data,(ele)=>{
    //       console.log(ele);
    //     })
    // });
    
  }
  ngOnChanges(changes:SimpleChange) {
    this.userState= this.userService.getUsers()
    .subscribe(data => {
        Array.prototype.filter.call(data,(ele)=>{
          return ele.username==this.username;
        })
    });
    // console.log(this.userState);
    setInterval(()=>console.log(this.userState),3000);
  }

}
