import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateptComponent } from './updatept.component';

describe('UpdateptComponent', () => {
  let component: UpdateptComponent;
  let fixture: ComponentFixture<UpdateptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
