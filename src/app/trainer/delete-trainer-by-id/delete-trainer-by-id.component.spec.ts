import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTrainerByIDComponent } from './delete-trainer-by-id.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('DeleteTrainerByIDComponent', () => {
  let component: DeleteTrainerByIDComponent;
  let fixture: ComponentFixture<DeleteTrainerByIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteTrainerByIDComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
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
