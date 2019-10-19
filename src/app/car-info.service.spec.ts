import { TestBed } from '@angular/core/testing';

import { CarInfoService } from './car-info.service';

describe('CarInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarInfoService = TestBed.get(CarInfoService);
    expect(service).toBeTruthy();
  });
});
