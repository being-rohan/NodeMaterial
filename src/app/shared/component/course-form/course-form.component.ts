import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Icourse } from '../../const/interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CourseService } from '../../services/course.service';
import { CourseDaialogComponent } from '../course-daialog/course-daialog.component';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  courseForm!: FormGroup
  courseData!: Icourse
  constructor(
    @Inject(MAT_DIALOG_DATA) private _coures: Icourse,
    private _courseSer: CourseService,
    private fb: FormBuilder,
    private matdialof: MatDialogRef<CourseDaialogComponent>

  ) {
    this.creatform()
    console.log(_coures);
    this.courseData = _coures;
    this.courseForm.patchValue(_coures)

  }

  ngOnInit(): void {
    console.log(this.courseForm.value);

  }
  get f() {
    return this.courseForm.controls
  }
  onsave() {
    if (this.courseForm.valid) {
      let obj = { ...this.courseForm.value, id: this.courseData.id }
      this._courseSer.updateobj(obj)
        .subscribe((res) => {
          console.log(res);
          this._courseSer.update$.next(true)
          this.matdialof.close(obj)

        })

    }
  }
  onclose(){
    this.matdialof.close()

  }
  creatform() {
    this.courseForm = this.fb.group({
      description: ["", Validators.required],
      category: ["", Validators.required],
      releaseAt: ["", Validators.required],
      longDescription: ["", Validators.required],


    })
  }
}
