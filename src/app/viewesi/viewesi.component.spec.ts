import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewesiComponent } from './viewesi.component';

describe('ViewesiComponent', () => {
  let component: ViewesiComponent;
  let fixture: ComponentFixture<ViewesiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewesiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
