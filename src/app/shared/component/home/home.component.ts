import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Icourse, IcourseRes } from '../../const/interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  courseArr!: Icourse[]
  // coursarr$!: Observable<Icourse[]>
  begginercourse!: Array<Icourse>
  advancedcourse!: Array<Icourse>
  constructor(private _courseSer: CourseService) { }

  ngOnInit(): void {

    // this.coursarr$ = this._courseSer.fetchallcourses()
    this.getcourse()
    this._courseSer.update$                
      .subscribe((res) => {
        if (res) {
          this.getcourse()
        }
      })

  }

  getcourse() {
    this._courseSer.fetchallcourses()
      .subscribe((c) => {
        console.log(c);


        this.begginercourse = c.filter(cu => cu.category === 'BEGINNER')


        this.advancedcourse = c.filter(cu => cu.category === 'ADVANCED')
        console.log(this.advancedcourse);

      })
  }
}
