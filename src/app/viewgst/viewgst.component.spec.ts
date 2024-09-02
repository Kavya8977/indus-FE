import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgstComponent } from './viewgst.component';

describe('ViewgstComponent', () => {
  let component: ViewgstComponent;
  let fixture: ComponentFixture<ViewgstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewgstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewgstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
