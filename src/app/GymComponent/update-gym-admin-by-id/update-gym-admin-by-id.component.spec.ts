import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGymAdminByIdComponent } from './update-gym-admin-by-id.component';

describe('UpdateGymAdminByIdComponent', () => {
  let component: UpdateGymAdminByIdComponent;
  let fixture: ComponentFixture<UpdateGymAdminByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateGymAdminByIdComponent]
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
