import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsListPageComponent } from './meals-list-page.component';

describe('MealsListPageComponent', () => {
  let component: MealsListPageComponent;
  let fixture: ComponentFixture<MealsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
