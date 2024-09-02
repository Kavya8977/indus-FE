import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetdsComponent } from './updatetds.component';

describe('UpdatetdsComponent', () => {
  let component: UpdatetdsComponent;
  let fixture: ComponentFixture<UpdatetdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatetdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
