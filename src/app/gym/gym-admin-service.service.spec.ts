import { TestBed } from '@angular/core/testing';

import { GymAdminServiceService } from './gym-admin-service.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('GymAdminServiceService', () => {
  let service: GymAdminServiceService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GymAdminServiceService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get All Gyms', () => {
    const gymData = {
      gymID: 1,
      name: 'Gold Gym',
      location: 'Noida',
    };
    service.getAll().subscribe((result: any) => {
      expect(result).toEqual(gymData);
    });
    const req = testingController.expectOne('http://localhost:8080/gym/getAll');
    req.flush(gymData);
    testingController.verify();
  });

  it('should Get Gym by Id', () => {
    const gymData = {
      gymID: 1,
      name: 'Gold Gym',
      location: 'Noida',
    };
    service.getById(1).subscribe((result: any) => {
      expect(result).toEqual(gymData);
    });
    const req = testingController.expectOne('http://localhost:8080/gym/get/1');
    req.flush(gymData);
    testingController.verify();
  });

  it('should Add Gyms', () => {
    const gymData = {
      gymID: 1,
      name: 'Gold Gym',
      location: 'Noida',
    };
    service.add(gymData).subscribe((result: any) => {
      expect(result).toEqual('Gym added successfully');
    });
    const req = testingController.expectOne('http://localhost:8080/gym/add');
    req.flush('Gym added successfully');
    testingController.verify();
  });

  it('should Delete Gym By Id', () => {
    service.deleteById(1).subscribe((result: any) => {
      expect(result).toEqual('Gym deleted successfully');
    });
    const req = testingController.expectOne(
      'http://localhost:8080/gym/delete/1'
    );

    req.flush('Gym deleted successfully');
    testingController.verify();
  });

  it('should Update Gym', () => {
    const gymData = {
      gymID: 1,
      name: 'Gold Gym',
      location: 'Noida',
    };

    service.update(1, gymData).subscribe((result: any) => {
      expect(result).toEqual('Gym updated successfully');
    });
    const req = testingController.expectOne(
      'http://localhost:8080/gym/update/1'
    );
    req.flush('Gym updated successfully');
    testingController.verify();
  });
});
