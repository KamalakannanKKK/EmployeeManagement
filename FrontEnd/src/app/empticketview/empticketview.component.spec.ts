import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpticketviewComponent } from './empticketview.component';

describe('EmpticketviewComponent', () => {
  let component: EmpticketviewComponent;
  let fixture: ComponentFixture<EmpticketviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpticketviewComponent]
    });
    fixture = TestBed.createComponent(EmpticketviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
