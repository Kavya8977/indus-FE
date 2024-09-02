import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEpfComponent } from './update-epf.component';

describe('UpdateEpfComponent', () => {
  let component: UpdateEpfComponent;
  let fixture: ComponentFixture<UpdateEpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEpfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
