import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdetailComponent } from './empdetail.component';

describe('EmpdetailComponent', () => {
  let component: EmpdetailComponent;
  let fixture: ComponentFixture<EmpdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpdetailComponent]
    });
    fixture = TestBed.createComponent(EmpdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
