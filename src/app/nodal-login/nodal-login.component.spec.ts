import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodalLoginComponent } from './nodal-login.component';

describe('NodalLoginComponent', () => {
  let component: NodalLoginComponent;
  let fixture: ComponentFixture<NodalLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodalLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
