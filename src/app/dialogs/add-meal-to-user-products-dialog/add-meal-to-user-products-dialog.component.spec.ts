import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMealToUserProductsDialogComponent } from './add-meal-to-user-products-dialog.component';

describe('AddMealToUserProductsDialogComponent', () => {
  let component: AddMealToUserProductsDialogComponent;
  let fixture: ComponentFixture<AddMealToUserProductsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMealToUserProductsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMealToUserProductsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
