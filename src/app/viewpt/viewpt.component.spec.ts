import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewptComponent } from './viewpt.component';

describe('ViewptComponent', () => {
  let component: ViewptComponent;
  let fixture: ComponentFixture<ViewptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
