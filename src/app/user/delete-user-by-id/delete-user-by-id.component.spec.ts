import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserByIdComponent } from './delete-user-by-id.component';

describe('DeleteUserByIdComponent', () => {
  let component: DeleteUserByIdComponent;
  let fixture: ComponentFixture<DeleteUserByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteUserByIdComponent]
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
