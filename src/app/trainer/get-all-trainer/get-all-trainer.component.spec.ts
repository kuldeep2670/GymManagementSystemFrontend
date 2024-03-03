import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTrainerComponent } from './get-all-trainer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('GetAllTrainerComponent', () => {
  let component: GetAllTrainerComponent;
  let fixture: ComponentFixture<GetAllTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllTrainerComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
