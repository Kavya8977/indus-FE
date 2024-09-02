import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewincometaxComponent } from './viewincometax.component';

describe('ViewincometaxComponent', () => {
  let component: ViewincometaxComponent;
  let fixture: ComponentFixture<ViewincometaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewincometaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewincometaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
