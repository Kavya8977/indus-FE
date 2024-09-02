import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddincometaxComponent } from './addincometax.component';

describe('AddincometaxComponent', () => {
  let component: AddincometaxComponent;
  let fixture: ComponentFixture<AddincometaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddincometaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddincometaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
