import { TestBed } from '@angular/core/testing';

import { PackagesService } from './packages.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PackagesService', () => {
  let service: PackagesService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PackagesService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get All Packages', () => {
    const packageData = {
      packageNo: 1,
      packageName: 'Gold',
      packageFees: 45000,
      mealIncluded: true,
    };
    service.getAll().subscribe((result: any) => {
      expect(result).toEqual(packageData);
    });
    const req = testingController.expectOne(
      'http://localhost:8080/package/get'
    );
    req.flush(packageData);
    testingController.verify();
  });

  it('should Get Package by Id', () => {
    const packageData = {
      packageNo: 1,
      packageName: 'Gold',
      packageFees: 45000,
      mealIncluded: true,
    };
    service.getById(1).subscribe((result: any) => {
      expect(result).toEqual(packageData);
    });
    const req = testingController.expectOne(
      'http://localhost:8080/package/get/1'
    );
    req.flush(packageData);
    testingController.verify();
  });

  it('should Add Packages', () => {
    const packageAdd = {
      packageNo: 1,
      packageName: 'Gold',
      packageFees: 45000,
      mealIncluded: true,
    };
    service.add(packageAdd).subscribe((result: any) => {
      expect(result).toEqual('Package added successfully');
    });
    const req = testingController.expectOne('http://localhost:8080/package/add');
    req.flush('Package added successfully');
    testingController.verify();
  });

  it('should Delete Package By Id', () => {
    service.deleteById(1).subscribe((result: any) => {
      expect(result).toEqual('Package deleted successfully');
    });
    const req = testingController.expectOne(
      'http://localhost:8080/package/delete/1'
    );

    req.flush('Package deleted successfully');
    testingController.verify();
  });

  it('should Update Package', () => {
    const packageUpdate = {
      packageNo: 1,
      packageName: 'Gold',
      packageFees: 45000,
      mealIncluded: true,
    };

    service.update(1, packageUpdate).subscribe((result: any) => {
      expect(result).toEqual('Package updated successfully');
    });
    const req = testingController.expectOne(
      'http://localhost:8080/package/update/1'
    );
    req.flush('Package updated successfully');
    testingController.verify();
  });

});
