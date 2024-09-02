import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpfviewComponent } from './epfview.component';

describe('EpfviewComponent', () => {
  let component: EpfviewComponent;
  let fixture: ComponentFixture<EpfviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpfviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpfviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
