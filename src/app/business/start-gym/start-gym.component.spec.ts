import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartGymComponent } from './start-gym.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('StartGymComponent', () => {
  let component: StartGymComponent;
  let fixture: ComponentFixture<StartGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StartGymComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
