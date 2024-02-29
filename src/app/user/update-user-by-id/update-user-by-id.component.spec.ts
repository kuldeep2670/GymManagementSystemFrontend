import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserByIdComponent } from './update-user-by-id.component';

describe('UpdateUserByIdComponent', () => {
  let component: UpdateUserByIdComponent;
  let fixture: ComponentFixture<UpdateUserByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateUserByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateUserByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
