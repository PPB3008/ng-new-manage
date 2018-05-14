import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class checkServer {
    private checkServerURL="assets/lesson/check-server.json";

    getTypes(){
        return this.http.get(this.checkServerURL);
    }
    constructor(private http:HttpClient){
    }
}