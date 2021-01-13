import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayJoiningFeeComponent } from './pay-joining-fee.component';

describe('PayJoiningFeeComponent', () => {
  let component: PayJoiningFeeComponent;
  let fixture: ComponentFixture<PayJoiningFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayJoiningFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayJoiningFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
