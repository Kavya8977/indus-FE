import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEpfComponent } from './add-epf.component';

describe('AddEpfComponent', () => {
  let component: AddEpfComponent;
  let fixture: ComponentFixture<AddEpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEpfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
