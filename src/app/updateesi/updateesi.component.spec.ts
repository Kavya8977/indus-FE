import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateesiComponent } from './updateesi.component';

describe('UpdateesiComponent', () => {
  let component: UpdateesiComponent;
  let fixture: ComponentFixture<UpdateesiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateesiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
