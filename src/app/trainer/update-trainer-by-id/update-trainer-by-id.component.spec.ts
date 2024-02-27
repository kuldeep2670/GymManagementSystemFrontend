import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrainerByIdComponent } from './update-trainer-by-id.component';

describe('UpdateTrainerByIdComponent', () => {
  let component: UpdateTrainerByIdComponent;
  let fixture: ComponentFixture<UpdateTrainerByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateTrainerByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateTrainerByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
