import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainerComponent } from './add-trainer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddTrainerComponent', () => {
  let component: AddTrainerComponent;
  let fixture: ComponentFixture<AddTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTrainerComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
