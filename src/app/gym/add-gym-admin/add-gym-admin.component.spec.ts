import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGymAdminComponent } from './add-gym-admin.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddGymAdminComponent', () => {
  let component: AddGymAdminComponent;
  let fixture: ComponentFixture<AddGymAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddGymAdminComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddGymAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
