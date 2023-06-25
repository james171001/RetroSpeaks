import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordPasswordChangeComponent } from './forgot-password-password-change.component';

describe('ForgotPasswordPasswordChangeComponent', () => {
  let component: ForgotPasswordPasswordChangeComponent;
  let fixture: ComponentFixture<ForgotPasswordPasswordChangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordPasswordChangeComponent]
    });
    fixture = TestBed.createComponent(ForgotPasswordPasswordChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
