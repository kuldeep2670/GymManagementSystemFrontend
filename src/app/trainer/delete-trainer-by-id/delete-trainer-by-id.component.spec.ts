import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTrainerByIDComponent } from './delete-trainer-by-id.component';

describe('DeleteTrainerByIDComponent', () => {
  let component: DeleteTrainerByIDComponent;
  let fixture: ComponentFixture<DeleteTrainerByIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteTrainerByIDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteTrainerByIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
