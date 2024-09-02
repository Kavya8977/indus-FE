import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddesiComponent } from './addesi.component';

describe('AddesiComponent', () => {
  let component: AddesiComponent;
  let fixture: ComponentFixture<AddesiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddesiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
