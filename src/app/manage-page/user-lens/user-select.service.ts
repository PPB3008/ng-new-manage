import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
@Injectable()
export class UserSelectService {
    userSelectURL="assets/users/users-select.json";
    getUserSelect() {
        return this.http.
            get(this.userSelectURL);
    }
    constructor(private http:HttpClient){
    }
    ngOnInit(){
    }
}