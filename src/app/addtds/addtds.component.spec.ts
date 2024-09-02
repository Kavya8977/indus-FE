import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtdsComponent } from './addtds.component';

describe('AddtdsComponent', () => {
  let component: AddtdsComponent;
  let fixture: ComponentFixture<AddtdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
