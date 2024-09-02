import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedirectorsComponent } from './updatedirectors.component';

describe('UpdatedirectorsComponent', () => {
  let component: UpdatedirectorsComponent;
  let fixture: ComponentFixture<UpdatedirectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedirectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
