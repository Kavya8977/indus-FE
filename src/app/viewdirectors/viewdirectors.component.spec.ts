import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdirectorsComponent } from './viewdirectors.component';

describe('ViewdirectorsComponent', () => {
  let component: ViewdirectorsComponent;
  let fixture: ComponentFixture<ViewdirectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdirectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
