import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmpComponent } from './kmp.component';

describe('KmpComponent', () => {
  let component: KmpComponent;
  let fixture: ComponentFixture<KmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
