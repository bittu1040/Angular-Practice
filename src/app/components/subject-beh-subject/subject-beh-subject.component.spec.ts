import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBehSubjectComponent } from './subject-beh-subject.component';

describe('SubjectBehSubjectComponent', () => {
  let component: SubjectBehSubjectComponent;
  let fixture: ComponentFixture<SubjectBehSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectBehSubjectComponent]
    });
    fixture = TestBed.createComponent(SubjectBehSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
