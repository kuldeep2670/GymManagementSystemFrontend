import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartGymComponent } from './start-gym.component';

describe('StartGymComponent', () => {
  let component: StartGymComponent;
  let fixture: ComponentFixture<StartGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StartGymComponent]
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
