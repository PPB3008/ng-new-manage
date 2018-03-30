import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
@Injectable()
export class UserLensService {
    userLensURL="assets/users/users-len-books.json";
    getUserLens() {
        return this.http.
            get(this.userLensURL);
    }
    constructor(private http:HttpClient){
    }
    ngOnInit(){
    }
}