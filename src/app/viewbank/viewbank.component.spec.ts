import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbankComponent } from './viewbank.component';

describe('ViewbankComponent', () => {
  let component: ViewbankComponent;
  let fixture: ComponentFixture<ViewbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
