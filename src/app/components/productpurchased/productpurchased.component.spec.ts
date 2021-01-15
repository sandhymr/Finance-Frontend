import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductpurchasedComponent } from './productpurchased.component';

describe('ProductpurchasedComponent', () => {
  let component: ProductpurchasedComponent;
  let fixture: ComponentFixture<ProductpurchasedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductpurchasedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductpurchasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
