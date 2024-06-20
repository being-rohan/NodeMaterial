import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Icourse } from '../../const/interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courseid!: string
  course$!: Observable<Icourse>
  constructor(private _courseser: CourseService,
    private _activ: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.courseid = this._activ.snapshot.params['id']
    this.course$ = this._courseser.courseurl(this.courseid)
    console.log(this.course$);
  }

}
