import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiAndBuyComponent } from './emi-and-buy.component';

describe('EmiAndBuyComponent', () => {
  let component: EmiAndBuyComponent;
  let fixture: ComponentFixture<EmiAndBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmiAndBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiAndBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
