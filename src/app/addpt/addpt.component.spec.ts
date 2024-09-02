import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddptComponent } from './addpt.component';

describe('AddptComponent', () => {
  let component: AddptComponent;
  let fixture: ComponentFixture<AddptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
