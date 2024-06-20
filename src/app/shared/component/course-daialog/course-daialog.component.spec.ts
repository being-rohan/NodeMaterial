import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDaialogComponent } from './course-daialog.component';

describe('CourseDaialogComponent', () => {
  let component: CourseDaialogComponent;
  let fixture: ComponentFixture<CourseDaialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDaialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDaialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
