import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankotpComponent } from './bankotp.component';

describe('BankotpComponent', () => {
  let component: BankotpComponent;
  let fixture: ComponentFixture<BankotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankotpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
