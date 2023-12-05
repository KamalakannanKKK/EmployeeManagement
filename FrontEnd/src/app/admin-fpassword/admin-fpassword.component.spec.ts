import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFPasswordComponent } from './admin-fpassword.component';

describe('AdminFPasswordComponent', () => {
  let component: AdminFPasswordComponent;
  let fixture: ComponentFixture<AdminFPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminFPasswordComponent]
    });
    fixture = TestBed.createComponent(AdminFPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
