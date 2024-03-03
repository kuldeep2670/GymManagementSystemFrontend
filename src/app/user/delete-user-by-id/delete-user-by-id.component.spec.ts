import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserByIdComponent } from './delete-user-by-id.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('DeleteUserByIdComponent', () => {
  let component: DeleteUserByIdComponent;
  let fixture: ComponentFixture<DeleteUserByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteUserByIdComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteUserByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
