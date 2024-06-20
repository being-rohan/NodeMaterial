import { Component, Input, OnInit } from '@angular/core';
import { Icourse } from '../../const/interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseFormComponent } from '../course-form/course-form.component';
import { DialogConfig } from '@angular/cdk/dialog';
import { CourseDaialogComponent } from '../course-daialog/course-daialog.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() getcourse!: Icourse
  constructor(private _matdialog: MatDialog) { }

  ngOnInit(): void {
  }

  onedit() {
    let dialconfig = new MatDialogConfig()
    dialconfig.width = '500px',
      dialconfig.data = this.getcourse;
    dialconfig.disableClose = false

    let newDia = this._matdialog.open(CourseFormComponent, dialconfig)

  }
  
}
