import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdategstComponent } from './updategst.component';

describe('UpdategstComponent', () => {
  let component: UpdategstComponent;
  let fixture: ComponentFixture<UpdategstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdategstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdategstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
