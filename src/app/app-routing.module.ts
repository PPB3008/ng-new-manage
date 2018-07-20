import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookItemsComponent } from './book-items/book-items.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { BookTypesComponent } from './book-types/book-types.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UsersComponent } from './users/users.component';
import { ManagePageComponent } from './manage-page/manage-page.component';
const appRoutes: Routes = [
    { path: 'contact', component: ContactUsComponent,outlet:'contactUs'},
    { path: 'users', component:UsersComponent },
    { path: 'books', component:BookItemsComponent },
    { path: 'types', component:BookTypesComponent },
    { path: 'manage', component:ManagePageComponent},
    { path: '' , redirectTo: '' , pathMatch: 'full'},
    { path: '**' , component: PageNotFoundComponent }
];


RouterModule.forRoot(appRoutes)

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        )
    ],
    exports: [
        RouterModule
    ]
  })


export class AppRoutingModule {

}