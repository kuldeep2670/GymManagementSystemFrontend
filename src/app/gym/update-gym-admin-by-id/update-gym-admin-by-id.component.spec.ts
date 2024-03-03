import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGymAdminByIdComponent } from './update-gym-admin-by-id.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('UpdateGymAdminByIdComponent', () => {
  let component: UpdateGymAdminByIdComponent;
  let fixture: ComponentFixture<UpdateGymAdminByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateGymAdminByIdComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateGymAdminByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
