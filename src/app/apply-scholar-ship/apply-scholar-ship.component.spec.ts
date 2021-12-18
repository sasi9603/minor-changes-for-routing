import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyScholarShipComponent } from './apply-scholar-ship.component';

describe('ApplyScholarShipComponent', () => {
  let component: ApplyScholarShipComponent;
  let fixture: ComponentFixture<ApplyScholarShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyScholarShipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyScholarShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
