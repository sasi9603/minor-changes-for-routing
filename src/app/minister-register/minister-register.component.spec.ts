import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterRegisterComponent } from './minister-register.component';

describe('MinisterRegisterComponent', () => {
  let component: MinisterRegisterComponent;
  let fixture: ComponentFixture<MinisterRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinisterRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinisterRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
