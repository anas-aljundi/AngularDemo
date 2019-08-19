import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleCasePipe } from './_pipes/title-case.pipe';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './_directives/input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseComponent } from './course/course.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './_services/post.service';

@NgModule({
   declarations: [
      AppComponent,
      SignupFormComponent,
      TitleCasePipe,
      LikeComponent,
      InputFormatDirective,
      ZippyComponent,
      ContactFormComponent,
      CourseComponent,
      NewCourseFormComponent,
      ChangePasswordComponent,
      PostsComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [
      PostService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
