import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateincometaxComponent } from './updateincometax.component';

describe('UpdateincometaxComponent', () => {
  let component: UpdateincometaxComponent;
  let fixture: ComponentFixture<UpdateincometaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateincometaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateincometaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
