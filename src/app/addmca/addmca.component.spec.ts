import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmcaComponent } from './addmca.component';

describe('AddmcaComponent', () => {
  let component: AddmcaComponent;
  let fixture: ComponentFixture<AddmcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
