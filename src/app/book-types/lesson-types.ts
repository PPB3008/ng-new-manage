import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class lessonType implements OnInit{
    private lessonTypeURL="assets/lesson/lesson-type.json";


    getTypes(){
        return this.http.get(this.lessonTypeURL);
    }
    constructor(private http:HttpClient){
    }
    ngOnInit() {
        
    }
}