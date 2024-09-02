import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewkmpComponent } from './viewkmp.component';

describe('ViewkmpComponent', () => {
  let component: ViewkmpComponent;
  let fixture: ComponentFixture<ViewkmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewkmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewkmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
