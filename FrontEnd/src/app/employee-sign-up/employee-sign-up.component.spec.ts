import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSignUpComponent } from './employee-sign-up.component';

describe('EmployeeSignUpComponent', () => {
  let component: EmployeeSignUpComponent;
  let fixture: ComponentFixture<EmployeeSignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeSignUpComponent]
    });
    fixture = TestBed.createComponent(EmployeeSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
