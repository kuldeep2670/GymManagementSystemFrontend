import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGymAdminByIdComponent } from './get-gym-admin-by-id.component';

describe('GetGymAdminByIdComponent', () => {
  let component: GetGymAdminByIdComponent;
  let fixture: ComponentFixture<GetGymAdminByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetGymAdminByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetGymAdminByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
