import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTypesComponent } from './book-types.component';
import { BookItemsComponent } from '../book-items/book-items.component';
const bookTypesRouts:Routes= [
    {
        path: 'types',
        component: BookTypesComponent,
        children: [
            {
                path: 'types/:type',
                component: BookItemsComponent
            }
        ]
    }
]


@NgModule({
    imports: [
        RouterModule.forChild(bookTypesRouts)
    ],
    exports: [
        RouterModule
    ]
})

export class bookTypesRouting {

}