import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmcaComponent } from './viewmca.component';

describe('ViewmcaComponent', () => {
  let component: ViewmcaComponent;
  let fixture: ComponentFixture<ViewmcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewmcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
