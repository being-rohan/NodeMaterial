import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';




let arr = [
  MatNativeDateModule,
  MatDatepickerModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatDividerModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatDialogModule,
  MatSnackBarModule,
  MatIconModule,
  MatToolbarModule,
  MatTabsModule

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...arr
  ],
  exports: [
    ...arr
  ]
})
export class MaterialModule { }

