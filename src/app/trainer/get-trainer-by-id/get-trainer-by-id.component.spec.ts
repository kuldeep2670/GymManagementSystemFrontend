import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTrainerByIdComponent } from './get-trainer-by-id.component';

describe('GetTrainerByIdComponent', () => {
  let component: GetTrainerByIdComponent;
  let fixture: ComponentFixture<GetTrainerByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetTrainerByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetTrainerByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
