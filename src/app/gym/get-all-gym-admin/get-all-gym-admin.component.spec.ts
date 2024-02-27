import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllGymAdminComponent } from './get-all-gym-admin.component';

describe('GetAllGymAdminComponent', () => {
  let component: GetAllGymAdminComponent;
  let fixture: ComponentFixture<GetAllGymAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllGymAdminComponent]
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
