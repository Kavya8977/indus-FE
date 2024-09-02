import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemcaComponent } from './updatemca.component';

describe('UpdatemcaComponent', () => {
  let component: UpdatemcaComponent;
  let fixture: ComponentFixture<UpdatemcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatemcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
