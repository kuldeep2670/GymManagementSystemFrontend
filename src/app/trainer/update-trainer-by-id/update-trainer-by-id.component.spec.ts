import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrainerByIdComponent } from './update-trainer-by-id.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('UpdateTrainerByIdComponent', () => {
  let component: UpdateTrainerByIdComponent;
  let fixture: ComponentFixture<UpdateTrainerByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateTrainerByIdComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateTrainerByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
