import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { BookInfomationComponent } from '../book-infomation/book-infomation.component';
const bookItemsRoutes:Routes= [
    {
        path:'/info',
        component: BookInfomationComponent,
        outlet:'Info'
    }
]


@NgModule({
    imports: [
        RouterModule.forChild(bookItemsRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class BookItemsRouting{

}