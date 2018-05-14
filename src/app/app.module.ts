import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule, NgModel } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookItemsComponent } from './book-items/book-items.component';
import { Lessons } from './book-items/lessons';
import { BookNavComponent } from './book-nav/book-nav.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookInfomationComponent } from './book-infomation/book-infomation.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { BookTypesComponent } from './book-types/book-types.component';
import { lessonType } from './book-types/lesson-types';
import { bookTypesRouting } from './book-types/book-types-routing';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UsersComponent } from './users/users.component';
import { ManagePageComponent } from './manage-page/manage-page.component';
import { BookManageComponent } from './manage-page/book-manage/book-manage.component';
import { UserLensComponent } from './manage-page/user-lens/user-lens.component';
import { checkServer } from './check-server';



@NgModule({
  declarations: [
    AppComponent,
    BookItemsComponent,
    BookNavComponent,
    BookSearchComponent,
    BookInfomationComponent,
    PageNotFoundComponent,
    BookTypesComponent,
    ContactUsComponent,
    UsersComponent,
    ManagePageComponent,
    BookManageComponent,
    UserLensComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    bookTypesRouting
  ],
  providers: [Lessons,lessonType,checkServer],
  bootstrap: [AppComponent]
})
export class AppModule { }
