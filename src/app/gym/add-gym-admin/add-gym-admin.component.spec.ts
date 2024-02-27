import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGymAdminComponent } from './add-gym-admin.component';

describe('AddGymAdminComponent', () => {
  let component: AddGymAdminComponent;
  let fixture: ComponentFixture<AddGymAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddGymAdminComponent]
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
