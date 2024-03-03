import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllGymAdminComponent } from './get-all-gym-admin.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('GetAllGymAdminComponent', () => {
  let component: GetAllGymAdminComponent;
  let fixture: ComponentFixture<GetAllGymAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllGymAdminComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllGymAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
