import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtdsComponent } from './viewtds.component';

describe('ViewtdsComponent', () => {
  let component: ViewtdsComponent;
  let fixture: ComponentFixture<ViewtdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
