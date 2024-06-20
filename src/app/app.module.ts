import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material/material.module';
import { HomeComponent } from './shared/component/home/home.component';
import { AboutComponent } from './shared/component/about/about.component';
import { CourseComponent } from './shared/component/course/course.component';
import { CourseCardComponent } from './shared/component/course-card/course-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseFormComponent } from './shared/component/course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseDaialogComponent } from './shared/component/course-daialog/course-daialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CourseComponent,
    CourseCardComponent,
    CourseFormComponent,
    CourseDaialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
