import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTrainerByIdComponent } from './get-trainer-by-id.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('GetTrainerByIdComponent', () => {
  let component: GetTrainerByIdComponent;
  let fixture: ComponentFixture<GetTrainerByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetTrainerByIdComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetTrainerByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
