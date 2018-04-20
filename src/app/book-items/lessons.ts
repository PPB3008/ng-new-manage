import { Injectable } from '@angular/core';
import { lessonType } from '../book-types/lesson-types';
import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
    providers:[lessonType]
  })

@Injectable()
export class Lessons {
    lessonURL="assets/lesson/lessons.json"

    private types;
    // books: 
    //  Array<{name:string,ID:number,read:number,picURL:string,left:number,types:string}> = [
    //         {name:"iangular", ID:12333,read:3058,picURL:"../assets/images/working-with-data-in-wordpress-introduction-database-tables.jpg",left:50,types:"A"},
    //         {name:"iangular2",ID:12335,read:1207,picURL:"../assets/images/working-with-data-in-wordpress-introduction-database-tables.jpg",left:12,types:"C"},
    //         {name:"iangular3",ID:12337,read:2636,picURL:"../assets/images/working-with-data-in-wordpress-introduction-database-tables.jpg",left:10,types:"D"},
    //         {name:"iangular4",ID:12338,read:263,picURL:"../assets/images/working-with-data-in-wordpress-introduction-database-tables.jpg",left:10,types:"non"},
    //         {name:"iangular5",ID:12339,read:2636,picURL:"../assets/images/working-with-data-in-wordpress-introduction-database-tables.jpg",left:10,types:"D"},
    //         {name:"iangular6",ID:12340,read:2636,picURL:"../assets/images/working-with-data-in-wordpress-introduction-database-tables.jpg",left:20,types:"F"}
            // {name:"iangular7",ID:12341,read:2636,picURL:"../assets/images/working-with-data-in-wordpress-introduction-database-tables.jpg",left:30,types:"E"},
            // {name:"iangular8",ID:12342,read:2636,picURL:"../assets/images/working-with-data-in-wordpress-introduction-database-tables.jpg",left:40,types:"B"},
            // {name:"iangular9",ID:12343,read:2636,picURL:"../assets/images/working-with-data-in-wordpress-introduction-database-tables.jpg",left:50,types:"C"},
            // {name:"iangular10",ID:12344,read:2636,picURL:"../assets/images/working-with-data-in-wordpress-introduction-database-tables.jpg",left:60,types:"G"}
    // ];

    public state:0;
    getLessons() {
        return this.http.get(this.lessonURL);
    }

    changeState(state){
        this.state=state;
    }
    constructor(public LessonTypes:lessonType,
        private http:HttpClient){
    }
    ngOninit(){
        let typesSub=this.LessonTypes.getTypes();
        typesSub.subscribe((data)=>this.types=data)
        
            for(let typeItem in this.types){
                // Array.prototype.forEach.call(this.books,BookItem=>{
                //     this.types[typeItem].typeID==BookItem.types?BookItem.types=this.types[typeItem].typeName:this.books.splice(this.books.indexOf(BookItem),1);
                // })
            }
    }
}