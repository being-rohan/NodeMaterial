import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { AboutComponent } from './shared/component/about/about.component';
import { CourseComponent } from './shared/component/course/course.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',

    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'course/:id',
    component: CourseComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
