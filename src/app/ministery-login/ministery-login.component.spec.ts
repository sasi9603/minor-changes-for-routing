import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisteryLoginComponent } from './ministery-login.component';

describe('MinisteryLoginComponent', () => {
  let component: MinisteryLoginComponent;
  let fixture: ComponentFixture<MinisteryLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinisteryLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinisteryLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
