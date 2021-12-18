import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterdashboardComponent } from './ministerdashboard.component';

describe('MinisterdashboardComponent', () => {
  let component: MinisterdashboardComponent;
  let fixture: ComponentFixture<MinisterdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinisterdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinisterdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
