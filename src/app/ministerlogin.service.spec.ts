import { TestBed } from '@angular/core/testing';

import { MinisterloginService } from './ministerlogin.service';

describe('MinisterloginService', () => {
  let service: MinisterloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinisterloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
