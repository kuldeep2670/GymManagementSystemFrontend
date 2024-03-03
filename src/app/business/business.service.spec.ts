import { TestBed } from '@angular/core/testing';

import { BusinessService } from './business.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('BusinessService', () => {
  let service: BusinessService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BusinessService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get register User', () => {
    const userData = {
      name: 'rohan',
      email: 'rohan@gmail.com',
      phone: '9876543210',
    };
    service
      .registerUser(userData.name, userData.email, userData.phone)
      .subscribe((result: any) => {
        expect(result).toEqual('User saved successfully');
      });
    const req = testingController.expectOne(
      `http://localhost:8080/business/registerUser/${userData.name}/${userData.email}/${userData.phone}`
    );
    req.flush('User saved successfully');
    testingController.verify();
  });

  it('should start user gym', () => {
    const userData = {
      ID: 2,
      gymID: 1,
      trainerID: 52,
      packageID: 53,
    };
    service
      .startGym(
        userData.ID,
        userData.gymID,
        userData.trainerID,
        userData.packageID
      )
      .subscribe((result: any) => {
        expect(result).toEqual('User updated successfully');
      });
    const req = testingController.expectOne(
      `http://localhost:8080/business/startGym/${userData.ID}/${userData.gymID}/${userData.trainerID}/${userData.packageID}`
    );
    req.flush('User updated successfully');
    testingController.verify();
  });

  it('should Update User Packages', () => {
    const userData = {
      ID: 2,
      packageID: 53,
    };
    service
      .updateUserPackage(userData.ID, userData.packageID)
      .subscribe((result: any) => {
        expect(result).toEqual('User update successfully');
      });
    const req = testingController.expectOne(
      `http://localhost:8080/business/updateUserPackage/${userData.ID}/${userData.packageID}`
    );
    req.flush('User update successfully');
    testingController.verify();
  });

  it('should renew Package By Id', () => {
    service.renewal(1).subscribe((result: any) => {
      expect(result).toEqual('Package renewed successfully');
    });
    const req = testingController.expectOne(
      'http://localhost:8080/business/renewal/1'
    );

    req.flush('Package renewed successfully');
    testingController.verify();
  });

  it('should entry in Gym Package', () => {
    service.entryInGym(1).subscribe((result: any) => {
      expect(result).toEqual('Entry Allowed');
    });
    const req = testingController.expectOne(
      'http://localhost:8080/business/entryInGym/1'
    );
    req.flush('Entry Allowed');
    testingController.verify();
  });
});

