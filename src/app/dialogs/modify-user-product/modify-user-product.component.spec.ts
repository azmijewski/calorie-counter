import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyUserProductComponent } from './modify-user-product.component';

describe('ModifyWUserProductComponent', () => {
  let component: ModifyUserProductComponent;
  let fixture: ComponentFixture<ModifyUserProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyUserProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyUserProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
