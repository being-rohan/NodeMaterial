import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icourse, IcourseRes } from '../const/interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  postUrl = `${environment.baseurl}/courses`
  update$: Subject<boolean> = new Subject<boolean>()

  constructor(private _http: HttpClient) { }



  fetchallcourses(): Observable<Icourse[]> {
    return this._http.get<IcourseRes>(this.postUrl)
      .pipe(
        map(res => res['payload']),
        shareReplay()
      )
  }


  updateobj(course: Icourse): Observable<Icourse> {
    let updateurl = `${this.postUrl}/${course.id}`
    return this._http.put<Icourse>(updateurl, course)
  }

  courseurl(courseid: string): Observable<Icourse> {
    let course = `${this.postUrl}/${courseid}`
    return this._http.get<Icourse>(course)
  }
}
