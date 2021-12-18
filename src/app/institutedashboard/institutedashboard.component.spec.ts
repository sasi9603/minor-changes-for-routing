import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutedashboardComponent } from './institutedashboard.component';

describe('InstitutedashboardComponent', () => {
  let component: InstitutedashboardComponent;
  let fixture: ComponentFixture<InstitutedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutedashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
