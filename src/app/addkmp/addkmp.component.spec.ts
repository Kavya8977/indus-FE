import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddkmpComponent } from './addkmp.component';

describe('AddkmpComponent', () => {
  let component: AddkmpComponent;
  let fixture: ComponentFixture<AddkmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddkmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddkmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
