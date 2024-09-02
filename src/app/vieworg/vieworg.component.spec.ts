import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworgComponent } from './vieworg.component';

describe('VieworgComponent', () => {
  let component: VieworgComponent;
  let fixture: ComponentFixture<VieworgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieworgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VieworgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
