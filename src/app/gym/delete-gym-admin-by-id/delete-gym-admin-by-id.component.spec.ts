import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGymAdminByIdComponent } from './delete-gym-admin-by-id.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('DeleteGymAdminByIdComponent', () => {
  let component: DeleteGymAdminByIdComponent;
  let fixture: ComponentFixture<DeleteGymAdminByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteGymAdminByIdComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteGymAdminByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
