import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Trainer } from '../Trainer';
import { Packages } from '../Packages';
import { GymAdmin } from '../GymAdmin';

describe('UserService', () => {
  let service: UserService;
  let testingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should get All Users', () => {
    const userData = {
      id: 1,
      name: 'rohan',
      email: 'rohan@gmail.com',
      phoneNo: '9876541234',
    };
    service.getAll().subscribe((result: any) => {
      expect(result).toEqual(userData);
    });
    const req = testingController.expectOne(
      'http://localhost:8080/user/getAll'
    );
    req.flush(userData);
    testingController.verify();
  });

  it('should Get User by Id', () => {
    const userData = {
      id: 1,
      name: 'rohan',
      email: 'rohan@gmail.com',
      phoneNo: '9876541234',
    };
    service.getById(1).subscribe((result: any) => {
      expect(result).toEqual(userData);
    });
    const req = testingController.expectOne(
      'http://localhost:8080/user/getDetailsOfUser/1'
    );
    req.flush(userData);
    testingController.verify();
  });

  it('should Add Users', () => {
    const user = {
      id: 1,
      name: 'rohan singh',
      email: 'rohan123@gmail.com',
      phoneNo: '9876543210',
      packageExpiryDate:new Date('2024-03-03'),
      trainer: new Trainer(),
      packages:new Packages(),
      gymAdmin: new GymAdmin()
    };
    service.add(user).subscribe((result: any) => {
      expect(result).toEqual('User added Successfully');
    });
    const req = testingController.expectOne('http://localhost:8080/user/add');
    req.flush('User added Successfully');
    testingController.verify();
  });

  it('should Delete User By Id', () => {
    service.deleteById(1).subscribe((result: any) => {
      expect(result).toEqual('User deleted successfully');
    });
    const req = testingController.expectOne(
      'http://localhost:8080/user/delete/1'
    );

    req.flush('User deleted successfully');
    testingController.verify();
  });

  it('should Update User', () => {
    const newUser = {
      id: 1,
      name: 'rohan singh',
      email: 'rohan123@gmail.com',
      phoneNo: '9876543210',
      packageExpiryDate:new Date('2024-03-03'),
      trainer: new Trainer(),
      packages:new Packages(),
      gymAdmin: new GymAdmin()
    };

    service.update(1, newUser).subscribe((result: any) => {
      expect(result).toEqual('User updated successfully');
    });
    const req = testingController.expectOne(
      'http://localhost:8080/user/update/1'
    );
    req.flush('User updated successfully');
    testingController.verify();
  });
});
