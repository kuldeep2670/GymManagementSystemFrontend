import { TestBed } from '@angular/core/testing';

import { GymAdminServiceService } from './gym-admin-service.service';

describe('GymAdminServiceService', () => {
  let service: GymAdminServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GymAdminServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
