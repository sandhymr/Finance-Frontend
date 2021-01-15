import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactioncompComponent } from './transactioncomp.component';

describe('TransactioncompComponent', () => {
  let component: TransactioncompComponent;
  let fixture: ComponentFixture<TransactioncompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactioncompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactioncompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
