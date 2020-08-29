import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCalorieProductDialogComponent } from './add-calorie-product-dialog.component';

describe('AddCalorieProductDialogComponent', () => {
  let component: AddCalorieProductDialogComponent;
  let fixture: ComponentFixture<AddCalorieProductDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCalorieProductDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCalorieProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
