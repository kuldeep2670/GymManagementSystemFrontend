import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGymAdminByIdComponent } from './delete-gym-admin-by-id.component';

describe('DeleteGymAdminByIdComponent', () => {
  let component: DeleteGymAdminByIdComponent;
  let fixture: ComponentFixture<DeleteGymAdminByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteGymAdminByIdComponent]
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
