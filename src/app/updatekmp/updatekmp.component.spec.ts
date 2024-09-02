import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatekmpComponent } from './updatekmp.component';

describe('UpdatekmpComponent', () => {
  let component: UpdatekmpComponent;
  let fixture: ComponentFixture<UpdatekmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatekmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatekmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
