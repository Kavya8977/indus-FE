import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddirectorsComponent } from './adddirectors.component';

describe('AdddirectorsComponent', () => {
  let component: AdddirectorsComponent;
  let fixture: ComponentFixture<AdddirectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddirectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
