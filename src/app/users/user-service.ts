import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
@Injectable()
export class UserService {
    userURL="assets/users/users.json";
    userColloect="assets/users/users-collect.json"
    getUsers() {
        return this.http.get(this.userURL);

    }
    getUsersCollect(){
        return this.http.get(this.userColloect);
    }
    // getData(username,password) {
    //     return this.getUsers()
    //     .subscribe(data => {
    //         Array.prototype.filter.call(data,(ele)=>{
    //           return ele.username==username;
    //         })
    //     });
    // }
    constructor(private http: HttpClient){
    }
    ngOnInit(){

    }
}