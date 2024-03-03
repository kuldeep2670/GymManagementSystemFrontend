import { TestBed } from '@angular/core/testing';

import { TrainerService } from './trainer.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GymAdmin } from '../GymAdmin';

describe('TrainerService', () => {
  let service: TrainerService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TrainerService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get All Trainer', () => {
    const trainerData = {
      id:'1',
      trainerName:'rohan',
      phoneNo:'9876543211',
      specialization:'Calisthenics',
      gymAdmin: new GymAdmin()
    };
    service.getAll().subscribe((result: any) => {
      expect(result).toEqual(trainerData);
    });
    const req = testingController.expectOne(
      'http://localhost:8080/trainer/get'
    );
    req.flush(trainerData);
    testingController.verify();
  });

  it('should Get Trainer by Id', () => {
    const trainerData = {
      id:'1',
      trainerName:'rohan',
      phoneNo:'9876543211',
      specialization:'Calisthenics',
      gymAdmin: new GymAdmin()
    };
    service.getById(1).subscribe((result: any) => {
      expect(result).toEqual(trainerData);
    });
    const req = testingController.expectOne(
      'http://localhost:8080/trainer/get/1'
    );
    req.flush(trainerData);
    testingController.verify();
  });

  it('should Add Trainer', () => {
    const trainerData = {
      id:'1',
      trainerName:'rohan',
      phoneNo:'9876543211',
      specialization:'Calisthenics',
      gymAdmin: new GymAdmin()
    };
    service.add(trainerData).subscribe((result: any) => {
      expect(result).toEqual('Trainer added successfully');
    });
    const req = testingController.expectOne('http://localhost:8080/trainer/add');
    req.flush('Trainer added successfully');
    testingController.verify();
  });

  it('should Delete Trainer By Id', () => {
    service.deleteById(1).subscribe((result: any) => {
      expect(result).toEqual('Trainer deleted successfully');
    });
    const req = testingController.expectOne(
      'http://localhost:8080/trainer/delete/1'
    );

    req.flush('Trainer deleted successfully');
    testingController.verify();
  });

  it('should Update Trainer', () => {
    const trainerData = {
      id:'1',
      trainerName:'rohan',
      phoneNo:'9876543211',
      specialization:'Calisthenics',
      gymAdmin: new GymAdmin()
    };

    service.update(1, trainerData).subscribe((result: any) => {
      expect(result).toEqual('Trainer updated successfully');
    });
    const req = testingController.expectOne(
      'http://localhost:8080/trainer/update/1'
    );
    req.flush('Trainer updated successfully');
    testingController.verify();
  });




});
