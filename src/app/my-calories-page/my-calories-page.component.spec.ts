import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCaloriesPageComponent } from './my-calories-page.component';

describe('MyCaloriesPageComponent', () => {
  let component: MyCaloriesPageComponent;
  let fixture: ComponentFixture<MyCaloriesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCaloriesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCaloriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
