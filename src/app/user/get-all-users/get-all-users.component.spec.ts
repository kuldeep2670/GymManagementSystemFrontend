import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllUsersComponent } from './get-all-users.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('GetAllUsersComponent', () => {
  let component: GetAllUsersComponent;
  let fixture: ComponentFixture<GetAllUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllUsersComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
